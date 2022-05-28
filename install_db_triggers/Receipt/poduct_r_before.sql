CREATE OR REPLACE FUNCTION "erp_product_receipt_before" ()
    RETURNS TRIGGER
    AS $$

BEGIN

    select x."ErpRegistered"
    into NEW."ErpRegistered"
    from "public"."ErpReceipt" x
    WHERE x."Id" = NEW."ErpReceiptId";

    NEW."ErpTotal" := NEW."ErpPrice" * NEW."ErpQuantity";

    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
