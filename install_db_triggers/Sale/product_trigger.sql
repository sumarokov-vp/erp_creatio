DROP TRIGGER IF EXISTS before_trigger on "public"."ErpProductInErpSale";
CREATE TRIGGER before_trigger
BEFORE INSERT OR UPDATE ON "public"."ErpProductInErpSale"
FOR EACH ROW EXECUTE PROCEDURE "erp_product_before" ();

DROP TRIGGER IF EXISTS after_trigger on "public"."ErpProductInErpSale";
CREATE TRIGGER after_trigger
AFTER INSERT OR UPDATE ON "public"."ErpProductInErpSale"
FOR EACH ROW EXECUTE PROCEDURE "erp_product_after" ();
