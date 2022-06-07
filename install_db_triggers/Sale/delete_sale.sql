
CREATE OR REPLACE FUNCTION "erp_delete_sale" (sale_id uuid)
    RETURNS void
    AS $$
BEGIN
    UPDATE public."ErpSales"
    SET "ErpRegistered" = False
    WHERE "Id" = sale_id;

    DELETE FROM public."ErpProductInErpSale"
    WHERE "ErpSaleId" = sale_id;

    DELETE FROM public."ErpSaleExecutor"
    WHERE "ErpSaleId" = sale_id;

    DELETE FROM public."ErpSales"
    WHERE "Id" = sale_id;
END;
$$
LANGUAGE plpgsql;