DROP TRIGGER IF EXISTS before_trigger on "public"."ErpSalary";
CREATE TRIGGER before_trigger
BEFORE INSERT OR UPDATE ON "public"."ErpSalary"
FOR EACH ROW EXECUTE PROCEDURE "erp_salary_before" ();

DROP TRIGGER IF EXISTS after_trigger on "public"."ErpSalary";
CREATE TRIGGER after_trigger
AFTER INSERT OR UPDATE ON "public"."ErpSalary"
FOR EACH ROW EXECUTE PROCEDURE "erp_salary_after" ();