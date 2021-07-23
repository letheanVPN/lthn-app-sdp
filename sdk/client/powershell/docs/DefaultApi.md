# PSOpenAPITools.PSOpenAPITools/Api.DefaultApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Invoke-CacheStats**](DefaultApi.md#Invoke-CacheStats) | **GET** /v1/cache/index | 
[**Invoke-SigVerify**](DefaultApi.md#Invoke-SigVerify) | **GET** /v1/signature/get | 


<a name="Invoke-CacheStats"></a>
# **Invoke-CacheStats**
> void Invoke-CacheStats<br>



### Example
```powershell

try {
    $Result = Invoke-CacheStats
} catch {
    Write-Host ("Exception occured when calling Invoke-CacheStats: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-SigVerify"></a>
# **Invoke-SigVerify**
> void Invoke-SigVerify<br>



### Example
```powershell

try {
    $Result = Invoke-SigVerify
} catch {
    Write-Host ("Exception occured when calling Invoke-SigVerify: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

