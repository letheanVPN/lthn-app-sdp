# LetheanVpm::VpnSettingsEntity

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **endpoint** | **String** | IP Addresses of endpoints for VPN service only |  |
| **port** | **String** | Port these settings apply to |  |
| **parameters** | **String** | mtu size parameter for vpn service only |  |
| **terms** | **String** | Terms for the service |  |
| **policy** | **Array&lt;String&gt;** | a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server |  |

## Example

```ruby
require 'lethean_vpm'

instance = LetheanVpm::VpnSettingsEntity.new(
  endpoint: null,
  port: null,
  parameters: null,
  terms: null,
  policy: null
)
```

