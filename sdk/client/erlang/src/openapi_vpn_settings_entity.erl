-module(openapi_vpn_settings_entity).

-export([encode/1]).

-export_type([openapi_vpn_settings_entity/0]).

-type openapi_vpn_settings_entity() ::
    #{ 'endpoint' := binary(),
       'port' := binary(),
       'parameters' := binary(),
       'terms' := binary(),
       'policy' := list()
     }.

encode(#{ 'endpoint' := Endpoint,
          'port' := Port,
          'parameters' := Parameters,
          'terms' := Terms,
          'policy' := Policy
        }) ->
    #{ 'endpoint' => Endpoint,
       'port' => Port,
       'parameters' => Parameters,
       'terms' => Terms,
       'policy' => Policy
     }.
