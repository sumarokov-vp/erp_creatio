CREATE OR REPLACE FUNCTION "erp_sales_reregister" ()
    RETURNS void
    AS $$

BEGIN
    UPDATE "public"."ErpSales" sale
    SET
        "ErpRegistered" = FALSE,
        "ErpReregister" = TRUE
    WHERE
        sale."ErpRegistered" = TRUE;

    UPDATE "public"."ErpSales" sale
    SET
        "ErpRegistered" = TRUE,
        "ErpReregister" = FALSE
    WHERE
        sale."ErpReregister" = TRUE;
END;
$$
LANGUAGE plpgsql;
