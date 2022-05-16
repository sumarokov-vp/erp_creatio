CREATE OR REPLACE FUNCTION "erp_emp_before" ()
    RETURNS TRIGGER
    AS $$

BEGIN
    select x."ErpRegistered"
    into NEW."ErpRegistered"
    from "public"."ErpSalary" x
    WHERE x."Id" = NEW."ErpSalaryId";
    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
