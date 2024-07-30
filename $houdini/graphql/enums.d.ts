
type ValuesOf<T> = T[keyof T]
	
export declare const AdjustmentType: {
    readonly DISTRIBUTED_ORDER_PROMOTION: "DISTRIBUTED_ORDER_PROMOTION";
    readonly OTHER: "OTHER";
    readonly PROMOTION: "PROMOTION";
}

export type AdjustmentType$options = ValuesOf<typeof AdjustmentType>
 
export declare const AssetType: {
    readonly BINARY: "BINARY";
    readonly IMAGE: "IMAGE";
    readonly VIDEO: "VIDEO";
}

export type AssetType$options = ValuesOf<typeof AssetType>
 
/** @description
ISO 4217 currency code

@docsCategory common */
export declare const CurrencyCode: {
    /** United Arab Emirates dirham */
    readonly AED: "AED";
    /** Afghan afghani */
    readonly AFN: "AFN";
    /** Albanian lek */
    readonly ALL: "ALL";
    /** Armenian dram */
    readonly AMD: "AMD";
    /** Netherlands Antillean guilder */
    readonly ANG: "ANG";
    /** Angolan kwanza */
    readonly AOA: "AOA";
    /** Argentine peso */
    readonly ARS: "ARS";
    /** Australian dollar */
    readonly AUD: "AUD";
    /** Aruban florin */
    readonly AWG: "AWG";
    /** Azerbaijani manat */
    readonly AZN: "AZN";
    /** Bosnia and Herzegovina convertible mark */
    readonly BAM: "BAM";
    /** Barbados dollar */
    readonly BBD: "BBD";
    /** Bangladeshi taka */
    readonly BDT: "BDT";
    /** Bulgarian lev */
    readonly BGN: "BGN";
    /** Bahraini dinar */
    readonly BHD: "BHD";
    /** Burundian franc */
    readonly BIF: "BIF";
    /** Bermudian dollar */
    readonly BMD: "BMD";
    /** Brunei dollar */
    readonly BND: "BND";
    /** Boliviano */
    readonly BOB: "BOB";
    /** Brazilian real */
    readonly BRL: "BRL";
    /** Bahamian dollar */
    readonly BSD: "BSD";
    /** Bhutanese ngultrum */
    readonly BTN: "BTN";
    /** Botswana pula */
    readonly BWP: "BWP";
    /** Belarusian ruble */
    readonly BYN: "BYN";
    /** Belize dollar */
    readonly BZD: "BZD";
    /** Canadian dollar */
    readonly CAD: "CAD";
    /** Congolese franc */
    readonly CDF: "CDF";
    /** Swiss franc */
    readonly CHF: "CHF";
    /** Chilean peso */
    readonly CLP: "CLP";
    /** Renminbi (Chinese) yuan */
    readonly CNY: "CNY";
    /** Colombian peso */
    readonly COP: "COP";
    /** Costa Rican colon */
    readonly CRC: "CRC";
    /** Cuban convertible peso */
    readonly CUC: "CUC";
    /** Cuban peso */
    readonly CUP: "CUP";
    /** Cape Verde escudo */
    readonly CVE: "CVE";
    /** Czech koruna */
    readonly CZK: "CZK";
    /** Djiboutian franc */
    readonly DJF: "DJF";
    /** Danish krone */
    readonly DKK: "DKK";
    /** Dominican peso */
    readonly DOP: "DOP";
    /** Algerian dinar */
    readonly DZD: "DZD";
    /** Egyptian pound */
    readonly EGP: "EGP";
    /** Eritrean nakfa */
    readonly ERN: "ERN";
    /** Ethiopian birr */
    readonly ETB: "ETB";
    /** Euro */
    readonly EUR: "EUR";
    /** Fiji dollar */
    readonly FJD: "FJD";
    /** Falkland Islands pound */
    readonly FKP: "FKP";
    /** Pound sterling */
    readonly GBP: "GBP";
    /** Georgian lari */
    readonly GEL: "GEL";
    /** Ghanaian cedi */
    readonly GHS: "GHS";
    /** Gibraltar pound */
    readonly GIP: "GIP";
    /** Gambian dalasi */
    readonly GMD: "GMD";
    /** Guinean franc */
    readonly GNF: "GNF";
    /** Guatemalan quetzal */
    readonly GTQ: "GTQ";
    /** Guyanese dollar */
    readonly GYD: "GYD";
    /** Hong Kong dollar */
    readonly HKD: "HKD";
    /** Honduran lempira */
    readonly HNL: "HNL";
    /** Croatian kuna */
    readonly HRK: "HRK";
    /** Haitian gourde */
    readonly HTG: "HTG";
    /** Hungarian forint */
    readonly HUF: "HUF";
    /** Indonesian rupiah */
    readonly IDR: "IDR";
    /** Israeli new shekel */
    readonly ILS: "ILS";
    /** Indian rupee */
    readonly INR: "INR";
    /** Iraqi dinar */
    readonly IQD: "IQD";
    /** Iranian rial */
    readonly IRR: "IRR";
    /** Icelandic króna */
    readonly ISK: "ISK";
    /** Jamaican dollar */
    readonly JMD: "JMD";
    /** Jordanian dinar */
    readonly JOD: "JOD";
    /** Japanese yen */
    readonly JPY: "JPY";
    /** Kenyan shilling */
    readonly KES: "KES";
    /** Kyrgyzstani som */
    readonly KGS: "KGS";
    /** Cambodian riel */
    readonly KHR: "KHR";
    /** Comoro franc */
    readonly KMF: "KMF";
    /** North Korean won */
    readonly KPW: "KPW";
    /** South Korean won */
    readonly KRW: "KRW";
    /** Kuwaiti dinar */
    readonly KWD: "KWD";
    /** Cayman Islands dollar */
    readonly KYD: "KYD";
    /** Kazakhstani tenge */
    readonly KZT: "KZT";
    /** Lao kip */
    readonly LAK: "LAK";
    /** Lebanese pound */
    readonly LBP: "LBP";
    /** Sri Lankan rupee */
    readonly LKR: "LKR";
    /** Liberian dollar */
    readonly LRD: "LRD";
    /** Lesotho loti */
    readonly LSL: "LSL";
    /** Libyan dinar */
    readonly LYD: "LYD";
    /** Moroccan dirham */
    readonly MAD: "MAD";
    /** Moldovan leu */
    readonly MDL: "MDL";
    /** Malagasy ariary */
    readonly MGA: "MGA";
    /** Macedonian denar */
    readonly MKD: "MKD";
    /** Myanmar kyat */
    readonly MMK: "MMK";
    /** Mongolian tögrög */
    readonly MNT: "MNT";
    /** Macanese pataca */
    readonly MOP: "MOP";
    /** Mauritanian ouguiya */
    readonly MRU: "MRU";
    /** Mauritian rupee */
    readonly MUR: "MUR";
    /** Maldivian rufiyaa */
    readonly MVR: "MVR";
    /** Malawian kwacha */
    readonly MWK: "MWK";
    /** Mexican peso */
    readonly MXN: "MXN";
    /** Malaysian ringgit */
    readonly MYR: "MYR";
    /** Mozambican metical */
    readonly MZN: "MZN";
    /** Namibian dollar */
    readonly NAD: "NAD";
    /** Nigerian naira */
    readonly NGN: "NGN";
    /** Nicaraguan córdoba */
    readonly NIO: "NIO";
    /** Norwegian krone */
    readonly NOK: "NOK";
    /** Nepalese rupee */
    readonly NPR: "NPR";
    /** New Zealand dollar */
    readonly NZD: "NZD";
    /** Omani rial */
    readonly OMR: "OMR";
    /** Panamanian balboa */
    readonly PAB: "PAB";
    /** Peruvian sol */
    readonly PEN: "PEN";
    /** Papua New Guinean kina */
    readonly PGK: "PGK";
    /** Philippine peso */
    readonly PHP: "PHP";
    /** Pakistani rupee */
    readonly PKR: "PKR";
    /** Polish złoty */
    readonly PLN: "PLN";
    /** Paraguayan guaraní */
    readonly PYG: "PYG";
    /** Qatari riyal */
    readonly QAR: "QAR";
    /** Romanian leu */
    readonly RON: "RON";
    /** Serbian dinar */
    readonly RSD: "RSD";
    /** Russian ruble */
    readonly RUB: "RUB";
    /** Rwandan franc */
    readonly RWF: "RWF";
    /** Saudi riyal */
    readonly SAR: "SAR";
    /** Solomon Islands dollar */
    readonly SBD: "SBD";
    /** Seychelles rupee */
    readonly SCR: "SCR";
    /** Sudanese pound */
    readonly SDG: "SDG";
    /** Swedish krona/kronor */
    readonly SEK: "SEK";
    /** Singapore dollar */
    readonly SGD: "SGD";
    /** Saint Helena pound */
    readonly SHP: "SHP";
    /** Sierra Leonean leone */
    readonly SLL: "SLL";
    /** Somali shilling */
    readonly SOS: "SOS";
    /** Surinamese dollar */
    readonly SRD: "SRD";
    /** South Sudanese pound */
    readonly SSP: "SSP";
    /** São Tomé and Príncipe dobra */
    readonly STN: "STN";
    /** Salvadoran colón */
    readonly SVC: "SVC";
    /** Syrian pound */
    readonly SYP: "SYP";
    /** Swazi lilangeni */
    readonly SZL: "SZL";
    /** Thai baht */
    readonly THB: "THB";
    /** Tajikistani somoni */
    readonly TJS: "TJS";
    /** Turkmenistan manat */
    readonly TMT: "TMT";
    /** Tunisian dinar */
    readonly TND: "TND";
    /** Tongan paʻanga */
    readonly TOP: "TOP";
    /** Turkish lira */
    readonly TRY: "TRY";
    /** Trinidad and Tobago dollar */
    readonly TTD: "TTD";
    /** New Taiwan dollar */
    readonly TWD: "TWD";
    /** Tanzanian shilling */
    readonly TZS: "TZS";
    /** Ukrainian hryvnia */
    readonly UAH: "UAH";
    /** Ugandan shilling */
    readonly UGX: "UGX";
    /** United States dollar */
    readonly USD: "USD";
    /** Uruguayan peso */
    readonly UYU: "UYU";
    /** Uzbekistan som */
    readonly UZS: "UZS";
    /** Venezuelan bolívar soberano */
    readonly VES: "VES";
    /** Vietnamese đồng */
    readonly VND: "VND";
    /** Vanuatu vatu */
    readonly VUV: "VUV";
    /** Samoan tala */
    readonly WST: "WST";
    /** CFA franc BEAC */
    readonly XAF: "XAF";
    /** East Caribbean dollar */
    readonly XCD: "XCD";
    /** CFA franc BCEAO */
    readonly XOF: "XOF";
    /** CFP franc (franc Pacifique) */
    readonly XPF: "XPF";
    /** Yemeni rial */
    readonly YER: "YER";
    /** South African rand */
    readonly ZAR: "ZAR";
    /** Zambian kwacha */
    readonly ZMW: "ZMW";
    /** Zimbabwean dollar */
    readonly ZWL: "ZWL";
}

