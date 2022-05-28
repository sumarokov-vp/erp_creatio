CREATE OR REPLACE FUNCTION "erp_receipt_total" (receipt_id uuid)
    RETURNS NUMERIC
    AS $$
DECLARE
    _total NUMERIC;
BEGIN
    select sum(ps."ErpTotal")
    into _total
    FROM "public"."ErpProductInReceipt" ps
    WHERE ps."ErpReceiptId" = receipt_id;

    RETURN _total;
END;
$$
LANGUAGE plpgsql;