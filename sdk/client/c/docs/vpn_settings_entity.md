# vpn_settings_entity_t

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **char \*** | IP Addresses of endpoints for VPN service only | 
**port** | **char \*** | Port these settings apply to | 
**parameters** | **char \*** | mtu size parameter for vpn service only | 
**terms** | **char \*** | Terms for the service | 
**policy** | **list_t \*** | a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


