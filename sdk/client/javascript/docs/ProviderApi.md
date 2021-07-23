# LetheanVpm.ProviderApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAll**](ProviderApi.md#findAll) | **GET** /v1/provider/search | 



## findAll

> [ServiceEntity] findAll()



### Example

```javascript
import LetheanVpm from 'lethean_vpm';

let apiInstance = new LetheanVpm.ProviderApi();
apiInstance.findAll((error, data, response) => {
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

[**[ServiceEntity]**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

