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


module Api.Data exposing
    ( CertificatesEntity
    , ProxySettingsEntity
    , ServiceEntity, ServiceEntityType(..), serviceEntityTypeVariants
    , TimeRangeEntity
    , VpnSettingsEntity
    , encodeCertificatesEntity
    , encodeProxySettingsEntity
    , encodeServiceEntity
    , encodeTimeRangeEntity
    , encodeVpnSettingsEntity
    , certificatesEntityDecoder
    , proxySettingsEntityDecoder
    , serviceEntityDecoder
    , timeRangeEntityDecoder
    , vpnSettingsEntityDecoder
    )

import Api
import Api.Time exposing (Posix)
import Dict
import Json.Decode
import Json.Encode


-- MODEL


type alias CertificatesEntity =
    { id : Float
    }


type alias ProxySettingsEntity =
    { endpoint : String
    , port_ : String
    , terms : String
    , policy : List (String)
    }


type alias ServiceEntity =
    { id : Maybe String
    , name : String
    , type_ : ServiceEntityType
    , cost : String
    , firstPrePaidMinutes : Maybe Float
    , firstVerificationsNeeded : Maybe Float
    , subsequentPrePaidMinutes : Maybe Float
    , subsequentVerificationsNeeded : Maybe Float
    , allowRefunds : Maybe Bool
    , downloadSpeed : Float
    , uploadSpeed : Float
    , proxy : Maybe (List (ProxySettingsEntity))
    , vpn : Maybe (List (VpnSettingsEntity))
    , validity : Maybe TimeRangeEntity
    , disable : Bool
    , certificates : Maybe (List (CertificatesEntity))
    }


type ServiceEntityType
    = ServiceEntityTypeVpn
    | ServiceEntityTypeProxy


serviceEntityTypeVariants : List ServiceEntityType
serviceEntityTypeVariants =
    [ ServiceEntityTypeVpn
    , ServiceEntityTypeProxy
    ]


type alias TimeRangeEntity =
    { from : Posix
    , to : Posix
    }


type alias VpnSettingsEntity =
    { endpoint : String
    , port_ : String
    , parameters : String
    , terms : String
    , policy : List (String)
    }


-- ENCODER


encodeCertificatesEntity : CertificatesEntity -> Json.Encode.Value
encodeCertificatesEntity =
    encodeObject << encodeCertificatesEntityPairs


encodeCertificatesEntityWithTag : ( String, String ) -> CertificatesEntity -> Json.Encode.Value
encodeCertificatesEntityWithTag (tagField, tag) model =
    encodeObject (encodeCertificatesEntityPairs model ++ [ encode tagField Json.Encode.string tag ])


encodeCertificatesEntityPairs : CertificatesEntity -> List EncodedField
encodeCertificatesEntityPairs model =
    let
        pairs =
            [ encode "id" Json.Encode.float model.id
            ]
    in
    pairs


encodeProxySettingsEntity : ProxySettingsEntity -> Json.Encode.Value
encodeProxySettingsEntity =
    encodeObject << encodeProxySettingsEntityPairs


encodeProxySettingsEntityWithTag : ( String, String ) -> ProxySettingsEntity -> Json.Encode.Value
encodeProxySettingsEntityWithTag (tagField, tag) model =
    encodeObject (encodeProxySettingsEntityPairs model ++ [ encode tagField Json.Encode.string tag ])


encodeProxySettingsEntityPairs : ProxySettingsEntity -> List EncodedField
encodeProxySettingsEntityPairs model =
    let
        pairs =
            [ encode "endpoint" Json.Encode.string model.endpoint
            , encode "port" Json.Encode.string model.port_
            , encode "terms" Json.Encode.string model.terms
            , encode "policy" (Json.Encode.list Json.Encode.string) model.policy
            ]
    in
    pairs


encodeServiceEntity : ServiceEntity -> Json.Encode.Value
encodeServiceEntity =
    encodeObject << encodeServiceEntityPairs


