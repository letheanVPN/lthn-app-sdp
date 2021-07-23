/*
 * Lethean VPM
 *
 * Distributed Virtual Private Marketplace
 *
 * API version: 1
 * Contact: contact@lethean.io
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package lethean-vpm

import (
	"encoding/json"
	"time"
)

// TimeRangeEntity struct for TimeRangeEntity
type TimeRangeEntity struct {
	// YYYY-MM-DDT00:00:00Z
	From time.Time `json:"from"`
	// YYYY-MM-DDT00:00:00Z
	To time.Time `json:"to"`
}

// NewTimeRangeEntity instantiates a new TimeRangeEntity object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTimeRangeEntity(from time.Time, to time.Time) *TimeRangeEntity {
	this := TimeRangeEntity{}
	this.From = from
	this.To = to
	return &this
}

// NewTimeRangeEntityWithDefaults instantiates a new TimeRangeEntity object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTimeRangeEntityWithDefaults() *TimeRangeEntity {
	this := TimeRangeEntity{}
	return &this
}

// GetFrom returns the From field value
func (o *TimeRangeEntity) GetFrom() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.From
}

// GetFromOk returns a tuple with the From field value
// and a boolean to check if the value has been set.
func (o *TimeRangeEntity) GetFromOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.From, true
}

// SetFrom sets field value
func (o *TimeRangeEntity) SetFrom(v time.Time) {
	o.From = v
}

// GetTo returns the To field value
func (o *TimeRangeEntity) GetTo() time.Time {
	if o == nil {
		var ret time.Time
		return ret
	}

	return o.To
}

// GetToOk returns a tuple with the To field value
// and a boolean to check if the value has been set.
func (o *TimeRangeEntity) GetToOk() (*time.Time, bool) {
	if o == nil  {
		return nil, false
	}
	return &o.To, true
}

// SetTo sets field value
func (o *TimeRangeEntity) SetTo(v time.Time) {
	o.To = v
}

func (o TimeRangeEntity) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["from"] = o.From
	}
	if true {
		toSerialize["to"] = o.To
	}
	return json.Marshal(toSerialize)
}

type NullableTimeRangeEntity struct {
	value *TimeRangeEntity
	isSet bool
}

func (v NullableTimeRangeEntity) Get() *TimeRangeEntity {
	return v.value
}

func (v *NullableTimeRangeEntity) Set(val *TimeRangeEntity) {
	v.value = val
	v.isSet = true
}

func (v NullableTimeRangeEntity) IsSet() bool {
	return v.isSet
}

func (v *NullableTimeRangeEntity) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTimeRangeEntity(val *TimeRangeEntity) *NullableTimeRangeEntity {
	return &NullableTimeRangeEntity{value: val, isSet: true}
}

func (v NullableTimeRangeEntity) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTimeRangeEntity) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


