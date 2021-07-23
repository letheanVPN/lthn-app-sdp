# ProxySettingsEntity
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Endpoint** | **String** | IP Address of endpoints for Proxy service only | 
**Port** | **String** | Port available on endpoint | 
**Terms** | **String** | Terms for the service | 
**Policy** | **String[]** | a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server | 

## Examples

- Prepare the resource
```powershell
$ProxySettingsEntity = Initialize-PSOpenAPIToolsProxySettingsEntity  -Endpoint null `
 -Port null `
 -Terms null `
 -Policy null
```

- Convert the resource to JSON
```powershell
$ProxySettingsEntity | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

