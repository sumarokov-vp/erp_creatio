CREATE OR REPLACE FUNCTION "erp_stock_registration" (
    contractor_id uuid  DEFAULT NULL,
    dt date DEFAULT NULL,
    price numeric(18,2) DEFAULT NULL,
    product_id uuid  DEFAULT NULL,
    quantity numeric(18,3) DEFAULT NULL,
    receipt_id uuid  DEFAULT NULL,
    sale_id uuid DEFAULT NULL,
    stock_id uuid DEFAULT NULL,
    product_in_receipt_id uuid DEFAULT NULL,
    product_in_sale_id uuid DEFAULT NULL,
    currency uuid DEFAULT NULL
)
    RETURNS void
    AS $$

BEGIN
    insert into "public"."ErpStock"
    (
        "ErpContractorId",
        "ErpDate",
        "ErpPrice",
        "ErpProductId",
        "ErpQuantity",
        "ErpReceiptId",
        "ErpSaleId",
        "ErpStockLookupInstanceId",
        "ErpProductInReceiptId",
        "ErpProductInSaleId",
        "ErpCurrencyId"
    ) VALUES
        (contractor_id, dt, price,
        product_id, quantity, receipt_id,
        sale_id, stock_id, product_in_receipt_id, product_in_sale_id, currency);
END;
$$
LANGUAGE plpgsql;
