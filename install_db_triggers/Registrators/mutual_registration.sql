CREATE OR REPLACE FUNCTION "slerp_mutual_registration" (
    account_id uuid DEFAULT NULL,
    amount numeric(18,2) DEFAULT NULL,
    contact_id uuid DEFAULT NULL,
    dt date DEFAULT NULL,
    money_id uuid DEFAULT NULL,
    currency_id uuid DEFAULT NULL,
    contractor_id uuid  DEFAULT NULL,
    sale_id uuid DEFAULT NULL,
    entity_type_id uuid default NULL,
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
    ratio numeric(18,2);
BEGIN

    select erp_get_sys_setting('CurrencyRateRatio'::TEXT) into ratio;
    select erp_get_sys_setting('SLAccountingCurrency'::TEXT) INTO accounting_currency_id;
    
    select amount * cr."SLRatioRate" / ratio
    from "public"."SLCurrencyRatesRegister" cr
    INTO accounting_amount
    where
        cr."SLCurrency1Id" = accounting_currency_id
        and cr."SLCurrency2Id" = currency_id
        order by cr."CreatedOn" DESC;


    insert into "public"."SLMu"
    (
        "SLAccountId",
        "SLAmount",
        "SLContactId",
        "SLDate",
        "SLMoneyId",
        "SLCurrencyId",
        "SLContractorId",
        "SLSaleId",
        "SLEntityTypeId",
        "SLAccountingAmount",
        "SLAccountingCurrencyId",
        "SLEmpInSalaryId",
        "SLSalaryId",
        "SLReceiptId",
        "SLExecutorId"
    ) VALUES
        (account_id, COALESCE(amount,0), contact_id, dt, money_id, currency_id,
        contractor_id, sale_id, entity_type_id, accounting_amount,
        accounting_currency_id, employee_in_salary_id, salary_id,
        receipt_id, executor_id);
END;
$$
LANGUAGE plpgsql;
