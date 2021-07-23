# DefaultApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cacheStats**](DefaultApi.md#cacheStats) | **GET** /v1/cache/index | 
[**sigVerify**](DefaultApi.md#sigVerify) | **GET** /v1/signature/get | 



## cacheStats

> cacheStats()



### Example

```java
// Import classes:
//import org.openapitools.client.api.DefaultApi;

DefaultApi apiInstance = new DefaultApi();
try {
    apiInstance.cacheStats();
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#cacheStats");
    e.printStackTrace();
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## sigVerify

> sigVerify()



### Example

```java
// Import classes:
//import org.openapitools.client.api.DefaultApi;

DefaultApi apiInstance = new DefaultApi();
try {
    apiInstance.sigVerify();
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#sigVerify");
    e.printStackTrace();
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

