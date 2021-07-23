

# ServiceEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the service | 
**name** | **String** | Name of the service | 
**type** | [**TypeEnum**](#TypeEnum) | Type of the service | 
**cost** | **String** | Per minute Cost of the service | 
**firstPrePaidMinutes** | [**BigDecimal**](BigDecimal.md) | Amount of pre-paid minutes for first payment |  [optional]
**firstVerificationsNeeded** | [**BigDecimal**](BigDecimal.md) | Number of verifications needed for first payment |  [optional]
**subsequentPrePaidMinutes** | [**BigDecimal**](BigDecimal.md) | Amount of pre-paid minutes for subsequent payments |  [optional]
**subsequentVerificationsNeeded** | [**BigDecimal**](BigDecimal.md) | Number of verifications needed for subsequent payments |  [optional]
**allowRefunds** | **Boolean** | Whether or not refunds are allowed |  [optional]
**downloadSpeed** | [**BigDecimal**](BigDecimal.md) | Service download speed in Mbits | 
**uploadSpeed** | [**BigDecimal**](BigDecimal.md) | Service upload speed in Mbits | 
**proxy** | [**List&lt;ProxySettingsEntity&gt;**](ProxySettingsEntity.md) | array containing Proxy related settings. only available if service is of type proxy, null otherwise |  [optional]
**vpn** | [**List&lt;VpnSettingsEntity&gt;**](VpnSettingsEntity.md) | array containing VPN related settings. only available if service is of type vpn, null otherwise |  [optional]
**validity** | [**TimeRangeEntity**](TimeRangeEntity.md) |  |  [optional]
**disable** | **Boolean** | disable or not the service | 
**certificates** | [**List&lt;CertificatesEntity&gt;**](CertificatesEntity.md) | inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level. |  [optional]


## Enum: TypeEnum

Name | Value
---- | -----




