define("ErpSales1Page", [], function() {
	return {
		entitySchemaName: "ErpSales",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ErpSalesFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "ErpSales"
				}
			},
			"ErpSchema40d15f15Detailaeba3c04": {
				"schemaName": "ErpSchema40d15f15Detail",
				"entitySchemaName": "ErpProductInErpSale",
				"filter": {
					"detailColumn": "ErpSale",
					"masterColumn": "Id"
				}
			},
			"ErpSchema458cc01cDetail9f6c1aef": {
				"schemaName": "ErpSchema458cc01cDetail",
				"entitySchemaName": "ErpSaleExecutor",
				"filter": {
					"detailColumn": "ErpSale",
					"masterColumn": "Id"
				}
			},
			"ErpSchema178b85a5Detaila8a5d5b4": {
				"schemaName": "ErpSchema178b85a5Detail",
				"entitySchemaName": "ErpMoney",
				"filter": {
					"detailColumn": "ErpSale",
					"masterColumn": "Id"
				}
			},
			"ErpSchemab80ca827Detaild015619d": {
				"schemaName": "ErpSchemab80ca827Detail",
				"entitySchemaName": "ErpMutual",
				"filter": {
					"detailColumn": "ErpSale",
					"masterColumn": "Id"
				}
			},
			"ErpSchemad9a551a2Detail61d8f4a7": {
				"schemaName": "ErpSchemad9a551a2Detail",
				"entitySchemaName": "ErpProfit",
				"filter": {
					"detailColumn": "ErpSale",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "ErpName7851ba53-eb58-419c-b327-a2b5f32b8fb3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpName",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEANcc37a087-4cfb-41ab-b75a-0e15819d32a3",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpRegistered",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DATETIMEda8e04c9-d835-4922-8951-e3f85d902182",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpDate",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGER15ed115b-ecbc-4829-8c82-759ecda1a89e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpCode",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabf7ea2e81TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabf7ea2e81TabLabelTabCaption"
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
				"name": "Tabf7ea2e81TabLabelGroup7b7f253a",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabf7ea2e81TabLabelGroup7b7f253aGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabf7ea2e81TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabf7ea2e81TabLabelGridLayoute7652599",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabf7ea2e81TabLabelGroup7b7f253a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPa22cc8f9-6315-49d8-a123-95d94b3acd58",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabf7ea2e81TabLabelGridLayoute7652599"
					},
					"bindTo": "ErpContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabf7ea2e81TabLabelGridLayoute7652599",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP0e57a0e6-75fa-459f-9f79-846bf93a3814",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabf7ea2e81TabLabelGridLayoute7652599"
					},
					"bindTo": "ErpAccount",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabf7ea2e81TabLabelGridLayoute7652599",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ErpCurrency8d0a074b-1a39-4134-b2f1-55057dfe6742",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabf7ea2e81TabLabelGridLayoute7652599"
					},
					"bindTo": "ErpCurrency"
				},
				"parentName": "Tabf7ea2e81TabLabelGridLayoute7652599",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPa5701855-d949-4bad-bcdb-5211ddc5e883",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tabf7ea2e81TabLabelGridLayoute7652599"
					},
					"bindTo": "ErpStock",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabf7ea2e81TabLabelGridLayoute7652599",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ErpSchema40d15f15Detailaeba3c04",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabf7ea2e81TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ErpSchema458cc01cDetail9f6c1aef",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabf7ea2e81TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ErpSchema178b85a5Detaila8a5d5b4",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabf7ea2e81TabLabel",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabdd6a9c55TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabdd6a9c55TabLabelTabCaption"
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
				"name": "ErpSchemab80ca827Detaild015619d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabdd6a9c55TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpSchemad9a551a2Detail61d8f4a7",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabdd6a9c55TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "ErpNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_DIFF*/
	};
});
