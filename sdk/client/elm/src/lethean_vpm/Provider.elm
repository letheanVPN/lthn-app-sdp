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


module Api.Request.Provider exposing
    ( findAll
    )

import Api
import Api.Data
import Dict
import Http
import Json.Decode
import Json.Encode



findAll : Api.Request (List Api.Data.ServiceEntity)
findAll =
    Api.request
        "GET"
        "/v1/provider/search"
        []
        []
        []
        Nothing
        (Json.Decode.list Api.Data.serviceEntityDecoder)