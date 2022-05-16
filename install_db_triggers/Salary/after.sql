CREATE OR REPLACE FUNCTION "erp_salary_after" ()
    RETURNS TRIGGER
    AS $$

BEGIN


    --- Detail (Employees)
    IF OLD."ErpRegistered" = false and NEW."ErpRegistered" = true THEN

        UPDATE
            "public"."ErpEmployeesInSalary" x
        SET
            "ErpRegistered" = TRUE
        WHERE
            x."ErpSalaryId" = NEW."Id";

    END IF;

    
    IF OLD."ErpRegistered" = true and NEW."ErpRegistered" = false THEN

        UPDATE
            "public"."ErpEmpInSalary" x
        SET
            "ErpRegistered" = false
        WHERE
            x."ErpSalaryId" = NEW."Id";


    END IF;


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
