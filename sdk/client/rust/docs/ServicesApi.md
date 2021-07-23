# \ServicesApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ServicesApi.md#create) | **POST** /v1/service/add | 
[**find_one**](ServicesApi.md#find_one) | **GET** /v1/service/search/{client} | 
[**list**](ServicesApi.md#list) | **GET** /v1/service/search | 



## create

> crate::models::ServiceEntity create(service_entity)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**service_entity** | [**ServiceEntity**](ServiceEntity.md) |  | [required] |

### Return type

[**crate::models::ServiceEntity**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## find_one

> String find_one(client)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**client** | **String** |  | [required] |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list

> String list()


### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

