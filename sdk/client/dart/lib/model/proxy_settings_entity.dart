//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class ProxySettingsEntity {
  /// Returns a new [ProxySettingsEntity] instance.
  ProxySettingsEntity({
    @required this.endpoint,
    @required this.port,
    @required this.terms,
    this.policy = const [],
  });

  /// IP Address of endpoints for Proxy service only
  String endpoint;

  /// Port available on endpoint
  String port;

  /// Terms for the service
  String terms;

  /// a JSON containing access policy - whitelist/blacklist default, allowed/blocked IPs and FQDNs in regex format. This is NOT sent to SDP. It is used by the Dispatcher to orchestrate restrictions on Server
  List<String> policy;

  @override
  bool operator ==(Object other) => identical(this, other) || other is ProxySettingsEntity &&
     other.endpoint == endpoint &&
     other.port == port &&
     other.terms == terms &&
     other.policy == policy;

  @override
  int get hashCode =>
    (endpoint == null ? 0 : endpoint.hashCode) +
    (port == null ? 0 : port.hashCode) +
    (terms == null ? 0 : terms.hashCode) +
    (policy == null ? 0 : policy.hashCode);

  @override
  String toString() => 'ProxySettingsEntity[endpoint=$endpoint, port=$port, terms=$terms, policy=$policy]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'endpoint'] = endpoint;
      json[r'port'] = port;
      json[r'terms'] = terms;
      json[r'policy'] = policy;
    return json;
  }

  /// Returns a new [ProxySettingsEntity] instance and imports its values from
  /// [json] if it's non-null, null if [json] is null.
  static ProxySettingsEntity fromJson(Map<String, dynamic> json) => json == null
    ? null
    : ProxySettingsEntity(
        endpoint: json[r'endpoint'],
        port: json[r'port'],
        terms: json[r'terms'],
        policy: json[r'policy'] == null
          ? null
          : (json[r'policy'] as List).cast<String>(),
    );

  static List<ProxySettingsEntity> listFromJson(List<dynamic> json, {bool emptyIsNull, bool growable,}) =>
    json == null || json.isEmpty
      ? true == emptyIsNull ? null : <ProxySettingsEntity>[]
      : json.map((dynamic value) => ProxySettingsEntity.fromJson(value)).toList(growable: true == growable);

  static Map<String, ProxySettingsEntity> mapFromJson(Map<String, dynamic> json) {
    final map = <String, ProxySettingsEntity>{};
    if (json?.isNotEmpty == true) {
      json.forEach((key, value) => map[key] = ProxySettingsEntity.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of ProxySettingsEntity-objects as value to a dart map
  static Map<String, List<ProxySettingsEntity>> mapListFromJson(Map<String, dynamic> json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<ProxySettingsEntity>>{};
    if (json?.isNotEmpty == true) {
      json.forEach((key, value) {
        map[key] = ProxySettingsEntity.listFromJson(value, emptyIsNull: emptyIsNull, growable: growable,);
      });
    }
    return map;
  }
}

