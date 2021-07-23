# service_entity_t

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **char \*** | ID of the service | 
**name** | **char \*** | Name of the service | 
**type** | **lethean_vpn_api_service_entity_TYPE_e** | Type of the service | 
**cost** | **char \*** | Per minute Cost of the service | 
**first_pre_paid_minutes** | **double** | Amount of pre-paid minutes for first payment | [optional] 
**first_verifications_needed** | **double** | Number of verifications needed for first payment | [optional] 
**subsequent_pre_paid_minutes** | **double** | Amount of pre-paid minutes for subsequent payments | [optional] 
**subsequent_verifications_needed** | **double** | Number of verifications needed for subsequent payments | [optional] 
**allow_refunds** | **int** | Whether or not refunds are allowed | [optional] 
**download_speed** | **double** | Service download speed in Mbits | 
**upload_speed** | **double** | Service upload speed in Mbits | 
**proxy** | [**list_t**](proxy_settings_entity.md) \* | array containing Proxy related settings. only available if service is of type proxy, null otherwise | [optional] 
**vpn** | [**list_t**](vpn_settings_entity.md) \* | array containing VPN related settings. only available if service is of type vpn, null otherwise | [optional] 
**validity** | [**time_range_entity_t**](time_range_entity.md) \* |  | [optional] 
**disable** | **int** | disable or not the service | 
**certificates** | [**list_t**](certificates_entity.md) \* | inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


