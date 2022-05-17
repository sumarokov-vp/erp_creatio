CREATE OR REPLACE FUNCTION "erp_executors_after" ()
    RETURNS TRIGGER
    AS $$
DECLARE
    _dt date;
    _contractor_id uuid;
BEGIN

    DELETE FROM "public"."ErpMutual"
    WHERE "ErpSaleExecutorId" = NEW."Id";
    DELETE FROM "public"."ErpProfit"
    WHERE "ErpSaleExecutorId" = NEW."Id";


    IF NEW."ErpRegistered" = TRUE THEN

        select sale."ErpDate", sale."ErpContractorId"
        into _dt, _contractor_id 
        from "public"."ErpSales" sale
        WHERE sale."Id" = NEW."ErpSaleId";

        -- Register
        PERFORM erp_mutual_registration(
            amount => NEW."ErpAmount",
            contact_id => NEW."ErpContactId",
            contractor_id => _contractor_id,
            currency_id => NEW."ErpCurrencyId",
            dt => _dt,
            executor_id => NEW."Id",
            sale_id => NEW."ErpSaleId"

        );
        
        PERFORM erp_profit_registration(
            amount => NEW."ErpAmount"*(-1),
            contractor_id => _contractor_id,
            currency_id => NEW."ErpCurrencyId",
            dt => _dt,
            executor_id => NEW."Id",
            sale_id => NEW."ErpSaleId"
        );

    END IF;


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
