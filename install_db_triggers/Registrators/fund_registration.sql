CREATE OR REPLACE FUNCTION "erp_fund_registration" (
    amount numeric(18,2) DEFAULT NULL,
    dt date DEFAULT NULL,
    money_id uuid DEFAULT NULL,
    currency_id uuid DEFAULT NULL,
    asset_id uuid  DEFAULT NULL
)
    RETURNS void
    AS $$

BEGIN

    insert into "public"."ErpFund"
    (
        "ErpAmount",
        "ErpAssetId",
        "ErpCurrencyId",
        "ErpDate",
        "ErpMoneyId"
    )
    VALUES
    (
        COALESCE(amount,0),
        asset_id,
        currency_id,
        dt,
        money_id
    );
END;
$$
LANGUAGE plpgsql;
