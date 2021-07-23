# openapi.api.ServicesApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ServicesApi.md#create) | **POST** /v1/service/add | 
[**findOne**](ServicesApi.md#findone) | **GET** /v1/service/search/{client} | 


# **create**
> ServiceEntity create(serviceEntity)



### Example 
```dart
import 'package:openapi/api.dart';

final api_instance = ServicesApi();
final serviceEntity = ServiceEntity(); // ServiceEntity | 

try { 
    final result = api_instance.create(serviceEntity);
    print(result);
} catch (e) {
    print('Exception when calling ServicesApi->create: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceEntity** | [**ServiceEntity**](ServiceEntity.md)|  | 

### Return type

[**ServiceEntity**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findOne**
> String findOne(client)



### Example 
```dart
import 'package:openapi/api.dart';

final api_instance = ServicesApi();
final client = client_example; // String | 

try { 
    final result = api_instance.findOne(client);
    print(result);
} catch (e) {
    print('Exception when calling ServicesApi->findOne: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

