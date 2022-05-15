define("ErpMutual1Page", [], function() {
	return {
		entitySchemaName: "ErpMutual",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ErpMutualFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "ErpMutual"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "ErpNamea91dc066-4f70-43fe-b2c2-100c8a321ceb",
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
				"name": "DATETIMEc6fc380e-8169-4b51-940e-3920f8c1a6cd",
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
				"name": "FLOAT64b49984-0288-4c12-b73e-e03046f2c45d",
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUPc79e6429-c42b-49a2-a91d-0471d744139c",
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
				"name": "Tab20623571TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab20623571TabLabelTabCaption"
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
				"name": "Tab20623571TabLabelGroupb3fe79f7",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab20623571TabLabelGroupb3fe79f7GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab20623571TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab20623571TabLabelGridLayout2b6eeea1",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab20623571TabLabelGroupb3fe79f7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP7808d5b2-b47c-4980-97af-0192a0f9340f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab20623571TabLabelGridLayout2b6eeea1"
					},
					"bindTo": "ErpContractor",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab20623571TabLabelGridLayout2b6eeea1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPd223fc96-d5d0-4481-bc61-1ce485aa7133",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab20623571TabLabelGridLayout2b6eeea1"
					},
					"bindTo": "ErpContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab20623571TabLabelGridLayout2b6eeea1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP53f89034-a7c2-460c-8656-2170688fe50a",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab20623571TabLabelGridLayout2b6eeea1"
					},
					"bindTo": "ErpAccount",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab20623571TabLabelGridLayout2b6eeea1",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab20623571TabLabelGroup12fcf6c0",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab20623571TabLabelGroup12fcf6c0GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab20623571TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab20623571TabLabelGridLayout03df9a05",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab20623571TabLabelGroup12fcf6c0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP47b81d62-80a6-4d16-8834-a0005683d7d4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab20623571TabLabelGridLayout03df9a05"
					},
					"bindTo": "ErpMoney",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab20623571TabLabelGridLayout03df9a05",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP06493cc9-32e6-4c76-b555-f53e978fa0f8",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab20623571TabLabelGridLayout03df9a05"
					},
					"bindTo": "ErpSale",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab20623571TabLabelGridLayout03df9a05",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP70edb3a2-239e-455f-9bc2-d3b7725c4e03",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab20623571TabLabelGridLayout03df9a05"
					},
					"bindTo": "ErpSalary",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab20623571TabLabelGridLayout03df9a05",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP074626ec-2ece-4668-be5a-102761633f58",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Tab20623571TabLabelGridLayout03df9a05"
					},
					"bindTo": "ErpSaleExecutor",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab20623571TabLabelGridLayout03df9a05",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tabad13aac2TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabad13aac2TabLabelTabCaption"
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
