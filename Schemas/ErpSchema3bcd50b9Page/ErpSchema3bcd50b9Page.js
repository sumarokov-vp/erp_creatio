define("ErpSchema3bcd50b9Page", [], function() {
	return {
		entitySchemaName: "ErpProductInErpSale",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "BOOLEANcaf1aeef-9da6-4012-8723-f497c5397b9c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpRegistered",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP5c931ad5-aaa2-4c04-b074-8860be1675f9",
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
				"name": "FLOAT673e7673-e087-4c9f-a318-9208ccf36b9c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpPrice",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP24829f7e-10bd-409a-8700-c311589c6fed",
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
				"name": "FLOAT05c297a2-a3ea-44d9-b008-1f97cb5a3751",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpQuantity",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FLOAT041484fe-b84d-4881-8689-e1ef9aeb1957",
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
				"name": "ErpNamea4334dde-1f07-4576-bcb3-cee985c015dc",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ErpName"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab42ce02b6TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab42ce02b6TabLabelTabCaption"
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
				"name": "Tab42ce02b6TabLabelGroup255ecfd5",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab42ce02b6TabLabelGroup255ecfd5GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab42ce02b6TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab42ce02b6TabLabelGridLayoutfc62c42c",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab42ce02b6TabLabelGroup255ecfd5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpSalee20dc07e-1d7d-4ceb-9135-c7891aacc0a7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab42ce02b6TabLabelGridLayoutfc62c42c"
					},
					"bindTo": "ErpSale"
				},
				"parentName": "Tab42ce02b6TabLabelGridLayoutfc62c42c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe57891c7TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe57891c7TabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabe57891c7TabLabelGroup54da80b3",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabe57891c7TabLabelGroup54da80b3GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabe57891c7TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabe57891c7TabLabelGridLayout66a85f76",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabe57891c7TabLabelGroup54da80b3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpNameadddcef7-44d6-45fd-923f-419597f1c6b4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabe57891c7TabLabelGridLayout66a85f76"
					},
					"bindTo": "ErpName",
					"enabled": true
				},
				"parentName": "Tabe57891c7TabLabelGridLayout66a85f76",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING606887dd-6d7b-4fe0-a591-430dcdc4a857",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "Tabe57891c7TabLabelGridLayout66a85f76"
					},
					"bindTo": "ErpNotes",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Tabe57891c7TabLabelGridLayout66a85f76",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});