/** @description
ISO 4217 currency code

@docsCategory common */
export type CurrencyCode$options = ValuesOf<typeof CurrencyCode>
 
export declare const DeletionResult: {
    /** The entity was successfully deleted */
    readonly DELETED: "DELETED";
    /** Deletion did not take place, reason given in message */
    readonly NOT_DELETED: "NOT_DELETED";
}

export type DeletionResult$options = ValuesOf<typeof DeletionResult>
 
export declare const ErrorCode: {
    readonly ALREADY_LOGGED_IN_ERROR: "ALREADY_LOGGED_IN_ERROR";
    readonly COUPON_CODE_EXPIRED_ERROR: "COUPON_CODE_EXPIRED_ERROR";
    readonly COUPON_CODE_INVALID_ERROR: "COUPON_CODE_INVALID_ERROR";
    readonly COUPON_CODE_LIMIT_ERROR: "COUPON_CODE_LIMIT_ERROR";
    readonly EMAIL_ADDRESS_CONFLICT_ERROR: "EMAIL_ADDRESS_CONFLICT_ERROR";
    readonly GUEST_CHECKOUT_ERROR: "GUEST_CHECKOUT_ERROR";
    readonly IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR: "IDENTIFIER_CHANGE_TOKEN_EXPIRED_ERROR";
    readonly IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR: "IDENTIFIER_CHANGE_TOKEN_INVALID_ERROR";
    readonly INELIGIBLE_PAYMENT_METHOD_ERROR: "INELIGIBLE_PAYMENT_METHOD_ERROR";
    readonly INELIGIBLE_SHIPPING_METHOD_ERROR: "INELIGIBLE_SHIPPING_METHOD_ERROR";
    readonly INSUFFICIENT_STOCK_ERROR: "INSUFFICIENT_STOCK_ERROR";
    readonly INVALID_CREDENTIALS_ERROR: "INVALID_CREDENTIALS_ERROR";
    readonly MISSING_PASSWORD_ERROR: "MISSING_PASSWORD_ERROR";
    readonly NATIVE_AUTH_STRATEGY_ERROR: "NATIVE_AUTH_STRATEGY_ERROR";
    readonly NEGATIVE_QUANTITY_ERROR: "NEGATIVE_QUANTITY_ERROR";
    readonly NOT_VERIFIED_ERROR: "NOT_VERIFIED_ERROR";
    readonly NO_ACTIVE_ORDER_ERROR: "NO_ACTIVE_ORDER_ERROR";
    readonly ORDER_LIMIT_ERROR: "ORDER_LIMIT_ERROR";
    readonly ORDER_MODIFICATION_ERROR: "ORDER_MODIFICATION_ERROR";
    readonly ORDER_PAYMENT_STATE_ERROR: "ORDER_PAYMENT_STATE_ERROR";
    readonly ORDER_STATE_TRANSITION_ERROR: "ORDER_STATE_TRANSITION_ERROR";
    readonly PASSWORD_ALREADY_SET_ERROR: "PASSWORD_ALREADY_SET_ERROR";
    readonly PASSWORD_RESET_TOKEN_EXPIRED_ERROR: "PASSWORD_RESET_TOKEN_EXPIRED_ERROR";
    readonly PASSWORD_RESET_TOKEN_INVALID_ERROR: "PASSWORD_RESET_TOKEN_INVALID_ERROR";
    readonly PASSWORD_VALIDATION_ERROR: "PASSWORD_VALIDATION_ERROR";
    readonly PAYMENT_DECLINED_ERROR: "PAYMENT_DECLINED_ERROR";
    readonly PAYMENT_FAILED_ERROR: "PAYMENT_FAILED_ERROR";
    readonly UNKNOWN_ERROR: "UNKNOWN_ERROR";
    readonly VERIFICATION_TOKEN_EXPIRED_ERROR: "VERIFICATION_TOKEN_EXPIRED_ERROR";
    readonly VERIFICATION_TOKEN_INVALID_ERROR: "VERIFICATION_TOKEN_INVALID_ERROR";
}

