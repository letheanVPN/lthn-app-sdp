# openapi.model.ServiceEntity

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the service | 
**name** | **String** | Name of the service | 
**type** | **String** | Type of the service | 
**cost** | **String** | Per minute Cost of the service | 
**firstPrePaidMinutes** | **num** | Amount of pre-paid minutes for first payment | [optional] 
**firstVerificationsNeeded** | **num** | Number of verifications needed for first payment | [optional] 
**subsequentPrePaidMinutes** | **num** | Amount of pre-paid minutes for subsequent payments | [optional] 
**subsequentVerificationsNeeded** | **num** | Number of verifications needed for subsequent payments | [optional] 
**allowRefunds** | **bool** | Whether or not refunds are allowed | [optional] 
**downloadSpeed** | **num** | Service download speed in Mbits | 
**uploadSpeed** | **num** | Service upload speed in Mbits | 
**proxy** | [**List<ProxySettingsEntity>**](ProxySettingsEntity.md) | array containing Proxy related settings. only available if service is of type proxy, null otherwise | [optional] [default to const []]
**vpn** | [**List<VpnSettingsEntity>**](VpnSettingsEntity.md) | array containing VPN related settings. only available if service is of type vpn, null otherwise | [optional] [default to const []]
**validity** | [**TimeRangeEntity**](TimeRangeEntity.md) |  | [optional] 
**disable** | **bool** | disable or not the service | 
**certificates** | [**List<CertificatesEntity>**](CertificatesEntity.md) | inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level. | [optional] [default to const []]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


