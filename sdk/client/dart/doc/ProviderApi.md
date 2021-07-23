# openapi.api.ProviderApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAll**](ProviderApi.md#findall) | **GET** /v1/provider/search | 


# **findAll**
> List<ServiceEntity> findAll()



### Example 
```dart
import 'package:openapi/api.dart';

final api_instance = ProviderApi();

try { 
    final result = api_instance.findAll();
    print(result);
} catch (e) {
    print('Exception when calling ProviderApi->findAll: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<ServiceEntity>**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