export type ErrorCode$options = ValuesOf<typeof ErrorCode>
 
export declare const GlobalFlag: {
    readonly FALSE: "FALSE";
    readonly INHERIT: "INHERIT";
    readonly TRUE: "TRUE";
}

export type GlobalFlag$options = ValuesOf<typeof GlobalFlag>
 
export declare const HistoryEntryType: {
    readonly CUSTOMER_ADDED_TO_GROUP: "CUSTOMER_ADDED_TO_GROUP";
    readonly CUSTOMER_ADDRESS_CREATED: "CUSTOMER_ADDRESS_CREATED";
    readonly CUSTOMER_ADDRESS_DELETED: "CUSTOMER_ADDRESS_DELETED";
    readonly CUSTOMER_ADDRESS_UPDATED: "CUSTOMER_ADDRESS_UPDATED";
    readonly CUSTOMER_DETAIL_UPDATED: "CUSTOMER_DETAIL_UPDATED";
    readonly CUSTOMER_EMAIL_UPDATE_REQUESTED: "CUSTOMER_EMAIL_UPDATE_REQUESTED";
    readonly CUSTOMER_EMAIL_UPDATE_VERIFIED: "CUSTOMER_EMAIL_UPDATE_VERIFIED";
    readonly CUSTOMER_NOTE: "CUSTOMER_NOTE";
    readonly CUSTOMER_PASSWORD_RESET_REQUESTED: "CUSTOMER_PASSWORD_RESET_REQUESTED";
    readonly CUSTOMER_PASSWORD_RESET_VERIFIED: "CUSTOMER_PASSWORD_RESET_VERIFIED";
    readonly CUSTOMER_PASSWORD_UPDATED: "CUSTOMER_PASSWORD_UPDATED";
    readonly CUSTOMER_REGISTERED: "CUSTOMER_REGISTERED";
    readonly CUSTOMER_REMOVED_FROM_GROUP: "CUSTOMER_REMOVED_FROM_GROUP";
    readonly CUSTOMER_VERIFIED: "CUSTOMER_VERIFIED";
    readonly ORDER_CANCELLATION: "ORDER_CANCELLATION";
    readonly ORDER_COUPON_APPLIED: "ORDER_COUPON_APPLIED";
    readonly ORDER_COUPON_REMOVED: "ORDER_COUPON_REMOVED";
    readonly ORDER_CUSTOMER_UPDATED: "ORDER_CUSTOMER_UPDATED";
    readonly ORDER_FULFILLMENT: "ORDER_FULFILLMENT";
    readonly ORDER_FULFILLMENT_TRANSITION: "ORDER_FULFILLMENT_TRANSITION";
    readonly ORDER_MODIFIED: "ORDER_MODIFIED";
    readonly ORDER_NOTE: "ORDER_NOTE";
    readonly ORDER_PAYMENT_TRANSITION: "ORDER_PAYMENT_TRANSITION";
    readonly ORDER_REFUND_TRANSITION: "ORDER_REFUND_TRANSITION";
    readonly ORDER_STATE_TRANSITION: "ORDER_STATE_TRANSITION";
}

