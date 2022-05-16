CREATE OR REPLACE FUNCTION "erp_rates_after" ()
    RETURNS TRIGGER
    AS $$

BEGIN

    IF NEW."ErpReverse" = false THEN
        INSERT INTO "public"."ErpCurrencyRates"
            ("ErpCurrency1Id", "ErpCurrency2Id", "ErpRate", "ErpRatio", "ErpRatioRate", "ErpReverse")
        VALUES (NEW."ErpCurrency2Id", NEW."ErpCurrency1Id", NEW."ErpRatio" / NEW."ErpRatioRate", NEW."ErpRatio", NEW."ErpRatio"* NEW."ErpRatio" / NEW."ErpRatioRate", true);
    END IF;

    RETURN NEW;
END;
$$
LANGUAGE plpgsql;