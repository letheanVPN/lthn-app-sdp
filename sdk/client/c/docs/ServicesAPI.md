# ServicesAPI

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ServicesAPI_create**](ServicesAPI.md#ServicesAPI_create) | **POST** /v1/service/add | 
[**ServicesAPI_findOne**](ServicesAPI.md#ServicesAPI_findOne) | **GET** /v1/service/search/{client} | 
[**ServicesAPI_list**](ServicesAPI.md#ServicesAPI_list) | **GET** /v1/service/search | 


# **ServicesAPI_create**
```c
service_entity_t* ServicesAPI_create(apiClient_t *apiClient, service_entity_t * service_entity);
```

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**apiClient** | **apiClient_t \*** | context containing the client configuration | 
**service_entity** | **[service_entity_t](service_entity.md) \*** |  | 

### Return type

[service_entity_t](service_entity.md) *


### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ServicesAPI_findOne**
```c
char* ServicesAPI_findOne(apiClient_t *apiClient, char * client);
```

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**apiClient** | **apiClient_t \*** | context containing the client configuration | 
**client** | **char \*** |  | 

### Return type

char*



### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ServicesAPI_list**
```c
char* ServicesAPI_list(apiClient_t *apiClient);
```

### Parameters
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**apiClient** | **apiClient_t \*** | context containing the client configuration | 

### Return type

char*



### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

