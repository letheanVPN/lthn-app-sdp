-module(openapi_services_api).

-export([create/2, create/3,
         find_one/2, find_one/3]).

-define(BASE_URL, <<"">>).

%% @doc 
%% 
-spec create(ctx:ctx(), openapi_service_entity:openapi_service_entity()) -> {ok, openapi_service_entity:openapi_service_entity(), openapi_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), openapi_utils:response_info()}.
create(Ctx, OpenapiServiceEntity) ->
    create(Ctx, OpenapiServiceEntity, #{}).

-spec create(ctx:ctx(), openapi_service_entity:openapi_service_entity(), maps:map()) -> {ok, openapi_service_entity:openapi_service_entity(), openapi_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), openapi_utils:response_info()}.
create(Ctx, OpenapiServiceEntity, Optional) ->
    _OptionalParams = maps:get(params, Optional, #{}),
    Cfg = maps:get(cfg, Optional, application:get_env(kuberl, config, #{})),

    Method = post,
    Path = [<<"/v1/service/add">>],
    QS = [],
    Headers = [],
    Body1 = OpenapiServiceEntity,
    ContentTypeHeader = openapi_utils:select_header_content_type([<<"application/json">>]),
    Opts = maps:get(hackney_opts, Optional, []),

    openapi_utils:request(Ctx, Method, [?BASE_URL, Path], QS, ContentTypeHeader++Headers, Body1, Opts, Cfg).

%% @doc 
%% 
-spec find_one(ctx:ctx(), binary()) -> {ok, binary(), openapi_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), openapi_utils:response_info()}.
find_one(Ctx, Client) ->
    find_one(Ctx, Client, #{}).

-spec find_one(ctx:ctx(), binary(), maps:map()) -> {ok, binary(), openapi_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), openapi_utils:response_info()}.
find_one(Ctx, Client, Optional) ->
    _OptionalParams = maps:get(params, Optional, #{}),
    Cfg = maps:get(cfg, Optional, application:get_env(kuberl, config, #{})),

    Method = get,
    Path = [<<"/v1/service/search/", Client, "">>],
    QS = [],
    Headers = [],
    Body1 = [],
    ContentTypeHeader = openapi_utils:select_header_content_type([]),
    Opts = maps:get(hackney_opts, Optional, []),

    openapi_utils:request(Ctx, Method, [?BASE_URL, Path], QS, ContentTypeHeader++Headers, Body1, Opts, Cfg).


