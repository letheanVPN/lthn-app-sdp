# ServicesApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ServicesApi.md#create) | **POST** /v1/service/add | 
[**findOne**](ServicesApi.md#findOne) | **GET** /v1/service/search/{client} | 
[**list**](ServicesApi.md#list) | **GET** /v1/service/search | 



## create

> ServiceEntity create(serviceEntity)



### Example

```java
// Import classes:
//import org.lthn.vpm.ServicesApi;

ServicesApi apiInstance = new ServicesApi();
ServiceEntity serviceEntity = new ServiceEntity(); // ServiceEntity | 
try {
    ServiceEntity result = apiInstance.create(serviceEntity);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ServicesApi#create");
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


## findOne

> String findOne(client)



### Example

```java
// Import classes:
//import org.lthn.vpm.ServicesApi;

ServicesApi apiInstance = new ServicesApi();
String client = null; // String | 
try {
    String result = apiInstance.findOne(client);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ServicesApi#findOne");
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


## list

> String list()



### Example

```java
// Import classes:
//import org.lthn.vpm.ServicesApi;

ServicesApi apiInstance = new ServicesApi();
try {
    String result = apiInstance.list();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ServicesApi#list");
    e.printStackTrace();
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