encodeServiceEntityWithTag : ( String, String ) -> ServiceEntity -> Json.Encode.Value
encodeServiceEntityWithTag (tagField, tag) model =
    encodeObject (encodeServiceEntityPairs model ++ [ encode tagField Json.Encode.string tag ])


encodeServiceEntityPairs : ServiceEntity -> List EncodedField
encodeServiceEntityPairs model =
    let
        pairs =
            [ maybeEncode "id" Json.Encode.string model.id
            , encode "name" Json.Encode.string model.name
            , encode "type"  model.type_
            , encode "cost" Json.Encode.string model.cost
            , maybeEncode "firstPrePaidMinutes" Json.Encode.float model.firstPrePaidMinutes
            , maybeEncode "firstVerificationsNeeded" Json.Encode.float model.firstVerificationsNeeded
            , maybeEncode "subsequentPrePaidMinutes" Json.Encode.float model.subsequentPrePaidMinutes
            , maybeEncode "subsequentVerificationsNeeded" Json.Encode.float model.subsequentVerificationsNeeded
            , maybeEncode "allowRefunds" Json.Encode.bool model.allowRefunds
            , encode "downloadSpeed" Json.Encode.float model.downloadSpeed
            , encode "uploadSpeed" Json.Encode.float model.uploadSpeed
            , maybeEncode "proxy" (Json.Encode.list encodeProxySettingsEntity) model.proxy
            , maybeEncode "vpn" (Json.Encode.list encodeVpnSettingsEntity) model.vpn
            , maybeEncode "validity" encodeTimeRangeEntity model.validity
            , encode "disable" Json.Encode.bool model.disable
            , maybeEncode "certificates" (Json.Encode.list encodeCertificatesEntity) model.certificates
            ]
    in
    pairs

stringFromServiceEntityType : ServiceEntityType -> String
stringFromServiceEntityType model =
    case model of
        ServiceEntityTypeVpn ->
            "vpn"

        ServiceEntityTypeProxy ->
            "proxy"


encodeServiceEntityType : ServiceEntityType -> Json.Encode.Value
encodeServiceEntityType =
    Json.Encode.string << stringFromServiceEntityType



encodeTimeRangeEntity : TimeRangeEntity -> Json.Encode.Value
encodeTimeRangeEntity =
    encodeObject << encodeTimeRangeEntityPairs


encodeTimeRangeEntityWithTag : ( String, String ) -> TimeRangeEntity -> Json.Encode.Value
encodeTimeRangeEntityWithTag (tagField, tag) model =
    encodeObject (encodeTimeRangeEntityPairs model ++ [ encode tagField Json.Encode.string tag ])


encodeTimeRangeEntityPairs : TimeRangeEntity -> List EncodedField
encodeTimeRangeEntityPairs model =
    let
        pairs =
            [ encode "from" Api.Time.encodeDateTime model.from
            , encode "to" Api.Time.encodeDateTime model.to
            ]
    in
    pairs


encodeVpnSettingsEntity : VpnSettingsEntity -> Json.Encode.Value
encodeVpnSettingsEntity =
    encodeObject << encodeVpnSettingsEntityPairs


encodeVpnSettingsEntityWithTag : ( String, String ) -> VpnSettingsEntity -> Json.Encode.Value
encodeVpnSettingsEntityWithTag (tagField, tag) model =
    encodeObject (encodeVpnSettingsEntityPairs model ++ [ encode tagField Json.Encode.string tag ])


encodeVpnSettingsEntityPairs : VpnSettingsEntity -> List EncodedField
encodeVpnSettingsEntityPairs model =
    let
        pairs =
            [ encode "endpoint" Json.Encode.string model.endpoint
            , encode "port" Json.Encode.string model.port_
            , encode "parameters" Json.Encode.string model.parameters
            , encode "terms" Json.Encode.string model.terms
            , encode "policy" (Json.Encode.list Json.Encode.string) model.policy
            ]
    in
    pairs


