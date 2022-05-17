define("ErpSchema26bdf445Page", [], function() {
	return {
		entitySchemaName: "ErpSaleExecutor",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUP0fb929c8-a5dd-4b79-9e66-555ebe897e5d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT9181ab04-7007-47e3-982e-d2cac144b307",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpAmount",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP3bd98298-024e-44b1-a8d1-031d74af8e90",
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BOOLEAN97fedc52-a327-4a06-98cd-0a98b424923f",
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
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabf9476bd7TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabf9476bd7TabLabelTabCaption"
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
				"name": "Tabf9476bd7TabLabelGroup137c3561",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabf9476bd7TabLabelGroup137c3561GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabf9476bd7TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabf9476bd7TabLabelGridLayoutfe35b5b0",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabf9476bd7TabLabelGroup137c3561",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpSale13dde965-7f09-44d0-95eb-15e0b490a2bd",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabf9476bd7TabLabelGridLayoutfe35b5b0"
					},
					"bindTo": "ErpSale"
				},
				"parentName": "Tabf9476bd7TabLabelGridLayoutfe35b5b0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpName01bcaa3a-9ca1-4135-a9fa-70d093ad59c8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabf9476bd7TabLabelGridLayoutfe35b5b0"
					},
					"bindTo": "ErpName",
					"enabled": true
				},
				"parentName": "Tabf9476bd7TabLabelGridLayoutfe35b5b0",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_DIFF*/
	};
});
