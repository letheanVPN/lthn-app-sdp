export * from './default.service';
import { DefaultService } from './default.service';
export * from './provider.service';
import { ProviderService } from './provider.service';
export * from './services.service';
import { ServicesService } from './services.service';
export const APIS = [DefaultService, ProviderService, ServicesService];
