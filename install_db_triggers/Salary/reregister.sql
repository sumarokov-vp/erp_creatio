CREATE OR REPLACE FUNCTION "erp_salary_reregister" ()
    RETURNS void
    AS $$

BEGIN
    UPDATE "public"."ErpSalary" mon
    SET
        "ErpRegistered" = FALSE,
        "ErpReregister" = TRUE
    WHERE
        mon."ErpRegistered" = TRUE;

    UPDATE "public"."ErpSalary" mon
    SET
        "ErpRegistered" = TRUE,
        "ErpReregister" = FALSE
    WHERE
        mon."ErpReregister" = TRUE;
END;
$$
LANGUAGE plpgsql;
