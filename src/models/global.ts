import { Effect, Reducer } from 'umi';
export type GlobalModelState = {
  token: string;
};

const GlobalModelState: GlobalModelState = {
  token: '123test',
};
interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  reducers: {
    exampleReducer: Reducer<GlobalModelState>; //增加新的reducer都要这么写
  };
  effects: {
    exampleEffects: Effect; //增加新的effects都要这么写
  };
}
// model写法的例子
const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: GlobalModelState,
  reducers: {
    exampleReducer: (state = GlobalModelState) => ({
      ...state,
    }),
  },
  effects: {
    *exampleEffects(_, { call, put }) {
      const res = yield call();
      console.log(res); // do something to res
      yield put({
        type: 'exampleReducer',
      });
    },
  },
};
export default GlobalModel;
