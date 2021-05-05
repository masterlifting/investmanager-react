/** @format */

import { IResponseAPI } from '../../api/api-interfaces';
import { IRate } from './types/service-interfaces';
import { restApi } from '../../api/api-configuration';

export class ServiceAPI {
  private controller = 'services';
  getRateAsync = async (): Promise<IResponseAPI<IRate>> => await restApi.getAsync(this.controller + '/rate');
}
