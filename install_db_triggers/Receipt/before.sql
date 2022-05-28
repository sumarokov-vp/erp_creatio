CREATE OR REPLACE FUNCTION "erp_receipt_before" ()
    RETURNS TRIGGER
    AS $$
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
    SELECT erp_receipt_total(NEW."Id") INTO NEW."ErpTotal";

    DELETE FROM "public"."ErpMutual"
    WHERE
        "ErpReceiptId" = NEW."Id";

    DELETE FROM "public"."ErpProfit"
    WHERE
        "ErpReceiptId" = NEW."Id";


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
