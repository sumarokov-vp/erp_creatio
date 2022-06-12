CREATE OR REPLACE FUNCTION "erp_sales_before_delete" ()
    RETURNS TRIGGER
    AS $$
BEGIN
    PERFORM erp_sale_unregister(OLD."Id");

    -- UPDATE public."ErpSales"
    -- SET "ErpRegistered" = False
    -- WHERE "Id" = OLD."Id";

    DELETE FROM public."ErpProductInErpSale"
    WHERE "ErpSaleId" = OLD."Id";

    DELETE FROM public."ErpSaleExecutor"
    WHERE "ErpSaleId" = OLD."Id";
    RETURN OLD;
END;
$$
LANGUAGE plpgsql;
