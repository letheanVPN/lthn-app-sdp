# WWW::OpenAPIClient::Object::ProxySettingsEntity

## Load the model package
```perl
use WWW::OpenAPIClient::Object::ProxySettingsEntity;
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **string** | IP Address of endpoints for Proxy service only | 
**port** | **string** | Port available on endpoint | 
**terms** | **string** | Terms for the service | 
**policy** | **ARRAY[string]** | a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

