# VpnSettingsEntity
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Endpoint** | **String** | IP Addresses of endpoints for VPN service only | 
**Port** | **String** | Port these settings apply to | 
**Parameters** | **String** | mtu size parameter for vpn service only | 
**Terms** | **String** | Terms for the service | 
**Policy** | **String[]** | a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server | 

## Examples

- Prepare the resource
```powershell
$VpnSettingsEntity = Initialize-PSOpenAPIToolsVpnSettingsEntity  -Endpoint null `
 -Port null `
 -Parameters null `
 -Terms null `
 -Policy null
```

- Convert the resource to JSON
```powershell
$VpnSettingsEntity | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

