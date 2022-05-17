DROP TRIGGER IF EXISTS before_trigger on "public"."ErpMoney";
CREATE TRIGGER before_trigger
BEFORE INSERT OR UPDATE ON "public"."ErpMoney"
FOR EACH ROW EXECUTE PROCEDURE "erp_money_before" ();

DROP TRIGGER IF EXISTS after_trigger on "public"."ErpMoney";
CREATE TRIGGER after_trigger
AFTER INSERT OR UPDATE ON "public"."ErpMoney"
FOR EACH ROW EXECUTE PROCEDURE "erp_money_after" ();