CREATE OR REPLACE FUNCTION "erp_profit_registration" (
    amount numeric(18,2) DEFAULT NULL,
    contractor_id uuid  DEFAULT NULL,
    currency_id uuid DEFAULT NULL,
    dt date DEFAULT NULL,
    money_id uuid DEFAULT NULL,
    sale_id uuid DEFAULT NULL,
    executor_id uuid default NULL,
    employee_in_salary_id uuid default NULL,
    salary_id uuid default NULL,
    receipt_id uuid default NULL,
    section_id uuid default NULL
)
    RETURNS void
    AS $$
DECLARE
    accounting_amount numeric(18,2);
    accounting_currency_id uuid DEFAULT NULL;
BEGIN

    select erp_get_sys_setting('ErpAccountingCurrency'::TEXT) INTO accounting_currency_id;
    
    select amount * cr."ErpRatioRate" / cr."ErpRatio"
    from "public"."ErpCurrencyRates" cr
    INTO accounting_amount
    where
        cr."ErpCurrency1Id" = accounting_currency_id
        and cr."ErpCurrency2Id" = currency_id
        order by cr."CreatedOn" DESC;

    insert into "public"."ErpProfit"
    (
        "ErpAmount",
        "ErpContractorId",
        "ErpCurrencyId",
        "ErpDate",
        "ErpMoneyId",
        "ErpSaleId",
        "ErpSaleExecutorsId",
        "ErpAccountingCurrencyId",
        "ErpAccountingAmount",
        "ErpEmployeeInSalaryId",
        "ErpSalaryId",
        "ErpReceiptId",
        "ErpSectionId"
    ) VALUES
        (COALESCE(amount,0), contractor_id, currency_id, dt, money_id,
        sale_id, executor_id, accounting_currency_id, COALESCE(accounting_amount),
        employee_in_salary_id, salary_id,
        receipt_id, section_id);
END;
$$
LANGUAGE plpgsql;
