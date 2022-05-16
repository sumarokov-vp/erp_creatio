CREATE OR REPLACE FUNCTION "erp_mutual_registration" (
    account_id uuid DEFAULT NULL,
    amount numeric(18,2) DEFAULT NULL,
    contact_id uuid DEFAULT NULL,
    dt date DEFAULT NULL,
    money_id uuid DEFAULT NULL,
    currency_id uuid DEFAULT NULL,
    contractor_id uuid  DEFAULT NULL,
    sale_id uuid DEFAULT NULL,
    employee_in_salary_id uuid default NULL,
    salary_id uuid default NULL,
    receipt_id uuid default NULL,
    executor_id uuid default NULL
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


    insert into "public"."ErpMutual"
    (
        "ErpAccountId",
        "ErpAmount",
        "ErpContactId",
        "ErpDate",
        "ErpMoneyId",
        "ErpCurrencyId",
        "ErpContractorId",
        "ErpSaleId",
        "ErpAccountingAmount",
        "ErpAccountingCurrencyId",
        "ErpEmpInSalaryId",
        "ErpSalaryId",
        "ErpReceiptId",
        "ErpSaleExecutorId"
    ) VALUES
        (account_id, COALESCE(amount,0), contact_id, dt, money_id, currency_id,
        contractor_id, sale_id, COALESCE(accounting_amount, 0),
        accounting_currency_id, employee_in_salary_id, salary_id,
        receipt_id, executor_id);
END;
$$
LANGUAGE plpgsql;
