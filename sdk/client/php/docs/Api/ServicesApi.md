# OpenAPI\Client\ServicesApi

All URIs are relative to https://dvpm.io.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create()**](ServicesApi.md#create) | **POST** /v1/service/add | 
[**findOne()**](ServicesApi.md#findOne) | **GET** /v1/service/search/{client} | 


## `create()`

```php
create($service_entity): \OpenAPI\Client\Model\ServiceEntity
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServicesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$service_entity = new \OpenAPI\Client\Model\ServiceEntity(); // \OpenAPI\Client\Model\ServiceEntity

try {
    $result = $apiInstance->create($service_entity);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServicesApi->create: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_entity** | [**\OpenAPI\Client\Model\ServiceEntity**](../Model/ServiceEntity.md)|  |

### Return type

[**\OpenAPI\Client\Model\ServiceEntity**](../Model/ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `findOne()`

```php
findOne($client): string
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new OpenAPI\Client\Api\ServicesApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$client = 'client_example'; // string

try {
    $result = $apiInstance->findOne($client);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ServicesApi->findOne: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **string**|  |

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
