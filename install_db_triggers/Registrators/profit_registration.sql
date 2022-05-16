CREATE OR REPLACE FUNCTION "slerp_profit_registration" (
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
    ratio numeric(18,2);
    absolute_amount numeric(18,2);
BEGIN

    select slerp_get_sys_setting('CurrencyRateRatio'::TEXT) into ratio;
    select slerp_get_sys_setting('SLAccountingCurrency'::TEXT) INTO accounting_currency_id;
    
    select amount * cr."SLRatioRate" / ratio
    from "public"."SLCurrencyRatesRegister" cr
    INTO accounting_amount
    where
        cr."SLCurrency1Id" = accounting_currency_id
        and cr."SLCurrency2Id" = currency_id
        order by cr."CreatedOn" DESC;
    IF amount >= 0 then absolute_amount := amount;
    ELSE absolute_amount := amount*(-1);
    END IF;

    insert into "public"."SLProfitRegister"
    (
        "SLAmount",
        "SLContractorId",
        "SLCurrencyId",
        "SLDate",
        "SLMoneyId",
        "SLSaleId",
        "SLExecutorsId",
        "SLAccountingCurrencyId",
        "SLAccountingAmount",
        "SLEmpInSalaryId",
        "SLSalaryId",
        "SLReceiptId",
        "SLSectionId",
        "SLAbsoluteAmount"
    ) VALUES
        (COALESCE(amount,0), contractor_id, currency_id, dt, money_id,
        sale_id, executor_id, accounting_currency_id, accounting_amount,
        employee_in_salary_id, salary_id,
        receipt_id, section_id, COALESCE(absolute_amount,0));
END;
$$
LANGUAGE plpgsql;
