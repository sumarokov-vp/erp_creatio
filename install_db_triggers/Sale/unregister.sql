CREATE OR REPLACE FUNCTION "erp_sale_unregister" (sale_id uuid)
    RETURNS void
    AS $$
BEGIN

    DELETE FROM "public"."ErpMutual"
    WHERE 
        "ErpSaleId" = sale_id 
        AND "ErpSaleExecutorId" IS NULL;

    DELETE FROM "public"."ErpProfit"
    WHERE
        "ErpSaleId" = sale_id
        AND "ErpSaleExecutorId" IS NULL;

END;
$$
LANGUAGE plpgsql;

