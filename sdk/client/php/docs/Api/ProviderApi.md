# OpenAPI\Client\ProviderApi

All URIs are relative to https://dvpm.io.

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAll()**](ProviderApi.md#findAll) | **GET** /v1/provider/search | 


## `findAll()`

```php
findAll(): \OpenAPI\Client\Model\ServiceEntity[]
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ProviderApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->findAll();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ProviderApi->findAll: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\OpenAPI\Client\Model\ServiceEntity[]**](../Model/ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