export type HistoryEntryType$options = ValuesOf<typeof HistoryEntryType>
 
/** @description
Languages in the form of a ISO 639-1 language code with optional
region or script modifier (e.g. de_AT). The selection available is based
on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
and includes the major spoken languages of the world and any widely-used variants.

@docsCategory common */
export declare const LanguageCode: {
    /** Afrikaans */
    readonly af: "af";
    /** Akan */
    readonly ak: "ak";
    /** Amharic */
    readonly am: "am";
    /** Arabic */
    readonly ar: "ar";
    /** Assamese */
    readonly as: "as";
    /** Azerbaijani */
    readonly az: "az";
    /** Belarusian */
    readonly be: "be";
    /** Bulgarian */
    readonly bg: "bg";
    /** Bambara */
    readonly bm: "bm";
    /** Bangla */
    readonly bn: "bn";
    /** Tibetan */
    readonly bo: "bo";
    /** Breton */
    readonly br: "br";
    /** Bosnian */
    readonly bs: "bs";
    /** Catalan */
    readonly ca: "ca";
    /** Chechen */
    readonly ce: "ce";
    /** Corsican */
    readonly co: "co";
    /** Czech */
    readonly cs: "cs";
    /** Church Slavic */
    readonly cu: "cu";
    /** Welsh */
    readonly cy: "cy";
    /** Danish */
    readonly da: "da";
    /** German */
    readonly de: "de";
    /** Austrian German */
    readonly de_AT: "de_AT";
    /** Swiss High German */
    readonly de_CH: "de_CH";
    /** Dzongkha */
    readonly dz: "dz";
    /** Ewe */
    readonly ee: "ee";
    /** Greek */
    readonly el: "el";
    /** English */
    readonly en: "en";
    /** Australian English */
    readonly en_AU: "en_AU";
    /** Canadian English */
    readonly en_CA: "en_CA";
    /** British English */
    readonly en_GB: "en_GB";
    /** American English */
    readonly en_US: "en_US";
    /** Esperanto */
    readonly eo: "eo";
    /** Spanish */
    readonly es: "es";
    /** European Spanish */
    readonly es_ES: "es_ES";
    /** Mexican Spanish */
    readonly es_MX: "es_MX";
    /** Estonian */
    readonly et: "et";
    /** Basque */
    readonly eu: "eu";
    /** Persian */
    readonly fa: "fa";
    /** Dari */
    readonly fa_AF: "fa_AF";
    /** Fulah */
    readonly ff: "ff";
    /** Finnish */
    readonly fi: "fi";
    /** Faroese */
    readonly fo: "fo";
    /** French */
    readonly fr: "fr";
    /** Canadian French */
    readonly fr_CA: "fr_CA";
    /** Swiss French */
    readonly fr_CH: "fr_CH";
    /** Western Frisian */
    readonly fy: "fy";
    /** Irish */
    readonly ga: "ga";
    /** Scottish Gaelic */
    readonly gd: "gd";
    /** Galician */
    readonly gl: "gl";
    /** Gujarati */
    readonly gu: "gu";
    /** Manx */
    readonly gv: "gv";
    /** Hausa */
    readonly ha: "ha";
    /** Hebrew */
    readonly he: "he";
    /** Hindi */
    readonly hi: "hi";
    /** Croatian */
    readonly hr: "hr";
    /** Haitian Creole */
    readonly ht: "ht";
    /** Hungarian */
    readonly hu: "hu";
    /** Armenian */
    readonly hy: "hy";
    /** Interlingua */
    readonly ia: "ia";
    /** Indonesian */
    readonly id: "id";
    /** Igbo */
    readonly ig: "ig";
    /** Sichuan Yi */
    readonly ii: "ii";
    /** Icelandic */
    readonly is: "is";
    /** Italian */
    readonly it: "it";
    /** Japanese */
    readonly ja: "ja";
    /** Javanese */
    readonly jv: "jv";
    /** Georgian */
    readonly ka: "ka";
    /** Kikuyu */
    readonly ki: "ki";
    /** Kazakh */
    readonly kk: "kk";
    /** Kalaallisut */
    readonly kl: "kl";
    /** Khmer */
    readonly km: "km";
    /** Kannada */
    readonly kn: "kn";
    /** Korean */
    readonly ko: "ko";
    /** Kashmiri */
    readonly ks: "ks";
    /** Kurdish */
    readonly ku: "ku";
    /** Cornish */
    readonly kw: "kw";
    /** Kyrgyz */
    readonly ky: "ky";
    /** Latin */
    readonly la: "la";
    /** Luxembourgish */
    readonly lb: "lb";
    /** Ganda */
    readonly lg: "lg";
    /** Lingala */
    readonly ln: "ln";
    /** Lao */
    readonly lo: "lo";
    /** Lithuanian */
    readonly lt: "lt";
    /** Luba-Katanga */
    readonly lu: "lu";
    /** Latvian */
    readonly lv: "lv";
    /** Malagasy */
    readonly mg: "mg";
    /** Maori */
    readonly mi: "mi";
    /** Macedonian */
    readonly mk: "mk";
    /** Malayalam */
    readonly ml: "ml";
    /** Mongolian */
    readonly mn: "mn";
    /** Marathi */
    readonly mr: "mr";
    /** Malay */
    readonly ms: "ms";
    /** Maltese */
    readonly mt: "mt";
    /** Burmese */
    readonly my: "my";
    /** Norwegian Bokmål */
    readonly nb: "nb";
    /** North Ndebele */
    readonly nd: "nd";
    /** Nepali */
    readonly ne: "ne";
    /** Dutch */
    readonly nl: "nl";
    /** Flemish */
    readonly nl_BE: "nl_BE";
    /** Norwegian Nynorsk */
    readonly nn: "nn";
    /** Nyanja */
    readonly ny: "ny";
    /** Oromo */
    readonly om: "om";
    /** Odia */
    readonly or: "or";
    /** Ossetic */
    readonly os: "os";
    /** Punjabi */
    readonly pa: "pa";
    /** Polish */
    readonly pl: "pl";
    /** Pashto */
    readonly ps: "ps";
    /** Portuguese */
    readonly pt: "pt";
    /** Brazilian Portuguese */
    readonly pt_BR: "pt_BR";
    /** European Portuguese */
    readonly pt_PT: "pt_PT";
    /** Quechua */
    readonly qu: "qu";
    /** Romansh */
    readonly rm: "rm";
    /** Rundi */
    readonly rn: "rn";
    /** Romanian */
    readonly ro: "ro";
    /** Moldavian */
    readonly ro_MD: "ro_MD";
    /** Russian */
    readonly ru: "ru";
    /** Kinyarwanda */
    readonly rw: "rw";
    /** Sanskrit */
    readonly sa: "sa";
    /** Sindhi */
    readonly sd: "sd";
    /** Northern Sami */
    readonly se: "se";
    /** Sango */
    readonly sg: "sg";
    /** Sinhala */
    readonly si: "si";
    /** Slovak */
    readonly sk: "sk";
    /** Slovenian */
    readonly sl: "sl";
    /** Samoan */
    readonly sm: "sm";
    /** Shona */
    readonly sn: "sn";
    /** Somali */
    readonly so: "so";
    /** Albanian */
    readonly sq: "sq";
    /** Serbian */
    readonly sr: "sr";
    /** Southern Sotho */
    readonly st: "st";
    /** Sundanese */
    readonly su: "su";
    /** Swedish */
    readonly sv: "sv";
    /** Swahili */
    readonly sw: "sw";
    /** Congo Swahili */
    readonly sw_CD: "sw_CD";
    /** Tamil */
    readonly ta: "ta";
    /** Telugu */
    readonly te: "te";
    /** Tajik */
    readonly tg: "tg";
    /** Thai */
    readonly th: "th";
    /** Tigrinya */
    readonly ti: "ti";
    /** Turkmen */
    readonly tk: "tk";
    /** Tongan */
    readonly to: "to";
    /** Turkish */
    readonly tr: "tr";
    /** Tatar */
    readonly tt: "tt";
    /** Uyghur */
    readonly ug: "ug";
    /** Ukrainian */
    readonly uk: "uk";
    /** Urdu */
    readonly ur: "ur";
    /** Uzbek */
    readonly uz: "uz";
    /** Vietnamese */
    readonly vi: "vi";
    /** Volapük */
    readonly vo: "vo";
    /** Wolof */
    readonly wo: "wo";
    /** Xhosa */
    readonly xh: "xh";
    /** Yiddish */
    readonly yi: "yi";
    /** Yoruba */
    readonly yo: "yo";
    /** Chinese */
    readonly zh: "zh";
    /** Simplified Chinese */
    readonly zh_Hans: "zh_Hans";
    /** Traditional Chinese */
    readonly zh_Hant: "zh_Hant";
    /** Zulu */
    readonly zu: "zu";
}

