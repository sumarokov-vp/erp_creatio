CREATE OR REPLACE FUNCTION "erp_money_reregister" ()
    RETURNS void
    AS $$

BEGIN
    UPDATE "public"."ErpMoney" mon
    SET
        "ErpRegistered" = FALSE,
        "ErpReregister" = TRUE
    WHERE
        mon."ErpRegistered" = TRUE;

    UPDATE "public"."ErpMoney" mon
    SET
        "ErpRegistered" = TRUE,
        "ErpReregister" = FALSE
    WHERE
        mon."ErpReregister" = TRUE;
END;
$$
LANGUAGE plpgsql;
