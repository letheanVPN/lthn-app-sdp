# LetheanVpnApi.ServiceEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the service | 
**name** | **String** | Name of the service | 
**type** | **String** | Type of the service | 
**cost** | **String** | Per minute Cost of the service | 
**firstPrePaidMinutes** | **Number** | Amount of pre-paid minutes for first payment | [optional] 
**firstVerificationsNeeded** | **Number** | Number of verifications needed for first payment | [optional] 
**subsequentPrePaidMinutes** | **Number** | Amount of pre-paid minutes for subsequent payments | [optional] 
**subsequentVerificationsNeeded** | **Number** | Number of verifications needed for subsequent payments | [optional] 
**allowRefunds** | **Boolean** | Whether or not refunds are allowed | [optional] 
**downloadSpeed** | **Number** | Service download speed in Mbits | 
**uploadSpeed** | **Number** | Service upload speed in Mbits | 
**proxy** | [**[ProxySettingsEntity]**](ProxySettingsEntity.md) | array containing Proxy related settings. only available if service is of type proxy, null otherwise | [optional] 
**vpn** | [**[VpnSettingsEntity]**](VpnSettingsEntity.md) | array containing VPN related settings. only available if service is of type vpn, null otherwise | [optional] 
**validity** | [**TimeRangeEntity**](TimeRangeEntity.md) |  | [optional] 
**disable** | **Boolean** | disable or not the service | 
**certificates** | [**[CertificatesEntity]**](CertificatesEntity.md) | inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level. | [optional] 



## Enum: TypeEnum


* `vpn` (value: `"vpn"`)

* `proxy` (value: `"proxy"`)




