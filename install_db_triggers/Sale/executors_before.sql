CREATE OR REPLACE FUNCTION "erp_executors_before" ()
    RETURNS TRIGGER
    AS $$

BEGIN

    select sale."ErpRegistered"
    into NEW."ErpRegistered"
    from "public"."ErpSales" sale
    WHERE sale."Id" = NEW."ErpSaleId";



    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
