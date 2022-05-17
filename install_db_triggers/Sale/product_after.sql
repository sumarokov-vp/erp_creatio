CREATE OR REPLACE FUNCTION "erp_product_after" ()
    RETURNS TRIGGER
    AS $$
DECLARE
    _dt date;
    _contractor_id uuid;
    _stock_id uuid;
    _is_service BOOLEAN;
    _total NUMERIC;
BEGIN

    -- Update Sale's Total
    SELECT erp_get_sale_totals(NEW."ErpSaleId") INTO _total;

    UPDATE "public"."ErpSales" sales
    SET "ErpTotal" = _total
    WHERE sales."Id" = NEW."ErpSaleId";

    DELETE FROM "public"."ErpStock"
    WHERE "ErpProductInSaleId" = NEW."Id";


    IF NEW."ErpRegistered" = TRUE THEN

        select p."ErpService"
        into _is_service
        from "public"."Product" p
        where p."Id" = NEW."ErpProductId";

        -- Register

        IF _is_service != true THEN
            select sale."ErpDate", sale."ErpContractorId", sale."ErpStockId"
            into _dt, _contractor_id, _stock_id
            FROM "public"."ErpSales" sale
            WHERE sale."Id" = NEW."ErpSaleId";

            PERFORM erp_stock_registration(
                contractor_id => _contractor_id,
                dt => _dt,
                price => NEW."ErpPrice",
                product_id => NEW."ErpProductId",
                quantity => NEW."ErpQuantity",
                stock_id => _stock_id,
                product_in_sale_id => NEW."Id",
                sale_id => NEW."ErpSaleId"
            );
        END IF;


    END IF;


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
