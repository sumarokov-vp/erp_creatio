CREATE OR REPLACE FUNCTION public.erp_receipts_naming(new_receipt "ErpReceipt")
 RETURNS text
 LANGUAGE plpgsql
AS $function$
DECLARE
    currency_symbol text;
    customer_name text;
    _account text;
    _contact text;

BEGIN
    -- Currency symbol
    
    SELECT
        cur."Symbol" INTO currency_symbol
    FROM
        "public"."Currency" cur
    WHERE
        cur."Id" = new_receipt."ErpCurrencyId";

    -- Customer
    _account := COALESCE(
        (SELECT account."Name"
        FROM "public"."Account" account
        WHERE account."Id" = new_receipt."ErpAccountId"
        LIMIT 1)
    , '');

    _contact := COALESCE(
        (SELECT contact."Name"
        FROM "public"."Contact" contact
        WHERE contact."Id" = new_receipt."ErpContactId"
        LIMIT 1)
    , '');

    customer_name = _account || _contact;

    
    -- Naming
    RETURN '#' || COALESCE(new_receipt."ErpCode", 0) || ' - ' || customer_name ||
        ' ' || COALESCE(new_receipt."ErpTotal", 0) || ' ' || currency_symbol;
END;
$function$
