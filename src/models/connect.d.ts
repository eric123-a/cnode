import { Dispatch, History, IRoute } from 'umi';
import { GlobalModelState } from './global';
export interface ConnectState {
  global: GlobalModelState;
}

export interface ConnectProps<
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line @typescript-eslint/ban-types
  P extends { [K in keyof P]?: string } = {},
  // eslint-disable-next-line no-undef
  S = any,
> {
  dispatch: Dispatch;
  children: Element[];
  // https://github.com/umijs/umi/pull/2194
  // eslint-disable-next-line no-undef
  match?: any;
  location: Location;
  history: History;
  route: IRoute;
}
