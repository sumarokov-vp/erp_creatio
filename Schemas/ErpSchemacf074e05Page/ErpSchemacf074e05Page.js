define("ErpSchemacf074e05Page", [], function() {
	return {
		entitySchemaName: "ErpProductInReceipt",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "ErpRegistered7a43b594-f1aa-4c99-8495-e5c555d68b17",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpRegistered"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP692e969c-f00e-4191-ab62-029025d7d328",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpProduct",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ErpPrice20e5e0a3-b9da-4276-988c-f3648201a6e7",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpPrice"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP4030f3e9-4994-4a58-9874-429af6306a2b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpCurrency",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ErpQuantityf2190f23-fbe0-40e6-acc6-fefd9d722fc7",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpQuantity"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ErpTotalf030728f-3a4b-4182-846e-b4a0034bcfe9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpTotal",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Tabe471cf51TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe471cf51TabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe471cf51TabLabelGroupb1600607",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe471cf51TabLabelGroupb1600607GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe471cf51TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe471cf51TabLabelGridLayout07db2afb",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe471cf51TabLabelGroupb1600607",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpName3fd26512-4943-4214-865b-00abb65f53b3",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe471cf51TabLabelGridLayout07db2afb"
					},
					"bindTo": "ErpName",
					"enabled": true
				},
				"parentName": "Tabe471cf51TabLabelGridLayout07db2afb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpReceipt768fc0ef-38a4-44b4-8428-1d311c4f0569",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabe471cf51TabLabelGridLayout07db2afb"
					},
					"bindTo": "ErpReceipt",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabe471cf51TabLabelGridLayout07db2afb",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});
