# ProxySettingsEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Endpoint** | **string** | IP Address of endpoints for Proxy service only | 
**Port** | **string** | Port available on endpoint | 
**Terms** | **string** | Terms for the service | 
**Policy** | **[]string** | a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server | 

## Methods

### NewProxySettingsEntity

`func NewProxySettingsEntity(endpoint string, port string, terms string, policy []string, ) *ProxySettingsEntity`

NewProxySettingsEntity instantiates a new ProxySettingsEntity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProxySettingsEntityWithDefaults

`func NewProxySettingsEntityWithDefaults() *ProxySettingsEntity`

NewProxySettingsEntityWithDefaults instantiates a new ProxySettingsEntity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndpoint

`func (o *ProxySettingsEntity) GetEndpoint() string`

GetEndpoint returns the Endpoint field if non-nil, zero value otherwise.

### GetEndpointOk

`func (o *ProxySettingsEntity) GetEndpointOk() (*string, bool)`

GetEndpointOk returns a tuple with the Endpoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpoint

`func (o *ProxySettingsEntity) SetEndpoint(v string)`

SetEndpoint sets Endpoint field to given value.


### GetPort

`func (o *ProxySettingsEntity) GetPort() string`

GetPort returns the Port field if non-nil, zero value otherwise.

### GetPortOk

`func (o *ProxySettingsEntity) GetPortOk() (*string, bool)`

GetPortOk returns a tuple with the Port field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPort

`func (o *ProxySettingsEntity) SetPort(v string)`

SetPort sets Port field to given value.


### GetTerms

`func (o *ProxySettingsEntity) GetTerms() string`

GetTerms returns the Terms field if non-nil, zero value otherwise.

### GetTermsOk

`func (o *ProxySettingsEntity) GetTermsOk() (*string, bool)`

GetTermsOk returns a tuple with the Terms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerms

`func (o *ProxySettingsEntity) SetTerms(v string)`

SetTerms sets Terms field to given value.


### GetPolicy

`func (o *ProxySettingsEntity) GetPolicy() []string`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *ProxySettingsEntity) GetPolicyOk() (*[]string, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *ProxySettingsEntity) SetPolicy(v []string)`

SetPolicy sets Policy field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


