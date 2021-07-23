//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: lines_longer_than_80_chars

import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for ServiceEntity
void main() {
  final instance = ServiceEntity();

  group('test ServiceEntity', () {
    // ID of the service
    // String id
    test('to test the property `id`', () async {
      // TODO
    });

    // Name of the service
    // String name
    test('to test the property `name`', () async {
      // TODO
    });

    // Type of the service
    // String type
    test('to test the property `type`', () async {
      // TODO
    });

    // Per minute Cost of the service
    // String cost
    test('to test the property `cost`', () async {
      // TODO
    });

    // Amount of pre-paid minutes for first payment
    // num firstPrePaidMinutes
    test('to test the property `firstPrePaidMinutes`', () async {
      // TODO
    });

    // Number of verifications needed for first payment
    // num firstVerificationsNeeded
    test('to test the property `firstVerificationsNeeded`', () async {
      // TODO
    });

    // Amount of pre-paid minutes for subsequent payments
    // num subsequentPrePaidMinutes
    test('to test the property `subsequentPrePaidMinutes`', () async {
      // TODO
    });

    // Number of verifications needed for subsequent payments
    // num subsequentVerificationsNeeded
    test('to test the property `subsequentVerificationsNeeded`', () async {
      // TODO
    });

    // Whether or not refunds are allowed
    // bool allowRefunds
    test('to test the property `allowRefunds`', () async {
      // TODO
    });

    // Service download speed in Mbits
    // num downloadSpeed
    test('to test the property `downloadSpeed`', () async {
      // TODO
    });

    // Service upload speed in Mbits
    // num uploadSpeed
    test('to test the property `uploadSpeed`', () async {
      // TODO
    });

    // array containing Proxy related settings. only available if service is of type proxy, null otherwise
    // List<ProxySettingsEntity> proxy (default value: const [])
    test('to test the property `proxy`', () async {
      // TODO
    });

    // array containing VPN related settings. only available if service is of type vpn, null otherwise
    // List<VpnSettingsEntity> vpn (default value: const [])
    test('to test the property `vpn`', () async {
      // TODO
    });

    // TimeRangeEntity validity
    test('to test the property `validity`', () async {
      // TODO
    });

    // disable or not the service
    // bool disable
    test('to test the property `disable`', () async {
      // TODO
    });

    // inside each service, there should be a field named certificates that has a list of IDs, referencing the certificates at the provider level.
    // List<CertificatesEntity> certificates (default value: const [])
    test('to test the property `certificates`', () async {
      // TODO
    });


  });

}
