# PSOpenAPITools.PSOpenAPITools/Api.ProviderApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Find-All**](ProviderApi.md#Find-All) | **GET** /v1/provider/search | 


<a name="Find-All"></a>
# **Find-All**
> ServiceEntity[] Find-All<br>



### Example
```powershell

try {
    $Result = Find-All
} catch {
    Write-Host ("Exception occured when calling Find-All: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServiceEntity[]**](ServiceEntity.md) (PSCustomObject)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

