# VpnSettingsEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Endpoint** | **string** | IP Addresses of endpoints for VPN service only | 
**Port** | **string** | Port these settings apply to | 
**Parameters** | **string** | mtu size parameter for vpn service only | 
**Terms** | **string** | Terms for the service | 
**Policy** | **[]string** | a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server | [default to []]

## Methods

### NewVpnSettingsEntity

`func NewVpnSettingsEntity(endpoint string, port string, parameters string, terms string, policy []string, ) *VpnSettingsEntity`

NewVpnSettingsEntity instantiates a new VpnSettingsEntity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVpnSettingsEntityWithDefaults

`func NewVpnSettingsEntityWithDefaults() *VpnSettingsEntity`

NewVpnSettingsEntityWithDefaults instantiates a new VpnSettingsEntity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndpoint

`func (o *VpnSettingsEntity) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *VpnSettingsEntity) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *VpnSettingsEntity) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.


### GetPort

`func (o *VpnSettingsEntity) GetPort() string`

GetPort returns the Port field if non-nil, zero value otherwise.

### GetPortOk

`func (o *VpnSettingsEntity) GetPortOk() (*string, bool)`

GetPortOk returns a tuple with the Port field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPort

`func (o *VpnSettingsEntity) SetPort(v string)`

SetPort sets Port field to given value.


### GetParameters

`func (o *VpnSettingsEntity) GetParameters() string`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *VpnSettingsEntity) GetParametersOk() (*string, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *VpnSettingsEntity) SetParameters(v string)`

SetParameters sets Parameters field to given value.


### GetTerms

`func (o *VpnSettingsEntity) GetTerms() string`

GetTerms returns the Terms field if non-nil, zero value otherwise.

### GetTermsOk

`func (o *VpnSettingsEntity) GetTermsOk() (*string, bool)`

GetTermsOk returns a tuple with the Terms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerms

`func (o *VpnSettingsEntity) SetTerms(v string)`

SetTerms sets Terms field to given value.


### GetPolicy

`func (o *VpnSettingsEntity) GetPolicy() []string`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *VpnSettingsEntity) GetPolicyOk() (*[]string, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *VpnSettingsEntity) SetPolicy(v []string)`

SetPolicy sets Policy field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


