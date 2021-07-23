-module(openapi_proxy_settings_entity).

-export([encode/1]).

-export_type([openapi_proxy_settings_entity/0]).

-type openapi_proxy_settings_entity() ::
    #{ 'endpoint' := binary(),
       'port' := binary(),
       'terms' := binary(),
       'policy' := list()
     }.

encode(#{ 'endpoint' := Endpoint,
          'port' := Port,
          'terms' := Terms,
          'policy' := Policy
        }) ->
    #{ 'endpoint' => Endpoint,
       'port' => Port,
       'terms' => Terms,
       'policy' => Policy
     }.
