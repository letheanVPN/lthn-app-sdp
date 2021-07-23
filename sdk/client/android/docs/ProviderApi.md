# ProviderApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAll**](ProviderApi.md#findAll) | **GET** /v1/provider/search | 



## findAll

> List&lt;ServiceEntity&gt; findAll()



### Example

```java
// Import classes:
//import org.openapitools.client.api.ProviderApi;

ProviderApi apiInstance = new ProviderApi();
try {
    List<ServiceEntity> result = apiInstance.findAll();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ProviderApi#findAll");
    e.printStackTrace();
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**List&lt;ServiceEntity&gt;**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

