-module(openapi_provider_api).

-export([find_all/1, find_all/2]).

-define(BASE_URL, <<"">>).

%% @doc 
%% 
-spec find_all(ctx:ctx()) -> {ok, [openapi_service_entity:openapi_service_entity()], openapi_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), openapi_utils:response_info()}.
find_all(Ctx) ->
    find_all(Ctx, #{}).

-spec find_all(ctx:ctx(), maps:map()) -> {ok, [openapi_service_entity:openapi_service_entity()], openapi_utils:response_info()} | {ok, hackney:client_ref()} | {error, term(), openapi_utils:response_info()}.
find_all(Ctx, Optional) ->
    _OptionalParams = maps:get(params, Optional, #{}),
    Cfg = maps:get(cfg, Optional, application:get_env(kuberl, config, #{})),

    Method = get,
    Path = [<<"/v1/provider/search">>],
    QS = [],
    Headers = [],
    Body1 = [],
    ContentTypeHeader = openapi_utils:select_header_content_type([]),
    Opts = maps:get(hackney_opts, Optional, []),

    openapi_utils:request(Ctx, Method, [?BASE_URL, Path], QS, ContentTypeHeader++Headers, Body1, Opts, Cfg).


