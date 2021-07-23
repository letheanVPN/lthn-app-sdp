# LetheanVpm::ServiceEntity

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | ID of the service | [optional] |
| **name** | **String** | Name of the service |  |
| **type** | **String** | Type of the service |  |
| **cost** | **String** | Per minute Cost of the service |  |
| **first_pre_paid_minutes** | **Float** | Amount of pre-paid minutes for first payment | [optional] |
| **first_verifications_needed** | **Float** | Number of verifications needed for first payment | [optional] |
| **subsequent_pre_paid_minutes** | **Float** | Amount of pre-paid minutes for subsequent payments | [optional] |
| **subsequent_verifications_needed** | **Float** | Number of verifications needed for subsequent payments | [optional] |
| **allow_refunds** | **Boolean** | Whether or not refunds are allowed | [optional] |
| **download_speed** | **Float** | Service download speed in Mbits |  |
| **upload_speed** | **Float** | Service upload speed in Mbits |  |
| **proxy** | [**Array&lt;ProxySettingsEntity&gt;**](ProxySettingsEntity.md) | array containing Proxy related settings. only available if service is of type proxy, null otherwise | [optional] |
| **vpn** | [**Array&lt;VpnSettingsEntity&gt;**](VpnSettingsEntity.md) | array containing VPN related settings. only available if service is of type vpn, null otherwise | [optional] |
| **validity** | [**TimeRangeEntity**](TimeRangeEntity.md) |  | [optional] |
| **disable** | **Boolean** | disable or not the service |  |
| **certificates** | [**Array&lt;CertificatesEntity&gt;**](CertificatesEntity.md) | inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level. | [optional] |

## Example

```ruby
require 'lethean_vpm'

instance = LetheanVpm::ServiceEntity.new(
  id: null,
  name: null,
  type: null,
  cost: null,
  first_pre_paid_minutes: null,
  first_verifications_needed: null,
  subsequent_pre_paid_minutes: null,
  subsequent_verifications_needed: null,
  allow_refunds: null,
  download_speed: null,
  upload_speed: null,
  proxy: null,
  vpn: null,
  validity: null,
  disable: null,
  certificates: null
)
```

