# TimeRangeEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**From** | **time.Time** | YYYY-MM-DDT00:00:00Z | 
**To** | **time.Time** | YYYY-MM-DDT00:00:00Z | 

## Methods

### NewTimeRangeEntity

`func NewTimeRangeEntity(from time.Time, to time.Time, ) *TimeRangeEntity`

NewTimeRangeEntity instantiates a new TimeRangeEntity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTimeRangeEntityWithDefaults

`func NewTimeRangeEntityWithDefaults() *TimeRangeEntity`

NewTimeRangeEntityWithDefaults instantiates a new TimeRangeEntity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFrom

`func (o *TimeRangeEntity) GetFrom() time.Time`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *TimeRangeEntity) GetFromOk() (*time.Time, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *TimeRangeEntity) SetFrom(v time.Time)`

SetFrom sets From field to given value.


### GetTo

`func (o *TimeRangeEntity) GetTo() time.Time`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *TimeRangeEntity) GetToOk() (*time.Time, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *TimeRangeEntity) SetTo(v time.Time)`

SetTo sets To field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


