# LetheanVpm.DefaultApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cacheStats**](DefaultApi.md#cacheStats) | **GET** /v1/cache/index | 
[**sigVerify**](DefaultApi.md#sigVerify) | **GET** /v1/signature/get | 



## cacheStats

> cacheStats()



### Example

```javascript
import LetheanVpm from 'lethean_vpm';

let apiInstance = new LetheanVpm.DefaultApi();
apiInstance.cacheStats((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

```javascript
import LetheanVpm from 'lethean_vpm';

let apiInstance = new LetheanVpm.DefaultApi();
apiInstance.sigVerify((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

