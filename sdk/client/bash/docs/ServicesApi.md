# ServicesApi

All URIs are relative to **

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ServicesApi.md#create) | **POST** /v1/service/add | 
[**findOne**](ServicesApi.md#findOne) | **GET** /v1/service/search/{client} | 
[**list**](ServicesApi.md#list) | **GET** /v1/service/search | 



## create



### Example

```bash
lethean-vpm create
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceEntity** | [**ServiceEntity**](ServiceEntity.md) |  |

### Return type

[**ServiceEntity**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## findOne



### Example

```bash
lethean-vpm findOne client=value
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **string** |  | [default to null]

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list



### Example

```bash
lethean-vpm list
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not Applicable
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

