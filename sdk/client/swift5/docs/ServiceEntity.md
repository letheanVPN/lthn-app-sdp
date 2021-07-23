# ServiceEntity

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the service | [optional] 
**name** | **String** | Name of the service | 
**type** | **String** | Type of the service | 
**cost** | **String** | Per minute Cost of the service | 
**firstPrePaidMinutes** | **Double** | Amount of pre-paid minutes for first payment | [optional] 
**firstVerificationsNeeded** | **Double** | Number of verifications needed for first payment | [optional] 
**subsequentPrePaidMinutes** | **Double** | Amount of pre-paid minutes for subsequent payments | [optional] 
**subsequentVerificationsNeeded** | **Double** | Number of verifications needed for subsequent payments | [optional] 
**allowRefunds** | **Bool** | Whether or not refunds are allowed | [optional] 
**downloadSpeed** | **Double** | Service download speed in Mbits | 
**uploadSpeed** | **Double** | Service upload speed in Mbits | 
**proxy** | [ProxySettingsEntity] | array containing Proxy related settings. only available if service is of type proxy, null otherwise | [optional] 
**vpn** | [VpnSettingsEntity] | array containing VPN related settings. only available if service is of type vpn, null otherwise | [optional] 
**validity** | [**TimeRangeEntity**](TimeRangeEntity.md) |  | [optional] 
**disable** | **Bool** | disable or not the service | 
**certificates** | [CertificatesEntity] | inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


