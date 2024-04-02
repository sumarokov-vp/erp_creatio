CREATE OR REPLACE FUNCTION public.erp_receipt_before()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
    new_name TEXT;
    --mutual_record "ErpMu";
BEGIN

    -- Coding
    if NEW."ErpCode" = 0 THEN
        SELECT max("ErpCode") + 1 into NEW."ErpCode" FROM "public"."ErpReceipt";
    END IF;

    -- Naming
    select erp_receipts_naming (NEW) INTO NEW."ErpName";

    -- Totals
    IF (NEW."ErpTotal" = 0) THEN
    	SELECT erp_receipt_total(NEW."Id") INTO NEW."ErpTotal";
	END IF;

    DELETE FROM "public"."ErpMutual"
    WHERE
        "ErpReceiptId" = NEW."Id";

    DELETE FROM "public"."ErpProfit"
    WHERE
        "ErpReceiptId" = NEW."Id";


    RETURN NEW;
END;
$function$
