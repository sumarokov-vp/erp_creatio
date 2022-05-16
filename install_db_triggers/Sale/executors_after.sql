CREATE OR REPLACE FUNCTION "slerp_executors_after" ()
    RETURNS TRIGGER
    AS $$
DECLARE
    _dt date;
    _contractor_id uuid;
    _currency_id uuid;
BEGIN

    DELETE FROM "public"."SLMu"
    WHERE "SLExecutorId" = NEW."Id";
    DELETE FROM "public"."SLProfitRegister"
    WHERE "SLExecutorsId" = NEW."Id";


    IF NEW."SLRegistered" = TRUE THEN

        select sale."SLDate", sale."SLContractorId", sale."SLCurrencyId"
        into _dt, _contractor_id, _currency_id
        from "public"."SLSales" sale
        WHERE sale."Id" = NEW."SLSaleId";

        -- Register
        PERFORM slerp_mutual_registration(
            amount => NEW."SLSalary",
            contact_id => NEW."SLExecutorId",
            contractor_id => _contractor_id,
            currency_id => NEW."SLCurrencyId",
            dt => _dt,
            executor_id => NEW."Id",
            sale_id => NEW."SLSaleId"

        );
        
        PERFORM slerp_profit_registration(
            amount => NEW."SLSalary"*(-1),
            contractor_id => _contractor_id,
            currency_id => NEW."SLCurrencyId",
            dt => _dt,
            executor_id => NEW."Id",
            sale_id => NEW."SLSaleId"
        );

    END IF;


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
