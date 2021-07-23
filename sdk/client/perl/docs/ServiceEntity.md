# WWW::OpenAPIClient::Object::ServiceEntity

## Load the model package
```perl
use WWW::OpenAPIClient::Object::ServiceEntity;
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | ID of the service | 
**name** | **string** | Name of the service | 
**type** | **string** | Type of the service | 
**cost** | **string** | Per minute Cost of the service | 
**first_pre_paid_minutes** | **double** | Amount of pre-paid minutes for first payment | [optional] 
**first_verifications_needed** | **double** | Number of verifications needed for first payment | [optional] 
**subsequent_pre_paid_minutes** | **double** | Amount of pre-paid minutes for subsequent payments | [optional] 
**subsequent_verifications_needed** | **double** | Number of verifications needed for subsequent payments | [optional] 
**allow_refunds** | **boolean** | Whether or not refunds are allowed | [optional] 
**download_speed** | **double** | Service download speed in Mbits | 
**upload_speed** | **double** | Service upload speed in Mbits | 
**proxy** | [**ARRAY[ProxySettingsEntity]**](ProxySettingsEntity.md) | array containing Proxy related settings. only available if service is of type proxy, null otherwise | [optional] 
**vpn** | [**ARRAY[VpnSettingsEntity]**](VpnSettingsEntity.md) | array containing VPN related settings. only available if service is of type vpn, null otherwise | [optional] 
**validity** | [**TimeRangeEntity**](TimeRangeEntity.md) |  | [optional] 
**disable** | **boolean** | disable or not the service | 
**certificates** | [**ARRAY[CertificatesEntity]**](CertificatesEntity.md) | inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


