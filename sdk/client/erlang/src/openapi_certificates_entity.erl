-module(openapi_certificates_entity).

-export([encode/1]).

-export_type([openapi_certificates_entity/0]).

-type openapi_certificates_entity() ::
    #{ 'id' := integer()
     }.

encode(#{ 'id' := Id
        }) ->
    #{ 'id' => Id
     }.
