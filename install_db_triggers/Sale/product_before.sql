CREATE OR REPLACE FUNCTION "erp_product_before" ()
    RETURNS TRIGGER
    AS $$

BEGIN

    select sale."ErpRegistered"
    into NEW."ErpRegistered"
    from "public"."ErpSales" sale
    WHERE sale."Id" = NEW."ErpSaleId";

    NEW."ErpTotal" := NEW."ErpPrice" * NEW."ErpQuantity";

    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
