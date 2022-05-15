define("ErpSalary1Page", [], function() {
	return {
		entitySchemaName: "ErpSalary",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "ErpSalaryFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "ErpSalary"
				}
			},
			"ErpSchemab80ca827Detailddf6fbcb": {
				"schemaName": "ErpSchemab80ca827Detail",
				"entitySchemaName": "ErpMutual",
				"filter": {
					"detailColumn": "ErpSalary",
					"masterColumn": "Id"
				}
			},
			"ErpSchema194a8591Detail9d7bfd5d": {
				"schemaName": "ErpSchema194a8591Detail",
				"entitySchemaName": "ErpEmployeesInSalary",
				"filter": {
					"detailColumn": "ErpSalary",
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
				"name": "ErpNamec878c9d2-e87a-4c73-bec1-dd40fc79e856",
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
				"name": "BOOLEANb1c834b6-fb15-4aa8-8867-b6ea5c644ad0",
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
				"name": "DATETIMEbf13a9e3-5ff0-4e91-9422-d5f39b1b4aa3",
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
				"name": "Tab768b6f0eTabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab768b6f0eTabLabelTabCaption"
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
				"name": "ErpSchema194a8591Detail9d7bfd5d",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab768b6f0eTabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab4da11a56TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4da11a56TabLabelTabCaption"
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
				"name": "Tab4da11a56TabLabelGroupf6073a48",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab4da11a56TabLabelGroupf6073a48GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab4da11a56TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab4da11a56TabLabelGridLayout1529b0e3",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab4da11a56TabLabelGroupf6073a48",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP792d6ede-b856-4eac-9529-24bd32c83f95",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab4da11a56TabLabelGridLayout1529b0e3"
					},
					"bindTo": "ErpContractor",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Tab4da11a56TabLabelGridLayout1529b0e3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab01161703TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab01161703TabLabelTabCaption"
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
				"name": "ErpSchemab80ca827Detailddf6fbcb",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab01161703TabLabel",
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
