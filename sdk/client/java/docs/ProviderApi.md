# ProviderApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAll**](ProviderApi.md#findAll) | **GET** /v1/provider/search | 


<a name="findAll"></a>
# **findAll**
> List&lt;ServiceEntity&gt; findAll()



### Example
```java
// Import classes:
import org.lthn.vpm.client.ApiClient;
import org.lthn.vpm.client.ApiException;
import org.lthn.vpm.client.Configuration;
import org.lthn.vpm.client.models.*;
import org.lthn.vpm.client.api.ProviderApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://dvpm.io");

    ProviderApi apiInstance = new ProviderApi(defaultClient);
    try {
      List<ServiceEntity> result = apiInstance.findAll();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProviderApi#findAll");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;ServiceEntity&gt;**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

