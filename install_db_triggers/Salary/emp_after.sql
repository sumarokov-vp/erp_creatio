CREATE OR REPLACE FUNCTION "erp_emp_after" ()
    RETURNS TRIGGER
    AS $$
DECLARE
    _dt date;
    _contractor_id uuid;
    _amount NUMERIC;
BEGIN

    DELETE FROM "public"."ErpMutual"
    WHERE "ErpEmpInSalaryId" = NEW."Id";

    DELETE FROM "public"."ErpProfit"
    WHERE "ErpEmployeeInSalary" = NEW."Id";

    _amount := NEW."ErpAmount";


    IF NEW."ErpRegistered" = TRUE THEN

        select x."ErpDate", x."ErpContractorId"
        into _dt, _contractor_id
        from "public"."ErpSalary" x
        WHERE x."Id" = NEW."ErpSalaryId";

        IF NEW."ErpPenalty" = TRUE THEN
            _amount := _amount * (-1);
        END IF;
        
        -- Register
        PERFORM Erperp_mutual_registration(
            amount => _amount,
            contact_id => NEW."ErpContactId",
            contractor_id => _contractor_id,
            currency_id => NEW."ErpCurrencyId",
            dt => _dt,
            employee_in_salary_id => NEW."Id"
        );
        
        PERFORM Erperp_profit_registration(
            amount => _amount*(-1),
            contractor_id => _contractor_id,
            currency_id => NEW."ErpCurrencyId",
            dt => _dt,
            employee_in_salary_id => NEW."Id"
        );

    END IF;


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
