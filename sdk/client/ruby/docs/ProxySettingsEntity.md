# OpenapiClient::ProxySettingsEntity

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **endpoint** | **String** | IP Address of endpoints for Proxy service only |  |
| **port** | **String** | Port available on endpoint |  |
| **terms** | **String** | Terms for the service |  |
| **policy** | **Array&lt;String&gt;** | a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server |  |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ProxySettingsEntity.new(
  endpoint: null,
  port: null,
  terms: null,
  policy: null
)
```

