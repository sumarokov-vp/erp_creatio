CREATE OR REPLACE FUNCTION "erp_sales_after" ()
    RETURNS TRIGGER
    AS $$
DECLARE
    code_number int;
    new_name TEXT;
    --mutual_record "ErpMu";
BEGIN

    IF NEW."ErpRegistered" = TRUE THEN

        -- Register
        
        PERFORM erp_mutual_registration(
            account_id => NEW."ErpAccountId",
            amount => NEW."ErpTotal"*(-1),
            contact_id => NEW."ErpContactId",
            contractor_id => NEW."ErpContractorId",
            currency_id => NEW."ErpCurrencyId",
            dt => NEW."ErpDate",
            sale_id => NEW."Id"
        );
        
        PERFORM erp_profit_registration(
            amount => NEW."ErpTotal",
            contractor_id => NEW."ErpContractorId",
            currency_id => NEW."ErpCurrencyId",
            dt => NEW."ErpDate",
            sale_id => NEW."Id"
        );

    END IF;

    --- Details (porducts and executors)
    IF OLD."ErpRegistered" = false and NEW."ErpRegistered" = true THEN

        UPDATE
            "public"."ErpSaleExecutor" x
        SET
            "ErpRegistered" = TRUE
        WHERE
            x."ErpSaleId" = NEW."Id";

        UPDATE
            "public"."ErpProductInErpSale" x
        SET
            "ErpRegistered" = TRUE
        WHERE
            x."ErpSaleId" = NEW."Id";
    END IF;

    
    IF OLD."ErpRegistered" = true and NEW."ErpRegistered" = false THEN

        UPDATE
            "public"."ErpSaleExecutor" x
        SET
            "ErpRegistered" = false
        WHERE
            x."ErpSaleId" = NEW."Id";

        UPDATE
            "public"."ErpProductInErpSale" x
        SET
            "ErpRegistered" = false
        WHERE
            x."ErpSaleId" = NEW."Id";
    END IF;


    RETURN NEW;
END;
$$
LANGUAGE plpgsql;
