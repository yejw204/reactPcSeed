/**
 * @file models/example.js
 * @author maoquan(maoquan@htsc.com)
 */

import { routerRedux } from 'dva/router';

import api from '../api';
import { delay } from '../utils/sagaEffects';

// noinspection JSAnnotator
export default {
  namespace: 'example',
  state: {
    list: [],
    detail: {},

  },
  reducers: {
    getListSuccess(state, action) {
      const { payload: { response } } = action;
      const list = response.data;
      return {
        ...state,
        list,
      };
    },

    getDetailSuccess(state, action) {
      const { payload: { response } } = action;
      return {
        ...state,
        detail: response.data,
      };
    },
  },
  effects: {
    * getList({ payload: { type = '1' } }, { call, put }) {
      const response = yield call(api.getList, { type });
      // 模拟慢速网络
      yield delay(1000);
      yield put({
        type: 'getListSuccess',
        payload: { response, type },
      });
    },
    * getDetail({ payload: { id } }, { call, put }) {
      const response = yield call(api.getDetail, { id });
      yield put({
        type: 'getDetailSuccess',
        payload: { response, id },
      });
    },
    * save({ payload }, { call, put }) {
      const response = yield call(api.saveDetail, payload);
      yield put({
        type: 'saveSuccess',
        payload: { response },
      });
      yield put(routerRedux.goBack());
    },
  },
  subscriptions: {},
};
