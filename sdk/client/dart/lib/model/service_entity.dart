//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class ServiceEntity {
  /// Returns a new [ServiceEntity] instance.
  ServiceEntity({
    @required this.id,
    @required this.name,
    @required this.type,
    @required this.cost,
    this.firstPrePaidMinutes,
    this.firstVerificationsNeeded,
    this.subsequentPrePaidMinutes,
    this.subsequentVerificationsNeeded,
    this.allowRefunds,
    @required this.downloadSpeed,
    @required this.uploadSpeed,
    this.proxy = const [],
    this.vpn = const [],
    this.validity,
    @required this.disable,
    this.certificates = const [],
  });

  /// ID of the service
  String id;

  /// Name of the service
  String name;

  /// Type of the service
  ServiceEntityTypeEnum type;

  /// Per minute Cost of the service
  String cost;

  /// Amount of pre-paid minutes for first payment
  // minimum: 10
  // maximum: 1440
  num firstPrePaidMinutes;

  /// Number of verifications needed for first payment
  // minimum: 0
  // maximum: 2
  num firstVerificationsNeeded;

  /// Amount of pre-paid minutes for subsequent payments
  // minimum: 10
  // maximum: 1440
  num subsequentPrePaidMinutes;

  /// Number of verifications needed for subsequent payments
  // minimum: 0
  // maximum: 1
  num subsequentVerificationsNeeded;

  /// Whether or not refunds are allowed
  bool allowRefunds;

  /// Service download speed in Mbits
  // minimum: 0
  // maximum: 99999999999
  num downloadSpeed;

  /// Service upload speed in Mbits
  // minimum: 0
  // maximum: 99999999999
  num uploadSpeed;

  /// array containing Proxy related settings. only available if service is of type proxy, null otherwise
  List<ProxySettingsEntity> proxy;

  /// array containing VPN related settings. only available if service is of type vpn, null otherwise
  List<VpnSettingsEntity> vpn;

  TimeRangeEntity validity;

  /// disable or not the service
  bool disable;

  /// inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level.
  List<CertificatesEntity> certificates;

  @override
  bool operator ==(Object other) => identical(this, other) || other is ServiceEntity &&
     other.id == id &&
     other.name == name &&
     other.type == type &&
     other.cost == cost &&
     other.firstPrePaidMinutes == firstPrePaidMinutes &&
     other.firstVerificationsNeeded == firstVerificationsNeeded &&
     other.subsequentPrePaidMinutes == subsequentPrePaidMinutes &&
     other.subsequentVerificationsNeeded == subsequentVerificationsNeeded &&
     other.allowRefunds == allowRefunds &&
     other.downloadSpeed == downloadSpeed &&
     other.uploadSpeed == uploadSpeed &&
     other.proxy == proxy &&
     other.vpn == vpn &&
     other.validity == validity &&
     other.disable == disable &&
     other.certificates == certificates;

  @override
  int get hashCode =>
    (id == null ? 0 : id.hashCode) +
    (name == null ? 0 : name.hashCode) +
    (type == null ? 0 : type.hashCode) +
    (cost == null ? 0 : cost.hashCode) +
    (firstPrePaidMinutes == null ? 0 : firstPrePaidMinutes.hashCode) +
    (firstVerificationsNeeded == null ? 0 : firstVerificationsNeeded.hashCode) +
    (subsequentPrePaidMinutes == null ? 0 : subsequentPrePaidMinutes.hashCode) +
    (subsequentVerificationsNeeded == null ? 0 : subsequentVerificationsNeeded.hashCode) +
    (allowRefunds == null ? 0 : allowRefunds.hashCode) +
    (downloadSpeed == null ? 0 : downloadSpeed.hashCode) +
    (uploadSpeed == null ? 0 : uploadSpeed.hashCode) +
    (proxy == null ? 0 : proxy.hashCode) +
    (vpn == null ? 0 : vpn.hashCode) +
    (validity == null ? 0 : validity.hashCode) +
    (disable == null ? 0 : disable.hashCode) +
    (certificates == null ? 0 : certificates.hashCode);

  @override
  String toString() => 'ServiceEntity[id=$id, name=$name, type=$type, cost=$cost, firstPrePaidMinutes=$firstPrePaidMinutes, firstVerificationsNeeded=$firstVerificationsNeeded, subsequentPrePaidMinutes=$subsequentPrePaidMinutes, subsequentVerificationsNeeded=$subsequentVerificationsNeeded, allowRefunds=$allowRefunds, downloadSpeed=$downloadSpeed, uploadSpeed=$uploadSpeed, proxy=$proxy, vpn=$vpn, validity=$validity, disable=$disable, certificates=$certificates]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'id'] = id;
      json[r'name'] = name;
      json[r'type'] = type;
      json[r'cost'] = cost;
    if (firstPrePaidMinutes != null) {
      json[r'firstPrePaidMinutes'] = firstPrePaidMinutes;
    }
    if (firstVerificationsNeeded != null) {
      json[r'firstVerificationsNeeded'] = firstVerificationsNeeded;
    }
    if (subsequentPrePaidMinutes != null) {
      json[r'subsequentPrePaidMinutes'] = subsequentPrePaidMinutes;
    }
    if (subsequentVerificationsNeeded != null) {
      json[r'subsequentVerificationsNeeded'] = subsequentVerificationsNeeded;
    }
    if (allowRefunds != null) {
      json[r'allowRefunds'] = allowRefunds;
    }
      json[r'downloadSpeed'] = downloadSpeed;
      json[r'uploadSpeed'] = uploadSpeed;
    if (proxy != null) {
      json[r'proxy'] = proxy;
    }
    if (vpn != null) {
      json[r'vpn'] = vpn;
    }
    if (validity != null) {
      json[r'validity'] = validity;
    }
      json[r'disable'] = disable;
    if (certificates != null) {
      json[r'certificates'] = certificates;
    }
    return json;
  }

  /// Returns a new [ServiceEntity] instance and imports its values from
  /// [json] if it's non-null, null if [json] is null.
  static ServiceEntity fromJson(Map<String, dynamic> json) => json == null
    ? null
    : ServiceEntity(
        id: json[r'id'],
        name: json[r'name'],
        type: ServiceEntityTypeEnum.fromJson(json[r'type']),
        cost: json[r'cost'],
        firstPrePaidMinutes: json[r'firstPrePaidMinutes'] == null ?
          null :
          json[r'firstPrePaidMinutes'].toDouble(),
        firstVerificationsNeeded: json[r'firstVerificationsNeeded'] == null ?
          null :
          json[r'firstVerificationsNeeded'].toDouble(),
        subsequentPrePaidMinutes: json[r'subsequentPrePaidMinutes'] == null ?
          null :
          json[r'subsequentPrePaidMinutes'].toDouble(),
        subsequentVerificationsNeeded: json[r'subsequentVerificationsNeeded'] == null ?
          null :
          json[r'subsequentVerificationsNeeded'].toDouble(),
        allowRefunds: json[r'allowRefunds'],
        downloadSpeed: json[r'downloadSpeed'] == null ?
          null :
          json[r'downloadSpeed'].toDouble(),
        uploadSpeed: json[r'uploadSpeed'] == null ?
          null :
          json[r'uploadSpeed'].toDouble(),
        proxy: ProxySettingsEntity.listFromJson(json[r'proxy']),
        vpn: VpnSettingsEntity.listFromJson(json[r'vpn']),
        validity: TimeRangeEntity.fromJson(json[r'validity']),
        disable: json[r'disable'],
        certificates: CertificatesEntity.listFromJson(json[r'certificates']),
    );

  static List<ServiceEntity> listFromJson(List<dynamic> json, {bool emptyIsNull, bool growable,}) =>
    json == null || json.isEmpty
      ? true == emptyIsNull ? null : <ServiceEntity>[]
      : json.map((dynamic value) => ServiceEntity.fromJson(value)).toList(growable: true == growable);

  static Map<String, ServiceEntity> mapFromJson(Map<String, dynamic> json) {
    final map = <String, ServiceEntity>{};
    if (json?.isNotEmpty == true) {
      json.forEach((key, value) => map[key] = ServiceEntity.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ServiceEntity-objects as value to a dart map
  static Map<String, List<ServiceEntity>> mapListFromJson(Map<String, dynamic> json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<ServiceEntity>>{};
    if (json?.isNotEmpty == true) {
      json.forEach((key, value) {
        map[key] = ServiceEntity.listFromJson(value, emptyIsNull: emptyIsNull, growable: growable,);
      });
    }
    return map;
  }
}

/// Type of the service
class ServiceEntityTypeEnum {
  /// Instantiate a new enum with the provided [value].
  const ServiceEntityTypeEnum._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value;

  String toJson() => value;

  static const vpn = ServiceEntityTypeEnum._(r'vpn');
  static const proxy = ServiceEntityTypeEnum._(r'proxy');

  /// List of all possible values in this [enum][ServiceEntityTypeEnum].
  static const values = <ServiceEntityTypeEnum>[
    vpn,
    proxy,
  ];

  static ServiceEntityTypeEnum fromJson(dynamic value) =>
    ServiceEntityTypeEnumTypeTransformer().decode(value);

  static List<ServiceEntityTypeEnum> listFromJson(List<dynamic> json, {bool emptyIsNull, bool growable,}) =>
    json == null || json.isEmpty
      ? true == emptyIsNull ? null : <ServiceEntityTypeEnum>[]
      : json
          .map((value) => ServiceEntityTypeEnum.fromJson(value))
          .toList(growable: true == growable);
}

/// Transformation class that can [encode] an instance of [ServiceEntityTypeEnum] to String,
/// and [decode] dynamic data back to [ServiceEntityTypeEnum].
class ServiceEntityTypeEnumTypeTransformer {
  const ServiceEntityTypeEnumTypeTransformer._();

  factory ServiceEntityTypeEnumTypeTransformer() => _instance ??= ServiceEntityTypeEnumTypeTransformer._();

  String encode(ServiceEntityTypeEnum data) => data.value;

  /// Decodes a [dynamic value][data] to a ServiceEntityTypeEnum.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  ServiceEntityTypeEnum decode(dynamic data, {bool allowNull}) {
    switch (data) {
      case r'vpn': return ServiceEntityTypeEnum.vpn;
      case r'proxy': return ServiceEntityTypeEnum.proxy;
      default:
        if (allowNull == false) {
          throw ArgumentError('Unknown enum value to decode: $data');
        }
    }
    return null;
  }

  /// Singleton [ServiceEntityTypeEnumTypeTransformer] instance.
  static ServiceEntityTypeEnumTypeTransformer _instance;
}

