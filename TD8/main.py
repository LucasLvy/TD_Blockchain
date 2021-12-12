import hashlib
import hmac
from requests import get, post, delete
import sqlite3

con = sqlite3.connect("data.db")
base_url = "https://api1.binance.com/api/v1/"
test_base_url = "https://testnet.binance.vision/api/v3/"
cur = con.cursor()


def get_all_crypto():
    return set([x['symbol'] for x in get(f"{base_url}exchangeInfo").json()["symbols"]])


def get_bid_or_ask(direction, symbol):
    return get(f"{base_url}depth?symbol={symbol}").json()[direction]


def get_order_book(symbol):
    return get(f"{base_url}depth?symbol={symbol}").json()


def refresh_data_candle(symbol, interval, start):
    return get(f"{base_url}klines?symbol={symbol}&interval={interval}&startTime={start}&limit=1000").json()


def candle_modify(symbol, interval):
    start = cur.execute("SELECT last_id, last_check FROM last_checks ORDER BY last_id DESC LIMIT 1").fetchall()
    id = 0 if not len(start) else start[0][0] + 1
    last_check = 0 if not len(start) else start[0][1]

    candles = refresh_data_candle(symbol, interval, last_check)
    for candle in candles:
        if candle[6] > last_check:
            cur.execute(f"""INSERT INTO binance_{symbol}_{interval} VALUES
                ({id},
                {candle[6]},
                {candle[2]},
                {candle[3]},
                {candle[1]},
                {candle[4]},
                {candle[5]},
                {candle[7]},
                0,
                0,
                0,
                0,
                0,
                0,
                0)
            """)
            if id == len(candles) - 1:
                cur.execute(
                    f"""INSERT INTO last_checks(id, exchange, trading_pair, duration, table_name, last_check, startdate, last_id) 
                    VALUES({id}, "binance", "{symbol}", "{interval}", "binance_{symbol}_{interval}", {candle[6]}, {candle[0]}, {id});""")
            id += 1
            con.commit()


def create_db():
    cur.execute(
        '''CREATE TABLE last_checks(
        Id INTEGER PRIMARY KEY,
        exchange TEXT,
        trading_pair TEXT,
        duration TEXT,
        table_name TEXT,
        last_check INT,
        startdate INT,
        last_id INT);''')


def create_candle_db(symbol, interval):
    cur.execute(
        f'''CREATE TABLE binance_{symbol}_{interval}(
        Id INTEGER PRIMARY KEY,
        date INT,
        high REAL,
        low REAL,
        open REAL,
        close REAL,
        volume REAL,
        quotevolume REAL,
        weightedaverga REAL,
        sma_7 REAL,
        ema_7 REAL,
        sma_30 REAL,
        ema_30 REAL,
        sma_200 REAL,
        ema_200 REAL
        );''')

def create_trade_db():
    cur.execute(
        f'''CREATE TABLE trades(
                uuid INTEGER PRIMARY KEY,
                pair TEXT,
                quantity REAL,
                price REAL,
                direction TEXT,
                type TEXT,
                timestamp INT,
                );''')

def create_order(API_KEY, SECRET_KEY, direction, price, amount, pair, order_type):
    servertimeint = get("https://api.binance.com/api/v1/time").json()['serverTime']
    params = f"symbol={pair}&timeInForce=GTC&timestamp={servertimeint}&side={direction}&type={order_type}&quantity={amount}&price={price}"
    headers = {
        "X-MBX-APIKEY": API_KEY,
    }
    hashedsig = hmac.new(SECRET_KEY.encode(), params.encode(), hashlib.sha256).hexdigest()
    res = post(f"{test_base_url}order?{params}&signature={hashedsig}", headers=headers).json()
    cur.execute(f"""INSERT INTO trades VALUES
                    ({res["orderId"]},
                    {res["symbol"]},
                    {res["origQty"]},
                    {res["price"]},
                    {res["side"]},
                    {res["type"]},
                    {res["transactTime"]})
                """)
    con.commit()
    return res


def cancel_order(API_KEY, SECRET_KEY, uuid, pair):
    servertimeint = get("https://api.binance.com/api/v1/time").json()['serverTime']
    params = f"symbol={pair}&timestamp={servertimeint}&orderId={uuid}"
    headers = {
        "X-MBX-APIKEY": API_KEY,
    }
    hashedsig = hmac.new(SECRET_KEY.encode(), params.encode(), hashlib.sha256).hexdigest()
    res = delete(f"{test_base_url}order?{params}&signature={hashedsig}", headers=headers).json()
    cur.execute(f"DELETE FROM trades WHERE uuid={uuid};")
    con.commit()
    return res


API_KEY = ""
SECRET_API_KEY = ""

if __name__ == '__main__':
    print()
    # get_ordres()
    print(create_order(API_KEY, SECRET_API_KEY, 'SELL', 4000, 1, 'ETHUSDT', 'LIMIT'))
    # print(cancel_order(API_KEY, SECRET_API_KEY, 43020, "ETHUSDT"))
    # create_candle_db("BTCUSDT", "5m")
    # create_db()
    # candle_modify("BTCUSDT", "5m")
    # print(cur.execute("SELECT COUNT(*) FROM binance_BTCUSDT_5m").fetchall())
    # cryptos = get_all_crypto()
    # get_bid_or_ask("asks", cryptos[0])
    # print(refresh_data_candle('BTCUSDT', '5m'))
