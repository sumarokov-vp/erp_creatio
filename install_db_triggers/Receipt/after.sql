CREATE OR REPLACE FUNCTION "erp_receipts_after" ()
    RETURNS TRIGGER
    AS $$
DECLARE
    code_number int;
    new_name TEXT;
BEGIN

    IF NEW."ErpRegistered" = TRUE THEN

        -- Register
        
        PERFORM erp_mutual_registration(
            account_id => NEW."ErpAccountId",
            amount => NEW."ErpTotal",
            contact_id => NEW."ErpContactId",
            contractor_id => NEW."ErpContractorId",
            currency_id => NEW."ErpCurrencyId",
            dt => NEW."ErpDate",
            receipt_id => NEW."Id"
        );
        
        PERFORM erp_profit_registration(
            amount => NEW."ErpTotal",
            contractor_id => NEW."ErpContractorId",
            currency_id => NEW."ErpCurrencyId",
            dt => NEW."ErpDate",
            receipt_id => NEW."Id"
        );

    END IF;

    --- Detail (porducts)
    IF OLD."ErpRegistered" = false and NEW."ErpRegistered" = true THEN

        UPDATE
            "public"."ErpProductInReceipt" x
        SET
            "ErpRegistered" = TRUE
        WHERE
            x."ErpReceiptId" = NEW."Id";
    END IF;

    
    IF OLD."ErpRegistered" = true and NEW."ErpRegistered" = false THEN

        UPDATE
            "public"."ErpProductInReceipt" x
        SET
            "ErpRegistered" = false
        WHERE
            x."ErpReceiptId" = NEW."Id";
    END IF;


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
