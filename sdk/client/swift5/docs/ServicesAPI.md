# ServicesAPI

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](ServicesAPI.md#create) | **POST** /v1/service/add | 
[**findOne**](ServicesAPI.md#findone) | **GET** /v1/service/search/{client} | 


# **create**
```swift
    open class func create(serviceEntity: ServiceEntity, completion: @escaping (_ data: ServiceEntity?, _ error: Error?) -> Void)
```



### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let serviceEntity = ServiceEntity(id: "id_example", name: "name_example", type: "type_example", cost: "cost_example", firstPrePaidMinutes: 123, firstVerificationsNeeded: 123, subsequentPrePaidMinutes: 123, subsequentVerificationsNeeded: 123, allowRefunds: false, downloadSpeed: 123, uploadSpeed: 123, proxy: [ProxySettingsEntity(endpoint: "endpoint_example", port: "port_example", terms: "terms_example", policy: ["policy_example"])], vpn: [VpnSettingsEntity(endpoint: "endpoint_example", port: "port_example", parameters: "parameters_example", terms: "terms_example", policy: ["policy_example"])], validity: timeRangeEntity(from: Date(), to: Date()), disable: false, certificates: [CertificatesEntity(id: 123)]) // ServiceEntity | 

ServicesAPI.create(serviceEntity: serviceEntity) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceEntity** | [**ServiceEntity**](ServiceEntity.md) |  | 

### Return type

[**ServiceEntity**](ServiceEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findOne**
```swift
    open class func findOne(client: String, completion: @escaping (_ data: String?, _ error: Error?) -> Void)
```



### Example 
```swift
// The following code samples are still beta. For any issue, please report via http://github.com/OpenAPITools/openapi-generator/issues/new
import OpenAPIClient

let client = "client_example" // String | 

ServicesAPI.findOne(client: client) { (response, error) in
    guard error == nil else {
        print(error)
        return
    }

    if (response) {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | **String** |  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