-- DECODER


certificatesEntityDecoder : Json.Decode.Decoder CertificatesEntity
certificatesEntityDecoder =
    Json.Decode.succeed CertificatesEntity
        |> decode "id" Json.Decode.float 


proxySettingsEntityDecoder : Json.Decode.Decoder ProxySettingsEntity
proxySettingsEntityDecoder =
    Json.Decode.succeed ProxySettingsEntity
        |> decode "endpoint" Json.Decode.string 
        |> decode "port" Json.Decode.string 
        |> decode "terms" Json.Decode.string 
        |> decode "policy" (Json.Decode.list Json.Decode.string) 


serviceEntityDecoder : Json.Decode.Decoder ServiceEntity
serviceEntityDecoder =
    Json.Decode.succeed ServiceEntity
        |> maybeDecode "id" Json.Decode.string Nothing
        |> decode "name" Json.Decode.string 
        |> decode "type"  
        |> decode "cost" Json.Decode.string 
        |> maybeDecode "firstPrePaidMinutes" Json.Decode.float Nothing
        |> maybeDecode "firstVerificationsNeeded" Json.Decode.float Nothing
        |> maybeDecode "subsequentPrePaidMinutes" Json.Decode.float Nothing
        |> maybeDecode "subsequentVerificationsNeeded" Json.Decode.float Nothing
        |> maybeDecode "allowRefunds" Json.Decode.bool Nothing
        |> decode "downloadSpeed" Json.Decode.float 
        |> decode "uploadSpeed" Json.Decode.float 
        |> maybeDecode "proxy" (Json.Decode.list proxySettingsEntityDecoder) Nothing
        |> maybeDecode "vpn" (Json.Decode.list vpnSettingsEntityDecoder) Nothing
        |> maybeDecode "validity" timeRangeEntityDecoder Nothing
        |> decode "disable" Json.Decode.bool 
        |> maybeDecode "certificates" (Json.Decode.list certificatesEntityDecoder) Nothing


serviceEntityTypeDecoder : Json.Decode.Decoder ServiceEntityType
serviceEntityTypeDecoder =
    Json.Decode.string
        |> Json.Decode.andThen
            (\value ->
                case value of
                    "vpn" ->
                        Json.Decode.succeed ServiceEntityTypeVpn

                    "proxy" ->
                        Json.Decode.succeed ServiceEntityTypeProxy

                    other ->
                        Json.Decode.fail <| "Unknown type: " ++ other
            )



timeRangeEntityDecoder : Json.Decode.Decoder TimeRangeEntity
timeRangeEntityDecoder =
    Json.Decode.succeed TimeRangeEntity
        |> decode "from" Api.Time.dateTimeDecoder 
        |> decode "to" Api.Time.dateTimeDecoder 


vpnSettingsEntityDecoder : Json.Decode.Decoder VpnSettingsEntity
vpnSettingsEntityDecoder =
    Json.Decode.succeed VpnSettingsEntity
        |> decode "endpoint" Json.Decode.string 
        |> decode "port" Json.Decode.string 
        |> decode "parameters" Json.Decode.string 
        |> decode "terms" Json.Decode.string 
        |> decode "policy" (Json.Decode.list Json.Decode.string) 




-- HELPER


type alias EncodedField =
    Maybe ( String, Json.Encode.Value )


encodeObject : List EncodedField -> Json.Encode.Value
encodeObject =
    Json.Encode.object << List.filterMap identity


encode : String -> (a -> Json.Encode.Value) -> a -> EncodedField
encode key encoder value =
    Just ( key, encoder value )


encodeNullable : String -> (a -> Json.Encode.Value) -> Maybe a -> EncodedField
encodeNullable key encoder value =
    Just ( key, Maybe.withDefault Json.Encode.null (Maybe.map encoder value) )


