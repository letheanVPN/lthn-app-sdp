# TimeRangeEntity
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarFrom** | **System.DateTime** | YYYY-MM-DDT00:00:00Z | 
**To** | **System.DateTime** | YYYY-MM-DDT00:00:00Z | 

## Examples

- Prepare the resource
```powershell
$TimeRangeEntity = Initialize-PSOpenAPIToolsTimeRangeEntity  -VarFrom null `
 -To null
```

- Convert the resource to JSON
```powershell
$TimeRangeEntity | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

