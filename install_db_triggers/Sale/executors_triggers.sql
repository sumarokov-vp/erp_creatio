DROP TRIGGER IF EXISTS before_trigger on "public"."SLExecutors";
CREATE TRIGGER before_trigger
BEFORE INSERT OR UPDATE ON "public"."SLExecutors"
FOR EACH ROW EXECUTE PROCEDURE "slerp_executors_before" ();

DROP TRIGGER IF EXISTS after_trigger on "public"."SLExecutors";
CREATE TRIGGER after_trigger
AFTER INSERT OR UPDATE ON "public"."SLExecutors"
FOR EACH ROW EXECUTE PROCEDURE "slerp_executors_after" ();