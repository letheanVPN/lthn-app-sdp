//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class TimeRangeEntity {
  /// Returns a new [TimeRangeEntity] instance.
  TimeRangeEntity({
    @required this.from,
    @required this.to,
  });

  /// YYYY-MM-DDT00:00:00Z
  DateTime from;

  /// YYYY-MM-DDT00:00:00Z
  DateTime to;

  @override
  bool operator ==(Object other) => identical(this, other) || other is TimeRangeEntity &&
     other.from == from &&
     other.to == to;

  @override
  int get hashCode =>
    (from == null ? 0 : from.hashCode) +
    (to == null ? 0 : to.hashCode);

  @override
  String toString() => 'TimeRangeEntity[from=$from, to=$to]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'from'] = from.toUtc().toIso8601String();
      json[r'to'] = to.toUtc().toIso8601String();
    return json;
  }

  /// Returns a new [TimeRangeEntity] instance and imports its values from
  /// [json] if it's non-null, null if [json] is null.
  static TimeRangeEntity fromJson(Map<String, dynamic> json) => json == null
    ? null
    : TimeRangeEntity(
        from: json[r'from'] == null
          ? null
          : DateTime.parse(json[r'from']),
        to: json[r'to'] == null
          ? null
          : DateTime.parse(json[r'to']),
    );

  static List<TimeRangeEntity> listFromJson(List<dynamic> json, {bool emptyIsNull, bool growable,}) =>
    json == null || json.isEmpty
      ? true == emptyIsNull ? null : <TimeRangeEntity>[]
      : json.map((dynamic value) => TimeRangeEntity.fromJson(value)).toList(growable: true == growable);

  static Map<String, TimeRangeEntity> mapFromJson(Map<String, dynamic> json) {
    final map = <String, TimeRangeEntity>{};
    if (json?.isNotEmpty == true) {
      json.forEach((key, value) => map[key] = TimeRangeEntity.fromJson(value));
    }
    return map;
  }

  // maps a json object with a list of TimeRangeEntity-objects as value to a dart map
  static Map<String, List<TimeRangeEntity>> mapListFromJson(Map<String, dynamic> json, {bool emptyIsNull, bool growable,}) {
    final map = <String, List<TimeRangeEntity>>{};
    if (json?.isNotEmpty == true) {
      json.forEach((key, value) {
        map[key] = TimeRangeEntity.listFromJson(value, emptyIsNull: emptyIsNull, growable: growable,);
      });
    }
    return map;
  }
}

