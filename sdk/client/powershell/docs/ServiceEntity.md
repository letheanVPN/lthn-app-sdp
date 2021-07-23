# ServiceEntity
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the service | [optional] 
**Name** | **String** | Name of the service | 
**Type** | **String** | Type of the service | 
**Cost** | **String** | Per minute Cost of the service | 
**FirstPrePaidMinutes** | **Decimal** | Amount of pre-paid minutes for first payment | [optional] 
**FirstVerificationsNeeded** | **Decimal** | Number of verifications needed for first payment | [optional] 
**SubsequentPrePaidMinutes** | **Decimal** | Amount of pre-paid minutes for subsequent payments | [optional] 
**SubsequentVerificationsNeeded** | **Decimal** | Number of verifications needed for subsequent payments | [optional] 
**AllowRefunds** | **Boolean** | Whether or not refunds are allowed | [optional] 
**DownloadSpeed** | **Decimal** | Service download speed in Mbits | 
**UploadSpeed** | **Decimal** | Service upload speed in Mbits | 
**Proxy** | [**ProxySettingsEntity[]**](ProxySettingsEntity.md) | array containing Proxy related settings. only available if service is of type proxy, null otherwise | [optional] 
**Vpn** | [**VpnSettingsEntity[]**](VpnSettingsEntity.md) | array containing VPN related settings. only available if service is of type vpn, null otherwise | [optional] 
**Validity** | [**TimeRangeEntity**](TimeRangeEntity.md) |  | [optional] 
**Disable** | **Boolean** | disable or not the service | 
**Certificates** | [**CertificatesEntity[]**](CertificatesEntity.md) | inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level. | [optional] 

## Examples

- Prepare the resource
```powershell
$ServiceEntity = Initialize-PSOpenAPIToolsServiceEntity  -Id null `
 -Name null `
 -Type null `
 -Cost null `
 -FirstPrePaidMinutes null `
 -FirstVerificationsNeeded null `
 -SubsequentPrePaidMinutes null `
 -SubsequentVerificationsNeeded null `
 -AllowRefunds null `
 -DownloadSpeed null `
 -UploadSpeed null `
 -Proxy null `
 -Vpn null `
 -Validity null `
 -Disable null `
 -Certificates null
```

- Convert the resource to JSON
```powershell
$ServiceEntity | ConvertTo-JSON
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

