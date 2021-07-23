# # ServiceEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the service |
**name** | **string** | Name of the service |
**type** | **string** | Type of the service |
**cost** | **string** | Per minute Cost of the service |
**first_pre_paid_minutes** | **float** | Amount of pre-paid minutes for first payment | [optional]
**first_verifications_needed** | **float** | Number of verifications needed for first payment | [optional]
**subsequent_pre_paid_minutes** | **float** | Amount of pre-paid minutes for subsequent payments | [optional]
**subsequent_verifications_needed** | **float** | Number of verifications needed for subsequent payments | [optional]
**allow_refunds** | **bool** | Whether or not refunds are allowed | [optional]
**download_speed** | **float** | Service download speed in Mbits |
**upload_speed** | **float** | Service upload speed in Mbits |
**proxy** | [**\OpenAPI\Client\Model\ProxySettingsEntity[]**](ProxySettingsEntity.md) | array containing Proxy related settings. only available if service is of type proxy, null otherwise | [optional]
**vpn** | [**\OpenAPI\Client\Model\VpnSettingsEntity[]**](VpnSettingsEntity.md) | array containing VPN related settings. only available if service is of type vpn, null otherwise | [optional]
**validity** | [**\OpenAPI\Client\Model\TimeRangeEntity**](TimeRangeEntity.md) |  | [optional]
**disable** | **bool** | disable or not the service |
**certificates** | [**\OpenAPI\Client\Model\CertificatesEntity[]**](CertificatesEntity.md) | inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
