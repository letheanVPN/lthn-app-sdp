# LetheanVpm::DefaultApi

All URIs are relative to *https://dvpm.io*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**cache_stats**](DefaultApi.md#cache_stats) | **GET** /v1/cache/index |  |
| [**sig_verify**](DefaultApi.md#sig_verify) | **GET** /v1/signature/get |  |


## cache_stats

> cache_stats



### Examples

```ruby
require 'time'
require 'lethean_vpm'

api_instance = LetheanVpm::DefaultApi.new

begin
  
  api_instance.cache_stats
rescue LetheanVpm::ApiError => e
  puts "Error when calling DefaultApi->cache_stats: #{e}"
end
```

#### Using the cache_stats_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> cache_stats_with_http_info

```ruby
begin
  
  data, status_code, headers = api_instance.cache_stats_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue LetheanVpm::ApiError => e
  puts "Error when calling DefaultApi->cache_stats_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## sig_verify

> sig_verify



### Examples

```ruby
require 'time'
require 'lethean_vpm'

api_instance = LetheanVpm::DefaultApi.new

begin
  
  api_instance.sig_verify
rescue LetheanVpm::ApiError => e
  puts "Error when calling DefaultApi->sig_verify: #{e}"
end
```

#### Using the sig_verify_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> sig_verify_with_http_info

```ruby
begin
  
  data, status_code, headers = api_instance.sig_verify_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue LetheanVpm::ApiError => e
  puts "Error when calling DefaultApi->sig_verify_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

