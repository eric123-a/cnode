import { ConnectState } from '@/models/connect';
import { ModelType } from '@/models/type';
import { mainPageState } from './type';

const initState = {
  testState: '123',
};

const Model: ModelType<mainPageState> = {
  namespace: 'main',
  state: initState,
  reducers: {
    save: (state = initState, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  effects: {
    *getUserData(_, { put, select }) {
      const userInfo: any = yield select((state: ConnectState) => ({
        ...state,
      }));
      yield put({
        type: 'saveUserData',
        payload: {
          userName: userInfo.userName,
          telephone: userInfo.telephone,
        },
      });
    },
  },
};

export default Model;
