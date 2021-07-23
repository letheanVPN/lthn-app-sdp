# ServiceEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the service | [optional] 
**Name** | **string** | Name of the service | 
**Type** | **string** | Type of the service | 
**Cost** | **string** | Per minute Cost of the service | 
**FirstPrePaidMinutes** | Pointer to **float32** | Amount of pre-paid minutes for first payment | [optional] 
**FirstVerificationsNeeded** | Pointer to **float32** | Number of verifications needed for first payment | [optional] 
**SubsequentPrePaidMinutes** | Pointer to **float32** | Amount of pre-paid minutes for subsequent payments | [optional] 
**SubsequentVerificationsNeeded** | Pointer to **float32** | Number of verifications needed for subsequent payments | [optional] 
**AllowRefunds** | Pointer to **bool** | Whether or not refunds are allowed | [optional] 
**DownloadSpeed** | **float32** | Service download speed in Mbits | 
**UploadSpeed** | **float32** | Service upload speed in Mbits | 
**Proxy** | Pointer to [**[]ProxySettingsEntity**](ProxySettingsEntity.md) | array containing Proxy related settings. only available if service is of type proxy, null otherwise | [optional] 
**Vpn** | Pointer to [**[]VpnSettingsEntity**](VpnSettingsEntity.md) | array containing VPN related settings. only available if service is of type vpn, null otherwise | [optional] 
**Validity** | Pointer to [**TimeRangeEntity**](TimeRangeEntity.md) |  | [optional] 
**Disable** | **bool** | disable or not the service | 
**Certificates** | Pointer to [**[]CertificatesEntity**](CertificatesEntity.md) | inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level. | [optional] 

## Methods

### NewServiceEntity

`func NewServiceEntity(name string, type_ string, cost string, downloadSpeed float32, uploadSpeed float32, disable bool, ) *ServiceEntity`

NewServiceEntity instantiates a new ServiceEntity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceEntityWithDefaults

`func NewServiceEntityWithDefaults() *ServiceEntity`

