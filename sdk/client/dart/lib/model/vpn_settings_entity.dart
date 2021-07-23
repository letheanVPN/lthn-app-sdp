//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class VpnSettingsEntity {
  /// Returns a new [VpnSettingsEntity] instance.
  VpnSettingsEntity({
    @required this.endpoint,
    @required this.port,
    @required this.parameters,
    @required this.terms,
    this.policy = const [],
  });

  /// IP Addresses of endpoints for VPN service only
  String endpoint;

  /// Port these settings apply to
  String port;

  /// mtu size parameter for vpn service only
  String parameters;

  /// Terms for the service
  String terms;

  /// a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server
  List<String> policy;

  @override
  bool operator ==(Object other) => identical(this, other) || other is VpnSettingsEntity &&
     other.endpoint == endpoint &&
     other.port == port &&
     other.parameters == parameters &&
     other.terms == terms &&
     other.policy == policy;

  @override
  int get hashCode =>
    (endpoint == null ? 0 : endpoint.hashCode) +
    (port == null ? 0 : port.hashCode) +
    (parameters == null ? 0 : parameters.hashCode) +
    (terms == null ? 0 : terms.hashCode) +
    (policy == null ? 0 : policy.hashCode);

  @override
  String toString() => 'VpnSettingsEntity[endpoint=$endpoint, port=$port, parameters=$parameters, terms=$terms, policy=$policy]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'endpoint'] = endpoint;
      json[r'port'] = port;
      json[r'parameters'] = parameters;
      json[r'terms'] = terms;
      json[r'policy'] = policy;
    return json;
  }

  /// Returns a new [VpnSettingsEntity] instance and imports its values from
  /// [json] if it's non-null, null if [json] is null.
  static VpnSettingsEntity fromJson(Map<String, dynamic> json) => json == null
    ? null
    : VpnSettingsEntity(
        endpoint: json[r'endpoint'],
        port: json[r'port'],
        parameters: json[r'parameters'],
        terms: json[r'terms'],
        policy: json[r'policy'] == null
          ? null
          : (json[r'policy'] as List).cast<String>(),
    );

  static List<VpnSettingsEntity> listFromJson(List<dynamic> json, {bool emptyIsNull, bool growable,}) =>
    json == null || json.isEmpty
      ? true == emptyIsNull ? null : <VpnSettingsEntity>[]
      : json.map((dynamic value) => VpnSettingsEntity.fromJson(value)).toList(growable: true == growable);

  static Map<String, VpnSettingsEntity> mapFromJson(Map<String, dynamic> json) {
    final map = <String, VpnSettingsEntity>{};
    if (json?.isNotEmpty == true) {
      json.forEach((key, value) => map[key] = VpnSettingsEntity.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of VpnSettingsEntity-objects as value to a dart map
  static Map<String, List<VpnSettingsEntity>> mapListFromJson(Map<String, dynamic> json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<VpnSettingsEntity>>{};
    if (json?.isNotEmpty == true) {
      json.forEach((key, value) {
        map[key] = VpnSettingsEntity.listFromJson(value, emptyIsNull: emptyIsNull, growable: growable,);
      });
    }
    return map;
  }
}

