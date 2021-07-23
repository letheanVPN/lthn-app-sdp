export * from './defaultApi';
import { DefaultApi } from './defaultApi';
export * from './providerApi';
import { ProviderApi } from './providerApi';
export * from './servicesApi';
import { ServicesApi } from './servicesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [DefaultApi, ProviderApi, ServicesApi];
