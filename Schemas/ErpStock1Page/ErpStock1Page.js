define("ErpStock1Page", [], function() {
	return {
		entitySchemaName: "ErpStock",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ErpStockFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "ErpStock"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "ErpName8129d71c-50d5-485b-960a-ac32a3156e04",
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
				"name": "DATETIMEc29e1e68-77d6-4d2f-b576-a6d550573c3d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpDate",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP7999cf44-48a4-48b0-840d-d33c08a889d9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpProduct",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FLOAT2cdad40a-c6cf-411a-8bba-44d96d112857",
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
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FLOAT189e4b70-9267-4d7c-ae83-f21e52f7c721",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpPrice",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FLOAT5d7ab26c-1e2d-4bb9-90fa-8c06e72b54ee",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpTotal",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ErpStockLookupInstance047d7291-9ace-477e-9d6a-02e74e702b38",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpStockLookupInstance"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Tabcd5905d2TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabcd5905d2TabLabelTabCaption"
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
				"name": "Tabcd5905d2TabLabelGroup1f9c082c",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabcd5905d2TabLabelGroup1f9c082cGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabcd5905d2TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabcd5905d2TabLabelGridLayoute9913e1c",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabcd5905d2TabLabelGroup1f9c082c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP7b3233e7-2b4c-4fc1-be7c-e06968c525a9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabcd5905d2TabLabelGridLayoute9913e1c"
					},
					"bindTo": "ErpContractor",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabcd5905d2TabLabelGridLayoute9913e1c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabcd5905d2TabLabelGroupc52960cb",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabcd5905d2TabLabelGroupc52960cbGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabcd5905d2TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabcd5905d2TabLabelGridLayout3694964d",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabcd5905d2TabLabelGroupc52960cb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP30309a47-3b68-4d3b-8e71-a61db5ce12c8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabcd5905d2TabLabelGridLayout3694964d"
					},
					"bindTo": "ErpSale",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabcd5905d2TabLabelGridLayout3694964d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP52400b48-eb28-4e72-8c68-2dd2dbee5e74",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabcd5905d2TabLabelGridLayout3694964d"
					},
					"bindTo": "ErpProductInSale",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabcd5905d2TabLabelGridLayout3694964d",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP5065ac04-c56b-4dd5-ab55-d2c380b30c6d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tabcd5905d2TabLabelGridLayout3694964d"
					},
					"bindTo": "ErpReceipt",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tabcd5905d2TabLabelGridLayout3694964d",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
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
