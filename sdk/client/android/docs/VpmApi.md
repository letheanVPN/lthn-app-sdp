# VpmApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFeedback**](VpmApi.md#addFeedback) | **POST** /v1/feedback/add | 
[**createService**](VpmApi.md#createService) | **POST** /v1/service/add | 
[**findAll**](VpmApi.md#findAll) | **GET** /v1/provider/search | 
[**findOne**](VpmApi.md#findOne) | **GET** /v1/service/search/{client} | 
[**getProviderFeedback**](VpmApi.md#getProviderFeedback) | **GET** /v1/feedback/get/{client}/{id} | 
[**getProvidersFeedback**](VpmApi.md#getProvidersFeedback) | **GET** /v1/feedback/stats | 
[**listServices**](VpmApi.md#listServices) | **GET** /v1/service/search | 



## addFeedback

> String addFeedback(feedbackEntity)



### Example

```java
// Import classes:
//import org.lthn.vpm.VpmApi;

VpmApi apiInstance = new VpmApi();
FeedbackEntity feedbackEntity = new FeedbackEntity(); // FeedbackEntity | 
try {
    String result = apiInstance.addFeedback(feedbackEntity);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VpmApi#addFeedback");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedbackEntity** | [**FeedbackEntity**](FeedbackEntity.md)|  |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createService

> ServiceEntity createService(serviceEntity)



### Example

```java
// Import classes:
//import org.lthn.vpm.VpmApi;

VpmApi apiInstance = new VpmApi();
ServiceEntity serviceEntity = new ServiceEntity(); // ServiceEntity | 
try {
    ServiceEntity result = apiInstance.createService(serviceEntity);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VpmApi#createService");
    e.printStackTrace();
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


## findAll

> List&lt;ProviderEntity&gt; findAll()



### Example

```java
// Import classes:
//import org.lthn.vpm.VpmApi;

VpmApi apiInstance = new VpmApi();
try {
    List<ProviderEntity> result = apiInstance.findAll();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VpmApi#findAll");
    e.printStackTrace();
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**List&lt;ProviderEntity&gt;**](ProviderEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## findOne

> String findOne(client)



### Example

```java
// Import classes:
//import org.lthn.vpm.VpmApi;

VpmApi apiInstance = new VpmApi();
String client = null; // String | 
try {
    String result = apiInstance.findOne(client);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VpmApi#findOne");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**|  | [default to null]

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProviderFeedback

> FeedbackEntity getProviderFeedback(client, id)



### Example

```java
// Import classes:
//import org.lthn.vpm.VpmApi;

VpmApi apiInstance = new VpmApi();
String client = null; // String | 
String id = null; // String | 
try {
    FeedbackEntity result = apiInstance.getProviderFeedback(client, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VpmApi#getProviderFeedback");
    e.printStackTrace();
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**|  | [default to null]
 **id** | **String**|  | [default to null]

### Return type

[**FeedbackEntity**](FeedbackEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProvidersFeedback

> List&lt;FeedbackEntity&gt; getProvidersFeedback()



### Example

```java
// Import classes:
//import org.lthn.vpm.VpmApi;

VpmApi apiInstance = new VpmApi();
try {
    List<FeedbackEntity> result = apiInstance.getProvidersFeedback();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VpmApi#getProvidersFeedback");
    e.printStackTrace();
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**List&lt;FeedbackEntity&gt;**](FeedbackEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listServices

> List&lt;ServiceEntity&gt; listServices()



### Example

```java
// Import classes:
//import org.lthn.vpm.VpmApi;

VpmApi apiInstance = new VpmApi();
try {
    List<ServiceEntity> result = apiInstance.listServices();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VpmApi#listServices");
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

