-module(openapi_service_entity).

-export([encode/1]).

-export_type([openapi_service_entity/0]).

-type openapi_service_entity() ::
    #{ 'id' => binary(),
       'name' := binary(),
       'type' := binary(),
       'cost' := binary(),
       'firstPrePaidMinutes' => integer(),
       'firstVerificationsNeeded' => integer(),
       'subsequentPrePaidMinutes' => integer(),
       'subsequentVerificationsNeeded' => integer(),
       'allowRefunds' => boolean(),
       'downloadSpeed' := integer(),
       'uploadSpeed' := integer(),
       'proxy' => list(),
       'vpn' => list(),
       'validity' => openapi_time_range_entity:openapi_time_range_entity(),
       'disable' := boolean(),
       'certificates' => list()
     }.

encode(#{ 'id' := Id,
          'name' := Name,
          'type' := Type,
          'cost' := Cost,
          'firstPrePaidMinutes' := FirstPrePaidMinutes,
          'firstVerificationsNeeded' := FirstVerificationsNeeded,
          'subsequentPrePaidMinutes' := SubsequentPrePaidMinutes,
          'subsequentVerificationsNeeded' := SubsequentVerificationsNeeded,
          'allowRefunds' := AllowRefunds,
          'downloadSpeed' := DownloadSpeed,
          'uploadSpeed' := UploadSpeed,
          'proxy' := Proxy,
          'vpn' := Vpn,
          'validity' := Validity,
          'disable' := Disable,
          'certificates' := Certificates
        }) ->
    #{ 'id' => Id,
       'name' => Name,
       'type' => Type,
       'cost' => Cost,
       'firstPrePaidMinutes' => FirstPrePaidMinutes,
       'firstVerificationsNeeded' => FirstVerificationsNeeded,
       'subsequentPrePaidMinutes' => SubsequentPrePaidMinutes,
       'subsequentVerificationsNeeded' => SubsequentVerificationsNeeded,
       'allowRefunds' => AllowRefunds,
       'downloadSpeed' => DownloadSpeed,
       'uploadSpeed' => UploadSpeed,
       'proxy' => Proxy,
       'vpn' => Vpn,
       'validity' => Validity,
       'disable' => Disable,
       'certificates' => Certificates
     }.
