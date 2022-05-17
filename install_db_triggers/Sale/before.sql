CREATE OR REPLACE FUNCTION "erp_sales_before" ()
    RETURNS TRIGGER
    AS $$
DECLARE
    new_name TEXT;
BEGIN

    -- Coding
    if NEW."ErpCode" = 0 THEN
        SELECT max("ErpCode") + 1 into NEW."ErpCode" FROM "public"."ErpSales";
    END IF;

    -- Naming
    select erp_sale_naming (NEW) INTO NEW."ErpName";

    -- Totals
    SELECT COALESCE(erp_get_sale_totals(NEW."Id"),0) INTO NEW."ErpTotal";

    DELETE FROM "public"."ErpMutual"
    WHERE 
        "ErpSaleId" = NEW."Id"
        AND "ErpSaleExecutorId" IS NULL;

    DELETE FROM "public"."ErpProfit"
    WHERE
        "ErpSaleId" = NEW."Id"
        AND "ErpSaleExecutorId" IS NULL;


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
