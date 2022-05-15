CREATE OR REPLACE FUNCTION "slerp_stock_registration" (
    amount numeric(18,2) DEFAULT NULL,
    contractor_id uuid  DEFAULT NULL,
    dt date DEFAULT NULL,
    price numeric(18,2) DEFAULT NULL,
    product_id uuid  DEFAULT NULL,
    quantity numeric(18,3) DEFAULT NULL,
    receipt_party_id uuid  DEFAULT NULL,
    receipt_registrator_id uuid  DEFAULT NULL,
    sale_id uuid DEFAULT NULL,
    stock_id uuid DEFAULT NULL,
    product_in_receipt_id uuid DEFAULT NULL,
    product_in_sale_id uuid DEFAULT NULL
)
    RETURNS void
    AS $$

BEGIN
    insert into "public"."SLStockRegistry"
    (
        "SLAmount",
        "SLContractorId",
        "SLDate",
        "SLPrice",
        "SLProductId",
        "SLQuantity",
        "SLReceiptId",
        "SLReceiptRegistratorId",
        "SLSaleRegistratorId",
        "SLStockId",
        "SLProductInReceiptId",
        "SLProductInSaleId"
    ) VALUES
        (amount, contractor_id, dt, price,
        product_id, quantity, receipt_party_id, receipt_registrator_id,
        sale_id, stock_id, product_in_receipt_id, product_in_sale_id);
END;
$$
LANGUAGE plpgsql;
