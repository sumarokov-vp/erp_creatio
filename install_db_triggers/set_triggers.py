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
    # 'postgre_triggers/SLExecutors/executors_after.sql',
    # 'postgre_triggers/SLExecutors/executors_before.sql',
    # 'postgre_triggers/SLExecutors/executors_triggers.sql',
    # 'postgre_triggers/SLMoney/money_naming.sql',
    # 'postgre_triggers/SLMoney/money_after.sql',
    # 'postgre_triggers/SLMoney/money_before.sql',
    # 'postgre_triggers/SLMoney/money_reregister.sql',
    # 'postgre_triggers/SLMoney/money_triggers.sql',
    # 'postgre_triggers/SLProductInReceipt/poduct_r_before.sql',
    # 'postgre_triggers/SLProductInReceipt/product_r_after.sql',
    # 'postgre_triggers/SLProductInReceipt/product_r_trigger.sql',
    # 'postgre_triggers/SLProductInSale/product_after.sql',
    # 'postgre_triggers/SLProductInSale/product_before.sql',
    # 'postgre_triggers/SLProductInSale/product_trigger.sql',
    # 'postgre_triggers/SLSalary/salary_after.sql',
    # 'postgre_triggers/SLSalary/salary_before.sql',
    # 'postgre_triggers/SLSalary/salary_reregister.sql',
    # 'postgre_triggers/SLSalary/salary_triggers.sql',
    # 'postgre_triggers/SLSales/sale_naming.sql',
    # 'postgre_triggers/SLSales/get_sale_totals.sql',
    # 'postgre_triggers/SLSales/sale_after.sql',
    # 'postgre_triggers/SLSales/sale_before.sql',
    # 'postgre_triggers/SLSales/sale_reregister.sql',
    # 'postgre_triggers/SLSales/sale_triggers.sql',
    

]

with psycopg.connect(connection_string) as conn:
    with conn.cursor() as cur:
        for file in file_list:
            sql_text = open(file, "r").read()
            cur.execute(sql_text)
    conn.commit()

print("\nTriggers successfully installed")