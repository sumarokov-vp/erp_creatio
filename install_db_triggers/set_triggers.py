import psycopg
from database import connection_string

file_list=[
    'install_db_triggers/get_sys_setting.sql',
    'install_db_triggers/currency_rates/after.sql',
    'install_db_triggers/currency_rates/triggers.sql',
    'install_db_triggers/Registrators/fund_registration.sql',
    'install_db_triggers/Registrators/mutual_registration.sql',
    'install_db_triggers/Registrators/profit_registration.sql',
    'install_db_triggers/Registrators/stock_registration.sql',
    'install_db_triggers/Salary/emp_after.sql',
    'install_db_triggers/Salary/emp_before.sql',
    'install_db_triggers/Salary/emp_triggers.sql',
    'install_db_triggers/Salary/after.sql',
    'install_db_triggers/Salary/before.sql',
    'install_db_triggers/Salary/triggers.sql',
    'install_db_triggers/Salary/reregister.sql',
    'install_db_triggers/Sale/sale_naming.sql',
    'install_db_triggers/Sale/sale_reregister.sql',
    'install_db_triggers/Sale/get_sale_totals.sql',
    'install_db_triggers/Sale/executors_after.sql',
    'install_db_triggers/Sale/executors_before.sql',
    'install_db_triggers/Sale/executors_triggers.sql',
    'install_db_triggers/Sale/product_after.sql',
    'install_db_triggers/Sale/product_before.sql',
    'install_db_triggers/Sale/product_trigger.sql',
    'install_db_triggers/Sale/after.sql',
    'install_db_triggers/Sale/before.sql',
    'install_db_triggers/Sale/triggers.sql',
    'install_db_triggers/Money/naming.sql',
    'install_db_triggers/Money/reregister.sql',
    'install_db_triggers/Money/after.sql',
    'install_db_triggers/Money/before.sql',
    'install_db_triggers/Money/triggers.sql',
    'install_db_triggers/Receipt/naming.sql',
    'install_db_triggers/Receipt/total.sql',
    'install_db_triggers/Receipt/reregister.sql',
    'install_db_triggers/Receipt/poduct_r_before.sql',
    'install_db_triggers/Receipt/product_r_after.sql',
    'install_db_triggers/Receipt/product_r_trigger.sql',
    'install_db_triggers/Receipt/before.sql',
    'install_db_triggers/Receipt/after.sql',
    'install_db_triggers/Receipt/triggers.sql',

]

with psycopg.connect(connection_string) as conn:
    with conn.cursor() as cur:
        for file in file_list:
            sql_text = open(file, "r").read()
            cur.execute(sql_text)
    conn.commit()

print("\nTriggers successfully installed")