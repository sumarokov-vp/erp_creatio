CREATE OR REPLACE FUNCTION "erp_get_sys_setting" (code anyelement)
    RETURNS anyelement
    AS $$
declare
    setting_type TEXT;
BEGIN
    select ss."ValueTypeName"
    into setting_type
    from "public"."SysSettings" ss
    where ss."Code" = code;

    if setting_type = 'Lookup' THEN
        return (select sv."GuidValue"
        from "public"."SysSettingsValue" sv
        inner join "public"."SysSettings" ss on ss."Id" = sv."SysSettingsId"
        where ss."Code" = code);
    elsif setting_type = 'Float' THEN
        return (select sv."FloatValue"
        from "public"."SysSettingsValue" sv
        inner join "public"."SysSettings" ss on ss."Id" = sv."SysSettingsId"
        where ss."Code" = code);
    elsif setting_type = 'Integer' THEN
        return (select sv."IntegerValue"
        from "public"."SysSettingsValue" sv
        inner join "public"."SysSettings" ss on ss."Id" = sv."SysSettingsId"
        where ss."Code" = code);
    elsif
        setting_type = 'SecureText'
        or setting_type = 'LongText'
        or setting_type = 'MediumText'
        or setting_type = 'MaxSizeText'
        or setting_type = 'ShortText'
        or setting_type = 'Text'
        THEN
            return (select sv."TextValue"
            from "public"."SysSettingsValue" sv
            inner join "public"."SysSettings" ss on ss."Id" = sv."SysSettingsId"
            where ss."Code" = code);
    elsif setting_type = 'Date' or setting_type = 'DateTime' THEN
        return (select sv."DateTimeValue"
        from "public"."SysSettingsValue" sv
        inner join "public"."SysSettings" ss on ss."Id" = sv."SysSettingsId"
        where ss."Code" = code);
    ELSE
        return (select sv."BooleanValue"
        from "public"."SysSettingsValue" sv
        inner join "public"."SysSettings" ss on ss."Id" = sv."SysSettingsId"
        where ss."Code" = code);
    end if; 


END;
$$
LANGUAGE plpgsql;