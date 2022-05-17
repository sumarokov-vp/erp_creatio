define("ErpMoney1Page", [], function() {
	return {
		entitySchemaName: "ErpMoney",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ErpMoneyFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "ErpMoney"
				}
			},
			"ErpSchema5563a8a9Detail310d33cd": {
				"schemaName": "ErpSchema5563a8a9Detail",
				"entitySchemaName": "ErpFund",
				"filter": {
					"detailColumn": "ErpMoney",
					"masterColumn": "Id"
				}
			},
			"ErpSchemab80ca827Detail06a0d228": {
				"schemaName": "ErpSchemab80ca827Detail",
				"entitySchemaName": "ErpMutual",
				"filter": {
					"detailColumn": "ErpMoney",
					"masterColumn": "Id"
				}
			},
			"ErpSchemad9a551a2Detaila2c8537a": {
				"schemaName": "ErpSchemad9a551a2Detail",
				"entitySchemaName": "ErpProfit",
				"filter": {
					"detailColumn": "ErpMoney",
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
				"name": "ErpName4940543d-28d3-4f48-a845-26c97142484e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BOOLEAN3266912f-a007-4434-b4c4-4e3deb975976",
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
				"name": "DATETIMEe2aff818-6ac0-4646-9bb2-866668db0306",
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
				"name": "FLOAT20d109d7-9f51-4e01-b5d0-4b13800e9dc2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpAmount",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUPd3d3cbe8-1117-455f-b6a4-3c051bc10212",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpCurrency",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP9268ab4f-3679-42f3-872e-73a2466b4555",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpDirection",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP20ad2a90-2972-47cc-8b6e-c926a1904b0c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpOperationType",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUP5dc98eec-d377-414b-900a-f5e0de47bc6b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpAsset",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "LOOKUPa196aa36-a5ce-40e3-8cdc-d86262f8814d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpDestinationAsset",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Tabda6f9525TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabda6f9525TabLabelTabCaption"
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
				"name": "Tabda6f9525TabLabelGroupd9c3b1d3",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabda6f9525TabLabelGroupd9c3b1d3GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabda6f9525TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabda6f9525TabLabelGridLayouta6dae347",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabda6f9525TabLabelGroupd9c3b1d3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPad41040d-0e0d-4df4-b12d-1f2a25a693da",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabda6f9525TabLabelGridLayouta6dae347"
					},
					"bindTo": "ErpContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabda6f9525TabLabelGridLayouta6dae347",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP1eb43cc9-bd8b-4a9c-a6a9-ecad96e5e120",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabda6f9525TabLabelGridLayouta6dae347"
					},
					"bindTo": "ErpAccount",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabda6f9525TabLabelGridLayouta6dae347",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP705e7a59-faa4-4cad-8a0d-98eac45d28db",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabda6f9525TabLabelGridLayouta6dae347"
					},
					"bindTo": "ErpContractor",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabda6f9525TabLabelGridLayouta6dae347",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab1be6c2c8TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab1be6c2c8TabLabelTabCaption"
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
				"name": "ErpSchema5563a8a9Detail310d33cd",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab1be6c2c8TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpSchemab80ca827Detail06a0d228",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab1be6c2c8TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ErpSchemad9a551a2Detaila2c8537a",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab1be6c2c8TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab83b0ec1eTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab83b0ec1eTabLabelTabCaption"
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
				"name": "Tab83b0ec1eTabLabelGroupaa112bec",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab83b0ec1eTabLabelGroupaa112becGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab83b0ec1eTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab83b0ec1eTabLabelGridLayout5a3eb055",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab83b0ec1eTabLabelGroupaa112bec",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP145f7cd7-28e5-4084-aa35-31214eb8d47e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab83b0ec1eTabLabelGridLayout5a3eb055"
					},
					"bindTo": "ErpSale",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab83b0ec1eTabLabelGridLayout5a3eb055",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 3
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 3
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
