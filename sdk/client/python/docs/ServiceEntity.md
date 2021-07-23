# ServiceEntity


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the service | [optional] 
**name** | **str** | Name of the service | 
**type** | **str** | Type of the service | 
**cost** | **str** | Per minute Cost of the service | 
**first_pre_paid_minutes** | **float** | Amount of pre-paid minutes for first payment | [optional] 
**first_verifications_needed** | **float** | Number of verifications needed for first payment | [optional] 
**subsequent_pre_paid_minutes** | **float** | Amount of pre-paid minutes for subsequent payments | [optional] 
**subsequent_verifications_needed** | **float** | Number of verifications needed for subsequent payments | [optional] 
**allow_refunds** | **bool** | Whether or not refunds are allowed | [optional] 
**download_speed** | **float** | Service download speed in Mbits | 
**upload_speed** | **float** | Service upload speed in Mbits | 
**proxy** | [**list[ProxySettingsEntity]**](ProxySettingsEntity.md) | array containing Proxy related settings. only available if service is of type proxy, null otherwise | [optional] 
**vpn** | [**list[VpnSettingsEntity]**](VpnSettingsEntity.md) | array containing VPN related settings. only available if service is of type vpn, null otherwise | [optional] 
**validity** | [**TimeRangeEntity**](TimeRangeEntity.md) |  | [optional] 
**disable** | **bool** | disable or not the service | 
**certificates** | [**list[CertificatesEntity]**](CertificatesEntity.md) | inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