NewServiceEntityWithDefaults instantiates a new ServiceEntity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ServiceEntity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ServiceEntity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ServiceEntity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ServiceEntity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ServiceEntity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServiceEntity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServiceEntity) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *ServiceEntity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ServiceEntity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ServiceEntity) SetType(v string)`

SetType sets Type field to given value.


### GetCost

`func (o *ServiceEntity) GetCost() string`

GetCost returns the Cost field if non-nil, zero value otherwise.

### GetCostOk

`func (o *ServiceEntity) GetCostOk() (*string, bool)`

GetCostOk returns a tuple with the Cost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCost

`func (o *ServiceEntity) SetCost(v string)`

SetCost sets Cost field to given value.


### GetFirstPrePaidMinutes

`func (o *ServiceEntity) GetFirstPrePaidMinutes() float32`

GetFirstPrePaidMinutes returns the FirstPrePaidMinutes field if non-nil, zero value otherwise.

### GetFirstPrePaidMinutesOk

`func (o *ServiceEntity) GetFirstPrePaidMinutesOk() (*float32, bool)`

GetFirstPrePaidMinutesOk returns a tuple with the FirstPrePaidMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstPrePaidMinutes

`func (o *ServiceEntity) SetFirstPrePaidMinutes(v float32)`

SetFirstPrePaidMinutes sets FirstPrePaidMinutes field to given value.

### HasFirstPrePaidMinutes

`func (o *ServiceEntity) HasFirstPrePaidMinutes() bool`

HasFirstPrePaidMinutes returns a boolean if a field has been set.

### GetFirstVerificationsNeeded

`func (o *ServiceEntity) GetFirstVerificationsNeeded() float32`

GetFirstVerificationsNeeded returns the FirstVerificationsNeeded field if non-nil, zero value otherwise.

### GetFirstVerificationsNeededOk

`func (o *ServiceEntity) GetFirstVerificationsNeededOk() (*float32, bool)`

GetFirstVerificationsNeededOk returns a tuple with the FirstVerificationsNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstVerificationsNeeded

`func (o *ServiceEntity) SetFirstVerificationsNeeded(v float32)`

SetFirstVerificationsNeeded sets FirstVerificationsNeeded field to given value.

### HasFirstVerificationsNeeded

`func (o *ServiceEntity) HasFirstVerificationsNeeded() bool`

HasFirstVerificationsNeeded returns a boolean if a field has been set.

### GetSubsequentPrePaidMinutes

`func (o *ServiceEntity) GetSubsequentPrePaidMinutes() float32`

GetSubsequentPrePaidMinutes returns the SubsequentPrePaidMinutes field if non-nil, zero value otherwise.

### GetSubsequentPrePaidMinutesOk

`func (o *ServiceEntity) GetSubsequentPrePaidMinutesOk() (*float32, bool)`

GetSubsequentPrePaidMinutesOk returns a tuple with the SubsequentPrePaidMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubsequentPrePaidMinutes

`func (o *ServiceEntity) SetSubsequentPrePaidMinutes(v float32)`

SetSubsequentPrePaidMinutes sets SubsequentPrePaidMinutes field to given value.

### HasSubsequentPrePaidMinutes

`func (o *ServiceEntity) HasSubsequentPrePaidMinutes() bool`

HasSubsequentPrePaidMinutes returns a boolean if a field has been set.

### GetSubsequentVerificationsNeeded

`func (o *ServiceEntity) GetSubsequentVerificationsNeeded() float32`

GetSubsequentVerificationsNeeded returns the SubsequentVerificationsNeeded field if non-nil, zero value otherwise.

### GetSubsequentVerificationsNeededOk

`func (o *ServiceEntity) GetSubsequentVerificationsNeededOk() (*float32, bool)`

GetSubsequentVerificationsNeededOk returns a tuple with the SubsequentVerificationsNeeded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubsequentVerificationsNeeded

`func (o *ServiceEntity) SetSubsequentVerificationsNeeded(v float32)`

SetSubsequentVerificationsNeeded sets SubsequentVerificationsNeeded field to given value.

### HasSubsequentVerificationsNeeded

`func (o *ServiceEntity) HasSubsequentVerificationsNeeded() bool`

HasSubsequentVerificationsNeeded returns a boolean if a field has been set.

### GetAllowRefunds

`func (o *ServiceEntity) GetAllowRefunds() bool`

GetAllowRefunds returns the AllowRefunds field if non-nil, zero value otherwise.

### GetAllowRefundsOk

`func (o *ServiceEntity) GetAllowRefundsOk() (*bool, bool)`

GetAllowRefundsOk returns a tuple with the AllowRefunds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowRefunds

`func (o *ServiceEntity) SetAllowRefunds(v bool)`

SetAllowRefunds sets AllowRefunds field to given value.

### HasAllowRefunds

`func (o *ServiceEntity) HasAllowRefunds() bool`

HasAllowRefunds returns a boolean if a field has been set.

### GetDownloadSpeed

`func (o *ServiceEntity) GetDownloadSpeed() float32`

GetDownloadSpeed returns the DownloadSpeed field if non-nil, zero value otherwise.

### GetDownloadSpeedOk

`func (o *ServiceEntity) GetDownloadSpeedOk() (*float32, bool)`

GetDownloadSpeedOk returns a tuple with the DownloadSpeed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDownloadSpeed

`func (o *ServiceEntity) SetDownloadSpeed(v float32)`

SetDownloadSpeed sets DownloadSpeed field to given value.


### GetUploadSpeed

`func (o *ServiceEntity) GetUploadSpeed() float32`

GetUploadSpeed returns the UploadSpeed field if non-nil, zero value otherwise.

### GetUploadSpeedOk

`func (o *ServiceEntity) GetUploadSpeedOk() (*float32, bool)`

GetUploadSpeedOk returns a tuple with the UploadSpeed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUploadSpeed

`func (o *ServiceEntity) SetUploadSpeed(v float32)`

SetUploadSpeed sets UploadSpeed field to given value.


### GetProxy

`func (o *ServiceEntity) GetProxy() []ProxySettingsEntity`

GetProxy returns the Proxy field if non-nil, zero value otherwise.

### GetProxyOk

`func (o *ServiceEntity) GetProxyOk() (*[]ProxySettingsEntity, bool)`

GetProxyOk returns a tuple with the Proxy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProxy

`func (o *ServiceEntity) SetProxy(v []ProxySettingsEntity)`

SetProxy sets Proxy field to given value.

### HasProxy

`func (o *ServiceEntity) HasProxy() bool`

HasProxy returns a boolean if a field has been set.

### GetVpn

`func (o *ServiceEntity) GetVpn() []VpnSettingsEntity`

GetVpn returns the Vpn field if non-nil, zero value otherwise.

### GetVpnOk

`func (o *ServiceEntity) GetVpnOk() (*[]VpnSettingsEntity, bool)`

GetVpnOk returns a tuple with the Vpn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVpn

`func (o *ServiceEntity) SetVpn(v []VpnSettingsEntity)`

SetVpn sets Vpn field to given value.

### HasVpn

`func (o *ServiceEntity) HasVpn() bool`

HasVpn returns a boolean if a field has been set.

### GetValidity

`func (o *ServiceEntity) GetValidity() TimeRangeEntity`

GetValidity returns the Validity field if non-nil, zero value otherwise.

### GetValidityOk

`func (o *ServiceEntity) GetValidityOk() (*TimeRangeEntity, bool)`

GetValidityOk returns a tuple with the Validity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidity

`func (o *ServiceEntity) SetValidity(v TimeRangeEntity)`

SetValidity sets Validity field to given value.

### HasValidity

`func (o *ServiceEntity) HasValidity() bool`

HasValidity returns a boolean if a field has been set.

### GetDisable

`func (o *ServiceEntity) GetDisable() bool`

GetDisable returns the Disable field if non-nil, zero value otherwise.

### GetDisableOk

`func (o *ServiceEntity) GetDisableOk() (*bool, bool)`

GetDisableOk returns a tuple with the Disable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisable

`func (o *ServiceEntity) SetDisable(v bool)`

SetDisable sets Disable field to given value.


### GetCertificates

`func (o *ServiceEntity) GetCertificates() []CertificatesEntity`

GetCertificates returns the Certificates field if non-nil, zero value otherwise.

### GetCertificatesOk

`func (o *ServiceEntity) GetCertificatesOk() (*[]CertificatesEntity, bool)`

GetCertificatesOk returns a tuple with the Certificates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificates

`func (o *ServiceEntity) SetCertificates(v []CertificatesEntity)`

SetCertificates sets Certificates field to given value.

### HasCertificates

`func (o *ServiceEntity) HasCertificates() bool`

HasCertificates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


