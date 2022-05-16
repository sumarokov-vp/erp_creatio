CREATE OR REPLACE FUNCTION "erp_salary_before" ()
    RETURNS TRIGGER
    AS $$

BEGIN

    DELETE FROM "public"."ErpMutual"
    WHERE 
        "ErpSalaryId" = NEW."Id"
        AND "ErpEmpInSalaryId" IS NULL;

    DELETE FROM "public"."ErpProfit"
    WHERE
        "ErpSalaryId" = NEW."Id"
        AND "ErpEmployeeInSalaryId" IS NULL;
    
    RETURN NEW;

END;
$$
LANGUAGE plpgsql;
