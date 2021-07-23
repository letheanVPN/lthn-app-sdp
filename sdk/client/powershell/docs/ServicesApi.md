# PSOpenAPITools.lethean_vpm.ServicesApi

All URIs are relative to *https://dvpm.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-**](ServicesApi.md#New-) | **POST** /v1/service/add | 
[**Find-One**](ServicesApi.md#Find-One) | **GET** /v1/service/search/{client} | 
[**Invoke-List**](ServicesApi.md#Invoke-List) | **GET** /v1/service/search | 


<a name="New-"></a>
# **New-**
> ServiceEntity New-<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-ServiceEntity] <PSCustomObject><br>



### Example
```powershell
$ProxySettingsEntity = Initialize-ProxySettingsEntity -Endpoint "MyEndpoint" -Port "MyPort" -Terms "MyTerms" -Policy "MyPolicy"
$VpnSettingsEntity = Initialize-VpnSettingsEntity -Endpoint "MyEndpoint" -Port "MyPort" -Parameters "MyParameters" -Terms "MyTerms" -Policy "MyPolicy"
$TimeRangeEntity = Initialize-TimeRangeEntity -VarFrom (Get-Date) -To (Get-Date)
$CertificatesEntity = Initialize-CertificatesEntity -Id 0
$ServiceEntity = Initialize-ServiceEntity -Id "MyId" -Name "MyName" -Type "vpn" -Cost "MyCost" -FirstPrePaidMinutes 0 -FirstVerificationsNeeded 0 -SubsequentPrePaidMinutes 0 -SubsequentVerificationsNeeded 0 -AllowRefunds $false -DownloadSpeed 0 -UploadSpeed 0 -Proxy $ProxySettingsEntity -Vpn $VpnSettingsEntity -Validity $TimeRangeEntity -Disable $false -Certificates $CertificatesEntity # ServiceEntity | 

try {
    $Result = New- -ServiceEntity $ServiceEntity
} catch {
    Write-Host ("Exception occured when calling New-: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ServiceEntity** | [**ServiceEntity**](ServiceEntity.md)|  | 

### Return type

[**ServiceEntity**](ServiceEntity.md) (PSCustomObject)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Find-One"></a>
# **Find-One**
> String Find-One<br>
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-Client] <String><br>



### Example
```powershell
$Client = "MyClient" # String | 

try {
    $Result = Find-One -Client $Client
} catch {
    Write-Host ("Exception occured when calling Find-One: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Client** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="Invoke-List"></a>
# **Invoke-List**
> String Invoke-List<br>



### Example
```powershell

try {
    $Result = Invoke-List
} catch {
    Write-Host ("Exception occured when calling Invoke-List: {0}" -f ($_.ErrorDetails | ConvertFrom-Json))
    Write-Host ("Response headers: {0}" -f ($_.Exception.Response.Headers | ConvertTo-Json))
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

