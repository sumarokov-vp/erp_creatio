CREATE OR REPLACE FUNCTION "erp_money_after" ()
    RETURNS TRIGGER
    AS $$
DECLARE
    income_direction uuid := '991024ec-e6c1-4e44-9623-72c79df7d218'::uuid;
    outgoing_direction uuid := 'e6f3d63c-556c-4b89-a3d2-3989c17e9aa7'::uuid;
    moving_direction uuid := '1b43fb42-82b2-4498-af23-c1ab7bb6f588'::uuid;
    _asset_id uuid;
    _amount NUMERIC;
    _register_profit BOOLEAN;

BEGIN

    IF NEW."ErpRegistered" = TRUE THEN

        IF NEW."ErpDirectionId" = income_direction THEN
            _asset_id := NEW."ErpAssetId";
            _amount := NEW."ErpAmount";
        ELSIF NEW."ErpDirectionId" = outgoing_direction THEN
            _asset_id := NEW."ErpAssetId";
            _amount := NEW."ErpAmount" * (-1);

        ELSIF NEW."ErpDirectionId" = moving_direction THEN
            _amount := NEW."ErpAmount";
            _asset_id := NEW."ErpDestinationAssetId";

            PERFORM erp_fund_registration(
                amount => NEW."ErpAmount" * (-1),
                dt => NEW."ErpDate",
                money_id => NEW."Id",
                currency_id => NEW."ErpCurrencyId",
                asset_id => NEW."ErpAssetId"
            );
        END IF;

        PERFORM erp_fund_registration(
            amount => _amount,
            dt => NEW."ErpDate",
            money_id => NEW."Id",
            currency_id => NEW."ErpCurrencyId",
            asset_id => _asset_id
        );

        PERFORM erp_mutual_registration(
            account_id => NEW."ErpAccountId",
            amount => _amount,
            contact_id => NEW."ErpContactId",
            contractor_id => NEW."ErpContractorId",
            currency_id => NEW."ErpCurrencyId",
            dt => NEW."ErpDate",
            money_id => NEW."Id"
        );

        select x."ErpRegisterInProfit"
        INTO _register_profit
        FROM "public"."ErpMoneyOperationType" x
        WHERE x."Id" = NEW."ErpOperationTypeId";
        
        IF _register_profit = TRUE THEN
            PERFORM erp_profit_registration(
                amount => _amount,
                contractor_id => NEW."ErpContractorId",
                currency_id => NEW."ErpCurrencyId",
                dt => NEW."ErpDate",
                money_id => NEW."Id",
                section_id => New."ErpProfitSectionId"
            );
        END IF;

    END IF;


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
