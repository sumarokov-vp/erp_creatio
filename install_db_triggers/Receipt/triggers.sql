DROP TRIGGER IF EXISTS before_trigger on "public"."ErpReceipt";
CREATE TRIGGER before_trigger
BEFORE INSERT OR UPDATE ON "public"."ErpReceipt"
FOR EACH ROW EXECUTE PROCEDURE "erp_receipt_before" ();

DROP TRIGGER IF EXISTS after_trigger on "public"."ErpReceipt";
CREATE TRIGGER after_trigger
AFTER INSERT OR UPDATE ON "public"."ErpReceipt"
FOR EACH ROW EXECUTE PROCEDURE "erp_receipts_after" ();