/** @description
Languages in the form of a ISO 639-1 language code with optional
region or script modifier (e.g. de_AT). The selection available is based
on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
and includes the major spoken languages of the world and any widely-used variants.

@docsCategory common */
export type LanguageCode$options = ValuesOf<typeof LanguageCode>
 
export declare const LogicalOperator: {
    readonly AND: "AND";
    readonly OR: "OR";
}

export type LogicalOperator$options = ValuesOf<typeof LogicalOperator>
 
export declare const OrderType: {
    readonly Aggregate: "Aggregate";
    readonly Regular: "Regular";
    readonly Seller: "Seller";
}

export type OrderType$options = ValuesOf<typeof OrderType>
 
/** @description
Permissions for administrators and customers. Used to control access to
GraphQL resolvers via the {@link Allow} decorator.

## Understanding Permission.Owner

`Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
be accessible to the "owner" of that resource.

For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
based on the activeUserId of the current session. As a result, the resolver code looks like this:

@example
```TypeScript
\@Query()
\@Allow(Permission.Owner)
async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
  const userId = ctx.activeUserId;
  if (userId) {
    return this.customerService.findOneByUserId(ctx, userId);
  }
}
```

Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
of the resource has access. If not, then it is the equivalent of using `Permission.Public`.


@docsCategory common */
export declare const Permission: {
    /** Authenticated means simply that the user is logged in */
    readonly Authenticated: "Authenticated";
    /** Grants permission to create Administrator */
    readonly CreateAdministrator: "CreateAdministrator";
    /** Grants permission to create Asset */
    readonly CreateAsset: "CreateAsset";
    /** Grants permission to create Products, Facets, Assets, Collections */
    readonly CreateCatalog: "CreateCatalog";
    /** Grants permission to create Channel */
    readonly CreateChannel: "CreateChannel";
    /** Grants permission to create Collection */
    readonly CreateCollection: "CreateCollection";
    /** Grants permission to create Country */
    readonly CreateCountry: "CreateCountry";
    /** Grants permission to create Customer */
    readonly CreateCustomer: "CreateCustomer";
    /** Grants permission to create CustomerGroup */
    readonly CreateCustomerGroup: "CreateCustomerGroup";
    /** Grants permission to create Facet */
    readonly CreateFacet: "CreateFacet";
    /** Grants permission to create Order */
    readonly CreateOrder: "CreateOrder";
    /** Grants permission to create PaymentMethod */
    readonly CreatePaymentMethod: "CreatePaymentMethod";
    /** Grants permission to create Product */
    readonly CreateProduct: "CreateProduct";
    /** Grants permission to create Promotion */
    readonly CreatePromotion: "CreatePromotion";
    /** Grants permission to create Seller */
    readonly CreateSeller: "CreateSeller";
    /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    readonly CreateSettings: "CreateSettings";
    /** Grants permission to create ShippingMethod */
    readonly CreateShippingMethod: "CreateShippingMethod";
    /** Grants permission to create StockLocation */
    readonly CreateStockLocation: "CreateStockLocation";
    /** Grants permission to create System */
    readonly CreateSystem: "CreateSystem";
    /** Grants permission to create Tag */
    readonly CreateTag: "CreateTag";
    /** Grants permission to create TaxCategory */
    readonly CreateTaxCategory: "CreateTaxCategory";
    /** Grants permission to create TaxRate */
    readonly CreateTaxRate: "CreateTaxRate";
    /** Grants permission to create Zone */
    readonly CreateZone: "CreateZone";
    /** Grants permission to delete Administrator */
    readonly DeleteAdministrator: "DeleteAdministrator";
    /** Grants permission to delete Asset */
    readonly DeleteAsset: "DeleteAsset";
    /** Grants permission to delete Products, Facets, Assets, Collections */
    readonly DeleteCatalog: "DeleteCatalog";
    /** Grants permission to delete Channel */
    readonly DeleteChannel: "DeleteChannel";
    /** Grants permission to delete Collection */
    readonly DeleteCollection: "DeleteCollection";
    /** Grants permission to delete Country */
    readonly DeleteCountry: "DeleteCountry";
    /** Grants permission to delete Customer */
    readonly DeleteCustomer: "DeleteCustomer";
    /** Grants permission to delete CustomerGroup */
    readonly DeleteCustomerGroup: "DeleteCustomerGroup";
    /** Grants permission to delete Facet */
    readonly DeleteFacet: "DeleteFacet";
    /** Grants permission to delete Order */
    readonly DeleteOrder: "DeleteOrder";
    /** Grants permission to delete PaymentMethod */
    readonly DeletePaymentMethod: "DeletePaymentMethod";
    /** Grants permission to delete Product */
    readonly DeleteProduct: "DeleteProduct";
    /** Grants permission to delete Promotion */
    readonly DeletePromotion: "DeletePromotion";
    /** Grants permission to delete Seller */
    readonly DeleteSeller: "DeleteSeller";
    /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    readonly DeleteSettings: "DeleteSettings";
    /** Grants permission to delete ShippingMethod */
    readonly DeleteShippingMethod: "DeleteShippingMethod";
    /** Grants permission to delete StockLocation */
    readonly DeleteStockLocation: "DeleteStockLocation";
    /** Grants permission to delete System */
    readonly DeleteSystem: "DeleteSystem";
    /** Grants permission to delete Tag */
    readonly DeleteTag: "DeleteTag";
    /** Grants permission to delete TaxCategory */
    readonly DeleteTaxCategory: "DeleteTaxCategory";
    /** Grants permission to delete TaxRate */
    readonly DeleteTaxRate: "DeleteTaxRate";
    /** Grants permission to delete Zone */
    readonly DeleteZone: "DeleteZone";
    /** Owner means the user owns this entity, e.g. a Customer's own Order */
    readonly Owner: "Owner";
    /** Public means any unauthenticated user may perform the operation */
    readonly Public: "Public";
    /** Grants permission to read Administrator */
    readonly ReadAdministrator: "ReadAdministrator";
    /** Grants permission to read Asset */
    readonly ReadAsset: "ReadAsset";
    /** Grants permission to read Products, Facets, Assets, Collections */
    readonly ReadCatalog: "ReadCatalog";
    /** Grants permission to read Channel */
    readonly ReadChannel: "ReadChannel";
    /** Grants permission to read Collection */
    readonly ReadCollection: "ReadCollection";
    /** Grants permission to read Country */
    readonly ReadCountry: "ReadCountry";
    /** Grants permission to read Customer */
    readonly ReadCustomer: "ReadCustomer";
    /** Grants permission to read CustomerGroup */
    readonly ReadCustomerGroup: "ReadCustomerGroup";
    /** Grants permission to read Facet */
    readonly ReadFacet: "ReadFacet";
    /** Grants permission to read Order */
    readonly ReadOrder: "ReadOrder";
    /** Grants permission to read PaymentMethod */
    readonly ReadPaymentMethod: "ReadPaymentMethod";
    /** Grants permission to read Product */
    readonly ReadProduct: "ReadProduct";
    /** Grants permission to read Promotion */
    readonly ReadPromotion: "ReadPromotion";
    /** Grants permission to read Seller */
    readonly ReadSeller: "ReadSeller";
    /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    readonly ReadSettings: "ReadSettings";
    /** Grants permission to read ShippingMethod */
    readonly ReadShippingMethod: "ReadShippingMethod";
    /** Grants permission to read StockLocation */
    readonly ReadStockLocation: "ReadStockLocation";
    /** Grants permission to read System */
    readonly ReadSystem: "ReadSystem";
    /** Grants permission to read Tag */
    readonly ReadTag: "ReadTag";
    /** Grants permission to read TaxCategory */
    readonly ReadTaxCategory: "ReadTaxCategory";
    /** Grants permission to read TaxRate */
    readonly ReadTaxRate: "ReadTaxRate";
    /** Grants permission to read Zone */
    readonly ReadZone: "ReadZone";
    /** SuperAdmin has unrestricted access to all operations */
    readonly SuperAdmin: "SuperAdmin";
    /** Grants permission to update Administrator */
    readonly UpdateAdministrator: "UpdateAdministrator";
    /** Grants permission to update Asset */
    readonly UpdateAsset: "UpdateAsset";
    /** Grants permission to update Products, Facets, Assets, Collections */
    readonly UpdateCatalog: "UpdateCatalog";
    /** Grants permission to update Channel */
    readonly UpdateChannel: "UpdateChannel";
    /** Grants permission to update Collection */
    readonly UpdateCollection: "UpdateCollection";
    /** Grants permission to update Country */
    readonly UpdateCountry: "UpdateCountry";
    /** Grants permission to update Customer */
    readonly UpdateCustomer: "UpdateCustomer";
    /** Grants permission to update CustomerGroup */
    readonly UpdateCustomerGroup: "UpdateCustomerGroup";
    /** Grants permission to update Facet */
    readonly UpdateFacet: "UpdateFacet";
    /** Grants permission to update GlobalSettings */
    readonly UpdateGlobalSettings: "UpdateGlobalSettings";
    /** Grants permission to update Order */
    readonly UpdateOrder: "UpdateOrder";
    /** Grants permission to update PaymentMethod */
    readonly UpdatePaymentMethod: "UpdatePaymentMethod";
    /** Grants permission to update Product */
    readonly UpdateProduct: "UpdateProduct";
    /** Grants permission to update Promotion */
    readonly UpdatePromotion: "UpdatePromotion";
    /** Grants permission to update Seller */
    readonly UpdateSeller: "UpdateSeller";
    /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
    readonly UpdateSettings: "UpdateSettings";
    /** Grants permission to update ShippingMethod */
    readonly UpdateShippingMethod: "UpdateShippingMethod";
    /** Grants permission to update StockLocation */
    readonly UpdateStockLocation: "UpdateStockLocation";
    /** Grants permission to update System */
    readonly UpdateSystem: "UpdateSystem";
    /** Grants permission to update Tag */
    readonly UpdateTag: "UpdateTag";
    /** Grants permission to update TaxCategory */
    readonly UpdateTaxCategory: "UpdateTaxCategory";
    /** Grants permission to update TaxRate */
    readonly UpdateTaxRate: "UpdateTaxRate";
    /** Grants permission to update Zone */
    readonly UpdateZone: "UpdateZone";
}

/** @description
Permissions for administrators and customers. Used to control access to
GraphQL resolvers via the {@link Allow} decorator.

## Understanding Permission.Owner

`Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
be accessible to the "owner" of that resource.

For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
based on the activeUserId of the current session. As a result, the resolver code looks like this:

@example
```TypeScript
\@Query()
\@Allow(Permission.Owner)
async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
  const userId = ctx.activeUserId;
  if (userId) {
    return this.customerService.findOneByUserId(ctx, userId);
  }
}
```

Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
of the resource has access. If not, then it is the equivalent of using `Permission.Public`.


@docsCategory common */
export type Permission$options = ValuesOf<typeof Permission>
 
export declare const SortOrder: {
    readonly ASC: "ASC";
    readonly DESC: "DESC";
}

export type SortOrder$options = ValuesOf<typeof SortOrder>
 