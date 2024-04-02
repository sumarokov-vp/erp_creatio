CREATE OR REPLACE FUNCTION "erp_executors_before" ()
    RETURNS TRIGGER
    AS $$

BEGIN
  IF NEW."ErpPercent" > 0 THEN
    SELECT "ErpTotal" * NEW."ErpPercent" / 100 INTO NEW."ErpAmount"
    FROM "public"."ErpSales"
    WHERE "Id" = NEW."ErpSaleId";
  END IF;

  select sale."ErpRegistered"
  into NEW."ErpRegistered"
  from "public"."ErpSales" sale
  WHERE sale."Id" = NEW."ErpSaleId";



  RETURN NEW;
END;
$$
LANGUAGE plpgsql;
