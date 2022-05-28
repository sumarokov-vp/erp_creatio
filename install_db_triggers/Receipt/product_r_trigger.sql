DROP TRIGGER IF EXISTS before_trigger on "public"."ErpProductInReceipt";
CREATE TRIGGER before_trigger
BEFORE INSERT OR UPDATE ON "public"."ErpProductInReceipt"
FOR EACH ROW EXECUTE PROCEDURE "erp_product_receipt_before" ();

DROP TRIGGER IF EXISTS after_trigger on "public"."ErpProductInReceipt";
CREATE TRIGGER after_trigger
AFTER INSERT OR UPDATE ON "public"."ErpProductInReceipt"
FOR EACH ROW EXECUTE PROCEDURE "erp_product_receipt_after" ();
