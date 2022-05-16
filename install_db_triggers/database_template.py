import psycopg
connection_string = 'host=192.168.1.1 user=creatio password=<password> dbname=creatio_sl'

with psycopg.connect(connection_string) as conn:
    with conn.cursor() as cur:
        sql_text = 'select * from public."Contact"'
        res = cur.execute(sql_text).fetchone()
        print(res)