DROP TRIGGER IF EXISTS before_trigger on "public"."ErpSaleExecutor";
CREATE TRIGGER before_trigger
BEFORE INSERT OR UPDATE ON "public"."ErpSaleExecutor"
FOR EACH ROW EXECUTE PROCEDURE "erp_executors_before" ();

DROP TRIGGER IF EXISTS after_trigger on "public"."ErpSaleExecutor";
CREATE TRIGGER after_trigger
AFTER INSERT OR UPDATE ON "public"."ErpSaleExecutor"
FOR EACH ROW EXECUTE PROCEDURE "erp_executors_after" ();