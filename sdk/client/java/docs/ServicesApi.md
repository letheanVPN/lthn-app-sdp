# ServicesApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ServicesApi.md#create) | **POST** /v1/service/add | 
[**findOne**](ServicesApi.md#findOne) | **GET** /v1/service/search/{client} | 
[**list**](ServicesApi.md#list) | **GET** /v1/service/search | 


<a name="create"></a>
# **create**
> ServiceEntity create(serviceEntity)



### Example
```java
// Import classes:
import org.lthn.vpm.client.ApiClient;
import org.lthn.vpm.client.ApiException;
import org.lthn.vpm.client.Configuration;
import org.lthn.vpm.client.models.*;
import org.lthn.vpm.client.api.ServicesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://dvpm.io");

    ServicesApi apiInstance = new ServicesApi(defaultClient);
    ServiceEntity serviceEntity = new ServiceEntity(); // ServiceEntity | 
    try {
      ServiceEntity result = apiInstance.create(serviceEntity);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesApi#create");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceEntity** | [**ServiceEntity**](ServiceEntity.md)|  |

### Return type

[**ServiceEntity**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The record has been successfully created. |  -  |
**403** | Forbidden. |  -  |

<a name="findOne"></a>
# **findOne**
> String findOne(client)



### Example
```java
// Import classes:
import org.lthn.vpm.client.ApiClient;
import org.lthn.vpm.client.ApiException;
import org.lthn.vpm.client.Configuration;
import org.lthn.vpm.client.models.*;
import org.lthn.vpm.client.api.ServicesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://dvpm.io");

    ServicesApi apiInstance = new ServicesApi(defaultClient);
    String client = "client_example"; // String | 
    try {
      String result = apiInstance.findOne(client);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesApi#findOne");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String**|  |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

<a name="list"></a>
# **list**
> String list()



### Example
```java
// Import classes:
import org.lthn.vpm.client.ApiClient;
import org.lthn.vpm.client.ApiException;
import org.lthn.vpm.client.Configuration;
import org.lthn.vpm.client.models.*;
import org.lthn.vpm.client.api.ServicesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://dvpm.io");

    ServicesApi apiInstance = new ServicesApi(defaultClient);
    try {
      String result = apiInstance.list();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ServicesApi#list");
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

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**302** | Services list |  -  |

