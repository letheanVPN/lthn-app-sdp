# WWW::OpenAPIClient::ServicesApi

## Load the API package
```perl
use WWW::OpenAPIClient::Object::ServicesApi;
```

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ServicesApi.md#create) | **POST** /v1/service/add | 
[**find_one**](ServicesApi.md#find_one) | **GET** /v1/service/search/{client} | 


# **create**
> ServiceEntity create(service_entity => $service_entity)



### Example 
```perl
use Data::Dumper;
use WWW::OpenAPIClient::ServicesApi;
my $api_instance = WWW::OpenAPIClient::ServicesApi->new(
);

my $service_entity = WWW::OpenAPIClient::Object::ServiceEntity->new(); # ServiceEntity | 

eval { 
    my $result = $api_instance->create(service_entity => $service_entity);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ServicesApi->create: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_entity** | [**ServiceEntity**](ServiceEntity.md)|  | 

### Return type

[**ServiceEntity**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **find_one**
> string find_one(client => $client)



### Example 
```perl
use Data::Dumper;
use WWW::OpenAPIClient::ServicesApi;
my $api_instance = WWW::OpenAPIClient::ServicesApi->new(
);

my $client = "client_example"; # string | 

eval { 
    my $result = $api_instance->find_one(client => $client);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ServicesApi->find_one: $@\n";
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
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

