-module(openapi_time_range_entity).

-export([encode/1]).

-export_type([openapi_time_range_entity/0]).

-type openapi_time_range_entity() ::
    #{ 'from' := openapi_date_time:openapi_date_time(),
       'to' := openapi_date_time:openapi_date_time()
     }.

encode(#{ 'from' := From,
          'to' := To
        }) ->
    #{ 'from' => From,
       'to' => To
     }.
