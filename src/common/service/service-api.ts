/** @format */

import { IRate } from './types/service-interfaces';
import { restApi } from '../../api/api-configuration';
import { IApiBaseResponse } from '../../api/api-interfaces';

export class ServiceAPI {
  private controller = 'service';
  getRateAsync = async (): Promise<IApiBaseResponse<IRate>> => await restApi.getAsync(this.controller + '/rate');
}
