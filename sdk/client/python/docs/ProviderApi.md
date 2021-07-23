# openapi_client.ProviderApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**find_all**](ProviderApi.md#find_all) | **GET** /v1/provider/search | 


# **find_all**
> list[ServiceEntity] find_all()



### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://dvpm.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dvpm.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProviderApi(api_client)
    
    try:
        api_response = api_instance.find_all()
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling ProviderApi->find_all: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[ServiceEntity]**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

