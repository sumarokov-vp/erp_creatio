CREATE OR REPLACE FUNCTION "erp_receipt_reregister" ()
    RETURNS void
    AS $$

BEGIN
    UPDATE "public"."ErpReceipt" x 
    SET
        "ErpRegistered" = FALSE,
        "ErpReregister" = TRUE
    WHERE
        x."ErpRegistered" = TRUE;

    UPDATE "public"."ErpReceipts" x
    SET
        "ErpRegistered" = TRUE,
        "ErpReregister" = FALSE
    WHERE
        x."ErpReregister" = TRUE;
END;
$$
LANGUAGE plpgsql;