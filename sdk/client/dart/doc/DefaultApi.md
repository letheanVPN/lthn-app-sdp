# openapi.api.DefaultApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cacheStats**](DefaultApi.md#cachestats) | **GET** /v1/cache/index | 
[**sigVerify**](DefaultApi.md#sigverify) | **GET** /v1/signature/get | 


# **cacheStats**
> cacheStats()



### Example 
```dart
import 'package:openapi/api.dart';

final api_instance = DefaultApi();

try { 
    api_instance.cacheStats();
} catch (e) {
    print('Exception when calling DefaultApi->cacheStats: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sigVerify**
> sigVerify()



### Example 
```dart
import 'package:openapi/api.dart';

final api_instance = DefaultApi();

try { 
    api_instance.sigVerify();
} catch (e) {
    print('Exception when calling DefaultApi->sigVerify: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

