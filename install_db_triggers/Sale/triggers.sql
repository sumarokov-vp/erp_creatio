DROP TRIGGER IF EXISTS before_trigger on "public"."ErpSales";
CREATE TRIGGER before_trigger
BEFORE INSERT OR UPDATE ON "public"."ErpSales"
FOR EACH ROW EXECUTE PROCEDURE "erp_sales_before" ();

DROP TRIGGER IF EXISTS after_trigger on "public"."ErpSales";
CREATE TRIGGER after_trigger
AFTER INSERT OR UPDATE ON "public"."ErpSales"
FOR EACH ROW EXECUTE PROCEDURE "erp_sales_after" ();

DROP TRIGGER IF EXISTS before_delete on "public"."ErpSales";
CREATE TRIGGER before_delete
BEFORE DELETE ON "public"."ErpSales"
FOR EACH ROW EXECUTE PROCEDURE "erp_sales_before_delete" ();