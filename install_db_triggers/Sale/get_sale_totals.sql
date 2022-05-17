CREATE OR REPLACE FUNCTION "erp_get_sale_totals" (sale_id uuid)
    RETURNS NUMERIC
    AS $$
DECLARE
    _total NUMERIC;
BEGIN
    select sum(ps."ErpTotal")
    into _total
    FROM "public"."ErpProductInErpSale" ps
    WHERE ps."ErpSaleId" = sale_id;

    RETURN _total;
END;
$$
LANGUAGE plpgsql;