# LetheanVpm::ProviderApi

All URIs are relative to *https://dvpm.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**find_all**](ProviderApi.md#find_all) | **GET** /v1/provider/search |  |


## find_all

> <Array<ServiceEntity>> find_all



### Examples

```ruby
require 'time'
require 'lethean_vpm'

api_instance = LetheanVpm::ProviderApi.new

begin
  
  result = api_instance.find_all
  p result
rescue LetheanVpm::ApiError => e
  puts "Error when calling ProviderApi->find_all: #{e}"
end
```

#### Using the find_all_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Array<ServiceEntity>>, Integer, Hash)> find_all_with_http_info

```ruby
begin
  
  data, status_code, headers = api_instance.find_all_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Array<ServiceEntity>>
rescue LetheanVpm::ApiError => e
  puts "Error when calling ProviderApi->find_all_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ServiceEntity&gt;**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

