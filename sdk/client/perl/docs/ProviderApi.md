# WWW::OpenAPIClient::ProviderApi

## Load the API package
```perl
use WWW::OpenAPIClient::Object::ProviderApi;
```

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_all**](ProviderApi.md#find_all) | **GET** /v1/provider/search | 


# **find_all**
> ARRAY[ServiceEntity] find_all()



### Example 
```perl
use Data::Dumper;
use WWW::OpenAPIClient::ProviderApi;
my $api_instance = WWW::OpenAPIClient::ProviderApi->new(
);


eval { 
    my $result = $api_instance->find_all();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling ProviderApi->find_all: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ARRAY[ServiceEntity]**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