maybeEncode : String -> (a -> Json.Encode.Value) -> Maybe a -> EncodedField
maybeEncode key encoder =
    Maybe.map (Tuple.pair key << encoder)


maybeEncodeNullable : String -> (a -> Json.Encode.Value) -> Maybe a -> EncodedField
maybeEncodeNullable =
    encodeNullable


decode : String -> Json.Decode.Decoder a -> Json.Decode.Decoder (a -> b) -> Json.Decode.Decoder b
decode key decoder =
    decodeChain (Json.Decode.field key decoder)


decodeLazy : (a -> c) -> String -> Json.Decode.Decoder a -> Json.Decode.Decoder (c -> b) -> Json.Decode.Decoder b
decodeLazy f key decoder =
    decodeChainLazy f (Json.Decode.field key decoder)


decodeNullable : String -> Json.Decode.Decoder a -> Json.Decode.Decoder (Maybe a -> b) -> Json.Decode.Decoder b
decodeNullable key decoder =
    decodeChain (maybeField key decoder Nothing)


decodeNullableLazy : (Maybe a -> c) -> String -> Json.Decode.Decoder a -> Json.Decode.Decoder (c -> b) -> Json.Decode.Decoder b
decodeNullableLazy f key decoder =
    decodeChainLazy f (maybeField key decoder Nothing)


maybeDecode : String -> Json.Decode.Decoder a -> Maybe a -> Json.Decode.Decoder (Maybe a -> b) -> Json.Decode.Decoder b
maybeDecode key decoder fallback =
    -- let's be kind to null-values as well
    decodeChain (maybeField key decoder fallback)


maybeDecodeLazy : (Maybe a -> c) -> String -> Json.Decode.Decoder a -> Maybe a -> Json.Decode.Decoder (c -> b) -> Json.Decode.Decoder b
maybeDecodeLazy f key decoder fallback =
    -- let's be kind to null-values as well
    decodeChainLazy f (maybeField key decoder fallback)


maybeDecodeNullable : String -> Json.Decode.Decoder a -> Maybe a -> Json.Decode.Decoder (Maybe a -> b) -> Json.Decode.Decoder b
maybeDecodeNullable key decoder fallback =
    decodeChain (maybeField key decoder fallback)


maybeDecodeNullableLazy : (Maybe a -> c) -> String -> Json.Decode.Decoder a -> Maybe a -> Json.Decode.Decoder (c -> b) -> Json.Decode.Decoder b
maybeDecodeNullableLazy f key decoder fallback =
    decodeChainLazy f (maybeField key decoder fallback)


maybeField : String -> Json.Decode.Decoder a -> Maybe a -> Json.Decode.Decoder (Maybe a)
maybeField key decoder fallback =
    let
        fieldDecoder =
            Json.Decode.field key Json.Decode.value

        valueDecoder =
            Json.Decode.oneOf [ Json.Decode.map Just decoder, Json.Decode.null fallback ]

        decodeObject rawObject =
            case Json.Decode.decodeValue fieldDecoder rawObject of
                Ok rawValue ->
                    case Json.Decode.decodeValue valueDecoder rawValue of
                        Ok value ->
                            Json.Decode.succeed value

                        Err error ->
                            Json.Decode.fail (Json.Decode.errorToString error)

                Err _ ->
                    Json.Decode.succeed fallback
    in
    Json.Decode.value
        |> Json.Decode.andThen decodeObject


decodeChain : Json.Decode.Decoder a -> Json.Decode.Decoder (a -> b) -> Json.Decode.Decoder b
decodeChain =
    Json.Decode.map2 (|>)


decodeChainLazy : (a -> c) -> Json.Decode.Decoder a -> Json.Decode.Decoder (c -> b) -> Json.Decode.Decoder b
decodeChainLazy f =
    decodeChain << Json.Decode.map f