# OpenapiClient::ServicesApi

All URIs are relative to *https://dvpm.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create**](ServicesApi.md#create) | **POST** /v1/service/add |  |
| [**find_one**](ServicesApi.md#find_one) | **GET** /v1/service/search/{client} |  |


## create

> <ServiceEntity> create(service_entity)



### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::ServicesApi.new
service_entity = OpenapiClient::ServiceEntity.new({id: 'id_example', name: 'name_example', type: 'vpn', cost: 'cost_example', download_speed: 3.56, upload_speed: 3.56, disable: false}) # ServiceEntity | 

begin
  
  result = api_instance.create(service_entity)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ServicesApi->create: #{e}"
end
```

#### Using the create_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ServiceEntity>, Integer, Hash)> create_with_http_info(service_entity)

```ruby
begin
  
  data, status_code, headers = api_instance.create_with_http_info(service_entity)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ServiceEntity>
rescue OpenapiClient::ApiError => e
  puts "Error when calling ServicesApi->create_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **service_entity** | [**ServiceEntity**](ServiceEntity.md) |  |  |

### Return type

[**ServiceEntity**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## find_one

> String find_one(client)



### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::ServicesApi.new
client = 'client_example' # String | 

begin
  
  result = api_instance.find_one(client)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ServicesApi->find_one: #{e}"
end
```

#### Using the find_one_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(String, Integer, Hash)> find_one_with_http_info(client)

```ruby
begin
  
  data, status_code, headers = api_instance.find_one_with_http_info(client)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => String
rescue OpenapiClient::ApiError => e
  puts "Error when calling ServicesApi->find_one_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **client** | **String** |  |  |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
