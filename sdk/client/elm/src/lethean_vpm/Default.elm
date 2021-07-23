{-
   Lethean VPM
   Distributed Virtual Private Marketplace

   The version of the OpenAPI document: 1
   Contact: contact@lethean.io

   NOTE: This file is auto generated by the openapi-generator.
   https://github.com/openapitools/openapi-generator.git

   DO NOT EDIT THIS FILE MANUALLY.

   For more info on generating Elm code, see https://eriktim.github.io/openapi-elm/
-}


module Api.Request.Default exposing
    ( cacheStats
    , sigVerify
    )

import Api
import Api.Data
import Dict
import Http
import Json.Decode
import Json.Encode



cacheStats : Api.Request ()
cacheStats =
    Api.request
        "GET"
        "/v1/cache/index"
        []
        []
        []
        Nothing
        (Json.Decode.succeed ())



sigVerify : Api.Request ()
sigVerify =
    Api.request
        "GET"
        "/v1/signature/get"
        []
        []
        []
        Nothing
        (Json.Decode.succeed ())
