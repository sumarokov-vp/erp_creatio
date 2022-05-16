DROP TRIGGER IF EXISTS before_trigger on "public"."ErpEmployeesInSalary";
DROP TRIGGER IF EXISTS after_trigger on "public"."ErpEmployeesInSalary";


CREATE TRIGGER before_trigger
BEFORE INSERT OR UPDATE ON "public"."ErpEmployeesInSalary"
FOR EACH ROW EXECUTE PROCEDURE "erp_emp_before" ();


CREATE TRIGGER after_trigger
AFTER INSERT OR UPDATE ON "public"."ErpEmployeesInSalary"
FOR EACH ROW EXECUTE PROCEDURE "erp_emp_after" ();
