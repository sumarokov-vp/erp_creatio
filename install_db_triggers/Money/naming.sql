CREATE OR REPLACE FUNCTION "erp_money_naming" (new_money "ErpMoney")
    RETURNS text
    AS $$
DECLARE
    _currency_symbol text;
    _customer_name text;
    _account text;
    _contact text;
    _direction text;
    _operation_type text;

BEGIN
    SELECT
        cur."Symbol"
    INTO _currency_symbol
    FROM
        "public"."Currency" cur
    WHERE
        cur."Id" = new_money."ErpCurrencyId";


    SELECT
        x."Name"
    INTO _direction
    FROM
        "public"."ErpMoneyDirection" x
    WHERE
        x."Id" = new_money."ErpDirectionId";

    SELECT
        x."Name"
    INTO _operation_type
    FROM
        "public"."ErpMoneyOperationType" x
    WHERE
        x."Id" = new_money."ErpOperationTypeId";

    _account := COALESCE(
        (SELECT account."Name"
        FROM "public"."Account" account
        WHERE account."Id" = new_money."ErpAccountId"
        LIMIT 1)
    , '');

    _contact := COALESCE(
        (SELECT contact."Name"
        FROM "public"."Contact" contact
        WHERE contact."Id" = new_money."ErpContactId"
        LIMIT 1)
    , '');

    _customer_name = _account || _contact;



    -- Naming
    RETURN '# ' || _direction || ' - ' || _operation_type ||
        ': ' || _customer_name || ', ' || new_money."ErpAmount" || ' ' || _currency_symbol;
END;
$$
LANGUAGE plpgsql;

