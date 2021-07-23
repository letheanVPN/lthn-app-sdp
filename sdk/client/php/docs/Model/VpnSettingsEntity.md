# # VpnSettingsEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **string** | IP Addresses of endpoints for VPN service only |
**port** | **string** | Port these settings apply to |
**parameters** | **string** | mtu size parameter for vpn service only |
**terms** | **string** | Terms for the service |
**policy** | **string[]** | a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
