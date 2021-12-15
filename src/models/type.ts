import { Reducer, Effect, Subscription } from 'umi';
import { PaginationConfig } from 'antd/es/pagination';
export { TablePaginationConfig } from 'antd/es/table/interface';

export enum EffectType {
  takeEvery = 'takeEvery',
  takeLatest = 'takeLatest',
  throttle = 'throttle',
  watcher = 'watcher',
}

export type EffectWithType = [
  Effect,
  { [name: string]: any; type: keyof typeof EffectType },
];

export interface EffectsMapObject {
  [key: string]: Effect | EffectWithType;
}
export interface SubscriptionObject {
  [key: string]: Subscription;
}
export interface ReducerObject<T> {
  [key: string]: Reducer<T>;
}
export interface ModelType<T> {
  reducer?: Reducer<T>;
  effects?: EffectsMapObject;
  state?: T;
  subscriptions?: SubscriptionObject;
  namespace?: string;
  reducers?: ReducerObject<T>;
}

export type Pagination = PaginationConfig;
export type Filters<T = any> = {
  [K in keyof (T & { [k: string]: any })]?: {
    title: string;
    value: any;
    closable?: boolean;
    values?: any;
  };
};
export interface Query<T = any> {
  pagination?: Pagination;
  filters?: Filters<T>;
  keywords?: string;
  sorter?: any;
}
