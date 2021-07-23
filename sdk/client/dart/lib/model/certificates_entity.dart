//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class CertificatesEntity {
  /// Returns a new [CertificatesEntity] instance.
  CertificatesEntity({
    @required this.id,
  });

  /// ID only
  num id;

  @override
  bool operator ==(Object other) => identical(this, other) || other is CertificatesEntity &&
     other.id == id;

  @override
  int get hashCode =>
    (id == null ? 0 : id.hashCode);

  @override
  String toString() => 'CertificatesEntity[id=$id]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'id'] = id;
    return json;
  }

  /// Returns a new [CertificatesEntity] instance and imports its values from
  /// [json] if it's non-null, null if [json] is null.
  static CertificatesEntity fromJson(Map<String, dynamic> json) => json == null
    ? null
    : CertificatesEntity(
        id: json[r'id'] == null ?
          null :
          json[r'id'].toDouble(),
    );

  static List<CertificatesEntity> listFromJson(List<dynamic> json, {bool emptyIsNull, bool growable,}) =>
    json == null || json.isEmpty
      ? true == emptyIsNull ? null : <CertificatesEntity>[]
      : json.map((dynamic value) => CertificatesEntity.fromJson(value)).toList(growable: true == growable);

  static Map<String, CertificatesEntity> mapFromJson(Map<String, dynamic> json) {
    final map = <String, CertificatesEntity>{};
    if (json?.isNotEmpty == true) {
      json.forEach((key, value) => map[key] = CertificatesEntity.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of CertificatesEntity-objects as value to a dart map
  static Map<String, List<CertificatesEntity>> mapListFromJson(Map<String, dynamic> json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<CertificatesEntity>>{};
    if (json?.isNotEmpty == true) {
      json.forEach((key, value) {
        map[key] = CertificatesEntity.listFromJson(value, emptyIsNull: emptyIsNull, growable: growable,);
      });
    }
    return map;
  }
}

