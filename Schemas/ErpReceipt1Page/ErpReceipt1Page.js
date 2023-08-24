define("ErpReceipt1Page", [], function() {
	return {
		entitySchemaName: "ErpReceipt",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ErpReceiptFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "ErpReceipt"
				}
			},
			"ErpSchema3e46a19cDetailb178d7e5": {
				"schemaName": "ErpSchema3e46a19cDetail",
				"entitySchemaName": "ErpProductInReceipt",
				"filter": {
					"detailColumn": "ErpReceipt",
					"masterColumn": "Id"
				}
			},
			"ErpSchema7315062cDetail29f66783": {
				"schemaName": "ErpSchema7315062cDetail",
				"entitySchemaName": "ErpStock",
				"filter": {
					"detailColumn": "ErpReceipt",
					"masterColumn": "Id"
				}
			},
			"ErpSchemab80ca827Detailc289f7fa": {
				"schemaName": "ErpSchemab80ca827Detail",
				"entitySchemaName": "ErpMutual",
				"filter": {
					"detailColumn": "ErpReceipt",
					"masterColumn": "Id"
				}
			},
			"ErpSchemad9a551a2Detail916d93b2": {
				"schemaName": "ErpSchemad9a551a2Detail",
				"entitySchemaName": "ErpProfit",
				"filter": {
					"detailColumn": "ErpReceipt",
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
				"name": "ErpRegistered573cc17e-1a99-4862-89f0-1a69f233c876",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "ErpRegistered"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpDate255b31ed-bb79-4375-ac97-dcec0f47546e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "ErpDate"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ErpTotal379bc4c0-af5c-4249-bd0f-f75ba0dbb45f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "ErpTotal",
					"enabled": false
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ErpCurrency709d3da0-993a-4fb6-a5f6-5f54ff8cca44",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "Header"
					},
					"bindTo": "ErpCurrency",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab749c3ed2TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab749c3ed2TabLabelTabCaption"
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
				"name": "Tab749c3ed2TabLabelGroupd98258ae",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab749c3ed2TabLabelGroupd98258aeGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab749c3ed2TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab749c3ed2TabLabelGridLayoutbdd8319d",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab749c3ed2TabLabelGroupd98258ae",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpStocke524ba69-3a77-4cfd-96a2-9285430dee2e",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab749c3ed2TabLabelGridLayoutbdd8319d"
					},
					"bindTo": "ErpStock",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Tab749c3ed2TabLabelGridLayoutbdd8319d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpSchema3e46a19cDetailb178d7e5",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab749c3ed2TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tabfaad4542TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabfaad4542TabLabelTabCaption"
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
				"name": "ErpSchema7315062cDetail29f66783",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabfaad4542TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ErpSchemab80ca827Detailc289f7fa",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabfaad4542TabLabel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ErpSchemad9a551a2Detail916d93b2",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tabfaad4542TabLabel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab72069b79TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab72069b79TabLabelTabCaption"
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
				"name": "Tab72069b79TabLabelGroup1f75edf4",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab72069b79TabLabelGroup1f75edf4GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab72069b79TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab72069b79TabLabelGridLayoutd77e94f8",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab72069b79TabLabelGroup1f75edf4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPdc9200e0-aa66-499e-aa13-7066dc959eb4",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab72069b79TabLabelGridLayoutd77e94f8"
					},
					"bindTo": "ErpContractor",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab72069b79TabLabelGridLayoutd77e94f8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUPd16ae5ef-958b-42de-a9cc-a6bc806cc7ed",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab72069b79TabLabelGridLayoutd77e94f8"
					},
					"bindTo": "ErpContact",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab72069b79TabLabelGridLayoutd77e94f8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUPfd0aba6e-227e-4150-8c73-1a53d076f1e5",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "Tab72069b79TabLabelGridLayoutd77e94f8"
					},
					"bindTo": "ErpAccount",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab72069b79TabLabelGridLayoutd77e94f8",
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
