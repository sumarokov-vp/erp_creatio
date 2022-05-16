CREATE OR REPLACE FUNCTION "slerp_executors_before" ()
    RETURNS TRIGGER
    AS $$

BEGIN
    -- Unregister

    -- DELETE FROM "public"."SLMu"
    -- WHERE "SLExecutorId" = NEW."Id";

    -- DELETE FROM "public"."SLProfitRegister"
    -- WHERE "SLExecutorsId" = NEW."Id";   

    select sale."SLRegistered"
    into NEW."SLRegistered"
    from "public"."SLSales" sale
    WHERE sale."Id" = NEW."SLSaleId";



    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
