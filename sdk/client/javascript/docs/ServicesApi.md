# LetheanVpm.ServicesApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ServicesApi.md#create) | **POST** /v1/service/add | 
[**findOne**](ServicesApi.md#findOne) | **GET** /v1/service/search/{client} | 
[**list**](ServicesApi.md#list) | **GET** /v1/service/search | 



## create

> ServiceEntity create(serviceEntity)



### Example

```javascript
import LetheanVpm from 'lethean_vpm';

let apiInstance = new LetheanVpm.ServicesApi();
let serviceEntity = new LetheanVpm.ServiceEntity(); // ServiceEntity | 
apiInstance.create(serviceEntity, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

```javascript
import LetheanVpm from 'lethean_vpm';

let apiInstance = new LetheanVpm.ServicesApi();
let client = "client_example"; // String | 
apiInstance.findOne(client, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## list

> String list()



### Example

```javascript
import LetheanVpm from 'lethean_vpm';

let apiInstance = new LetheanVpm.ServicesApi();
apiInstance.list((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

