CREATE OR REPLACE FUNCTION "erp_sale_naming" (new_sale "ErpSales")
    RETURNS text
    AS $$
DECLARE
    currency_symbol text;
    customer_name text;
    _account text;
    _contact text;
    product text;
    result text;
BEGIN
    -- Currency symbol
    
    SELECT
        cur."Symbol" INTO currency_symbol
    FROM
        "public"."Currency" cur
    WHERE
        cur."Id" = new_sale."ErpCurrencyId";
    -- Customer
    _account := COALESCE(
        (SELECT account."Name"
        FROM "public"."Account" account
        WHERE account."Id" = new_sale."ErpAccountId"
        LIMIT 1)
    , '');

    _contact := COALESCE(
        (SELECT contact."Name"
        FROM "public"."Contact" contact
        WHERE contact."Id" = new_sale."ErpContactId"
        LIMIT 1)
    , '');

    customer_name = _account || _contact;

    -- Product
    SELECT COALESCE(
        (
            SELECT prod."Name"
            INTO product
            FROM "public"."Product" prod
            INNER JOIN "public"."ErpProductInErpSale" ps ON ps."ErpProductId" = prod."Id"
            WHERE ps."ErpSaleId" = new_sale."Id"
            LIMIT 1
        ), ''
    );
    
    -- RAISE WARNING 'Customer name: %', customer_name;
    -- Naming
    RETURN '#' || new_sale."ErpCode"::Text || ' ' || customer_name || ': ' || product;
END;
$$
LANGUAGE plpgsql;

