define("ErpProfit1Page", [], function() {
	return {
		entitySchemaName: "ErpProfit",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ErpProfitFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "ErpProfit"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "ErpName94b941e0-ce79-4f24-814c-acc3c8083f5a",
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
				"name": "DATETIME4e5e210b-14fc-4fc4-88af-54939f67da24",
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
				"name": "FLOATb99d1606-b65b-456d-a66a-36d48c3976fc",
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
				"name": "LOOKUPd996039f-5a60-4b36-961d-6f8879a0c872",
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
				"name": "LOOKUP4e650719-7902-47b0-8411-213fe3d75930",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "ErpSection",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Tab62128c08TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab62128c08TabLabelTabCaption"
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
				"name": "Tab62128c08TabLabelGroupeb178b73",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab62128c08TabLabelGroupeb178b73GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab62128c08TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab62128c08TabLabelGridLayout7a318cf8",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab62128c08TabLabelGroupeb178b73",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT0a71080e-36b6-4dc6-b487-67a66ac78c1c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab62128c08TabLabelGridLayout7a318cf8"
					},
					"bindTo": "ErpAccountingAmount",
					"enabled": true
				},
				"parentName": "Tab62128c08TabLabelGridLayout7a318cf8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP0b6a1a2c-14a3-42ad-9eb1-3ff822c1236b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab62128c08TabLabelGridLayout7a318cf8"
					},
					"bindTo": "ErpAccountingCurrency",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab62128c08TabLabelGridLayout7a318cf8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Taba1b2958cTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba1b2958cTabLabelTabCaption"
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
				"name": "Taba1b2958cTabLabelGroupfdc2a359",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba1b2958cTabLabelGroupfdc2a359GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Taba1b2958cTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Taba1b2958cTabLabelGridLayout37430d8a",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Taba1b2958cTabLabelGroupfdc2a359",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP421828ae-4455-4532-9698-ba54af22c7bf",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Taba1b2958cTabLabelGridLayout37430d8a"
					},
					"bindTo": "ErpSale",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Taba1b2958cTabLabelGridLayout37430d8a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP8f6a56df-ff7d-471f-b64b-10eaf05bc002",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Taba1b2958cTabLabelGridLayout37430d8a"
					},
					"bindTo": "ErpMoney",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Taba1b2958cTabLabelGridLayout37430d8a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUP439d8c90-b41e-4c5b-9dc5-77187cfe5018",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Taba1b2958cTabLabelGridLayout37430d8a"
					},
					"bindTo": "ErpSaleExecutor",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Taba1b2958cTabLabelGridLayout37430d8a",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP08d83625-50eb-4aee-ad73-f8a8e2bfc323",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Taba1b2958cTabLabelGridLayout37430d8a"
					},
					"bindTo": "ErpSalary",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Taba1b2958cTabLabelGridLayout37430d8a",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP2ee07b2f-9089-4b67-a618-d5b06cb89696",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "Taba1b2958cTabLabelGridLayout37430d8a"
					},
					"bindTo": "ErpEmployeeInSalary",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Taba1b2958cTabLabelGridLayout37430d8a",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUP0152be21-47cd-41ca-8ad0-74ba654fde7b",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "Taba1b2958cTabLabelGridLayout37430d8a"
					},
					"bindTo": "ErpReceipt",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Taba1b2958cTabLabelGridLayout37430d8a",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Taba1b2958cTabLabelGroupbd500a36",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Taba1b2958cTabLabelGroupbd500a36GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Taba1b2958cTabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Taba1b2958cTabLabelGridLayoutab19ef37",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Taba1b2958cTabLabelGroupbd500a36",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPaeb091f3-8703-42b1-8f2a-9b30cc6145b9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Taba1b2958cTabLabelGridLayoutab19ef37"
					},
					"bindTo": "ErpContractor",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Taba1b2958cTabLabelGridLayoutab19ef37",
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
