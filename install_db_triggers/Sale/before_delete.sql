CREATE OR REPLACE FUNCTION "erp_sales_before_delete" ()
    RETURNS TRIGGER
    AS $$
BEGIN
    PERFORM erp_sale_unregister(OLD."Id");
    RETURN OLD;
END;
$$
LANGUAGE plpgsql;
