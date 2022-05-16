DROP TRIGGER IF EXISTS after_trigger on "public"."ErpCurrencyRates";
CREATE TRIGGER after_trigger
AFTER INSERT ON "public"."ErpCurrencyRates"
FOR EACH ROW EXECUTE FUNCTION "erp_rates_after" ();