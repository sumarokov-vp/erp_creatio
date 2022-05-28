CREATE OR REPLACE FUNCTION "erp_product_receipt_after" ()
    RETURNS TRIGGER
    AS $$
DECLARE
    _dt date;
    _contractor_id uuid;
    _stock_id uuid;
    _is_service BOOLEAN;
    _total NUMERIC;
BEGIN

        -- Update Receipt's Total
    SELECT erp_receipt_total(NEW."ErpReceiptId") INTO _total;

    UPDATE "public"."ErpReceipt" x
    SET "ErpTotal" = _total
    WHERE x."Id" = NEW."ErpReceiptId";

    DELETE FROM "public"."ErpStock"
    WHERE "ErpProductInReceiptId" = NEW."Id";

    IF NEW."ErpRegistered" = TRUE THEN

        select p."ErpService"
        into _is_service
        from "public"."Product" p
        where p."Id" = NEW."ErpProductId";

        -- Register

        IF _is_service != true THEN
            select x."ErpDate", x."ErpContractorId", x."ErpStockId"
            into _dt, _contractor_id, _stock_id
            FROM "public"."ErpReceipt" x
            WHERE x."Id" = NEW."ErpReceiptId";

            PERFORM erp_stock_registration(
                amount => NEW."ErpTotal" ,
                contractor_id => _contractor_id,
                dt => _dt,
                price => NEW."ErpPrice",
                product_id => NEW."ErpProductId",
                quantity => NEW."ErpQuantity",
                stock_id => _stock_id,
                product_in_receipt_id => NEW."Id",
                receipt_id => NEW."ErpReceiptId",
                currency => NEW."ErpCurrency"
            );
        END IF;

    END IF;


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
