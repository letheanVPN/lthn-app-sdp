// tslint:disable
/**
 * Lethean VPN Api
 * Distributed Virtual Private Marketplace
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    ServiceEntity,
} from '../models';

export interface CreateRequest {
    serviceEntity: ServiceEntity;
}

export interface FindOneRequest {
    client: string;
}

/**
 * no description
 */
export class ServicesApi extends BaseAPI {

    /**
     */
    create({ serviceEntity }: CreateRequest): Observable<ServiceEntity>
    create({ serviceEntity }: CreateRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ServiceEntity>>
    create({ serviceEntity }: CreateRequest, opts?: OperationOpts): Observable<ServiceEntity | RawAjaxResponse<ServiceEntity>> {
        throwIfNullOrUndefined(serviceEntity, 'serviceEntity', 'create');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<ServiceEntity>({
            url: '/v1/service/add',
            method: 'POST',
            headers,
            body: serviceEntity,
        }, opts?.responseOpts);
    };

    /**
     */
    findOne({ client }: FindOneRequest): Observable<string>
    findOne({ client }: FindOneRequest, opts?: OperationOpts): Observable<RawAjaxResponse<string>>
    findOne({ client }: FindOneRequest, opts?: OperationOpts): Observable<string | RawAjaxResponse<string>> {
        throwIfNullOrUndefined(client, 'client', 'findOne');

        return this.request<string>({
            url: '/v1/service/search/{client}'.replace('{client}', encodeURI(client)),
            method: 'GET',
        }, opts?.responseOpts);
    };

}