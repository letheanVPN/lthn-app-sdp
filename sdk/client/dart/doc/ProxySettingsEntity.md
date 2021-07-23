# openapi.model.ProxySettingsEntity

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **String** | IP Address of endpoints for Proxy service only | 
**port** | **String** | Port available on endpoint | 
**terms** | **String** | Terms for the service | 
**policy** | **List<String>** | a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server | [default to const []]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

