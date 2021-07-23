//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.0

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class ServicesApi {
  ServicesApi([ApiClient apiClient]) : apiClient = apiClient ?? defaultApiClient;

  final ApiClient apiClient;

  /// Performs an HTTP 'POST /v1/service/add' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [ServiceEntity] serviceEntity (required):
  Future<Response> createWithHttpInfo(ServiceEntity serviceEntity) async {
    // Verify required params are set.
    if (serviceEntity == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: serviceEntity');
    }

    final path = r'/v1/service/add';

    Object postBody = serviceEntity;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    final contentTypes = <String>['application/json'];
    final nullableContentType = contentTypes.isNotEmpty ? contentTypes[0] : null;
    final authNames = <String>[];


    return await apiClient.invokeAPI(
      path,
      'POST',
      queryParams,
      postBody,
      headerParams,
      formParams,
      nullableContentType,
      authNames,
    );
  }

  /// Parameters:
  ///
  /// * [ServiceEntity] serviceEntity (required):
  Future<ServiceEntity> create(ServiceEntity serviceEntity) async {
    final response = await createWithHttpInfo(serviceEntity);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'ServiceEntity',) as ServiceEntity;
        }
    return Future<ServiceEntity>.value(null);
  }

  /// Performs an HTTP 'GET /v1/service/search/{client}' operation and returns the [Response].
  /// Parameters:
  ///
  /// * [String] client (required):
  Future<Response> findOneWithHttpInfo(String client) async {
    // Verify required params are set.
    if (client == null) {
     throw ApiException(HttpStatus.badRequest, 'Missing required param: client');
    }

    final path = r'/v1/service/search/{client}'
      .replaceAll('{' + 'client' + '}', client.toString());

    Object postBody;

    final queryParams = <QueryParam>[];
    final headerParams = <String, String>{};
    final formParams = <String, String>{};

    final contentTypes = <String>[];
    final nullableContentType = contentTypes.isNotEmpty ? contentTypes[0] : null;
    final authNames = <String>[];


    return await apiClient.invokeAPI(
      path,
      'GET',
      queryParams,
      postBody,
      headerParams,
      formParams,
      nullableContentType,
      authNames,
    );
  }

  /// Parameters:
  ///
  /// * [String] client (required):
  Future<String> findOne(String client) async {
    final response = await findOneWithHttpInfo(client);
    if (response.statusCode >= HttpStatus.badRequest) {
      throw ApiException(response.statusCode, await _decodeBodyBytes(response));
    }
    // When a remote server returns no body with a status of 204, we shall not decode it.
    // At the time of writing this, `dart:convert` will throw an "Unexpected end of input"
    // FormatException when trying to decode an empty string.
    if (response.body != null && response.statusCode != HttpStatus.noContent) {
      return await apiClient.deserializeAsync(await _decodeBodyBytes(response), 'String',) as String;
        }
    return Future<String>.value(null);
  }
}
