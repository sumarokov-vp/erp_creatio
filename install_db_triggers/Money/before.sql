CREATE OR REPLACE FUNCTION "erp_money_before" ()
    RETURNS TRIGGER
    AS $$

BEGIN
    select erp_money_naming (NEW) INTO NEW."ErpName";

    DELETE FROM "public"."ErpFund"
    WHERE 
        "ErpMoneyId" = NEW."Id";

    DELETE FROM "public"."ErpMutual"
    WHERE 
        "ErpMoneyId" = NEW."Id";

    DELETE FROM "public"."ErpProfit"
    WHERE
        "ErpMoneyId" = NEW."Id";

    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
