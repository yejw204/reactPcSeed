/**
 * @file models/chart.js
 * @author maoquan(maoquan@htsc.com)
 */

import api from '../api';

// noinspection JSAnnotator
export default {
  namespace: 'chart',
  state: {
    linePileupData: [],
    multipleData: [],
    barWorldPeopleData: [],
    pieInnerData: [],
    pieOutData: [],
    pieData: [],

  },
  reducers: {
    getLinePileupDataSuccess(state, action) {
      const { payload: { response } } = action;
      const linePileupData = response.data;
      return {
        ...state,
        linePileupData,
      };
    },
    getMultipleXLineDataSuccess(state, action) {
      const { payload: { response } } = action;
      const multipleData = response.data;
      return {
        ...state,
        multipleData,
      };
    },
    getStepLineDataSuccess(state, action) {
      const { payload: { response } } = action;
      const stepLineData = response.data;
      return {
        ...state,
        stepLineData,
      };
    },
    getBarWorldPeopleSuccess(state, action) {
      const { payload: { response } } = action;
      const barWorldPeopleData = response.data;
      return {
        ...state,
        barWorldPeopleData,
      };
    },
    getNestPieDataSuccess(state, action) {
      const { payload: { response } } = action;
      const pieInnerData = response.pieInnerData;
      const pieOutData = response.pieOutData;
      return {
        ...state,
        pieInnerData,
        pieOutData,
      };
    },
    getPieDataSuccess(state, action) {
      const { payload: { response } } = action;
      const pieData = response.pieData;
      return {
        ...state,
        pieData,
      };
    },
  },
  effects: {
    * getLinePileupData(payload:{ }, { call, put }) {
      const response = yield call(api.getLinePileupData);
      yield put({
        type: 'getLinePileupDataSuccess',
        payload: { response },
      });
    },
    * getMultipleXLineData(payload:{ }, { call, put }) {
      const response = yield call(api.getMultipleXLineData);
      yield put({
        type: 'getMultipleXLineDataSuccess',
        payload: { response },
      });
    },
    * getStepLineData(payload:{ }, { call, put }) {
      const response = yield call(api.getStepLineData);
      yield put({
        type: 'getStepLineDataSuccess',
        payload: { response },
      });
    },
    * getBarWorldPeople(payload:{ }, { call, put }) {
      const response = yield call(api.getBarWorldPeopleData);
      yield put({
        type: 'getBarWorldPeopleSuccess',
        payload: { response },
      });
    },
    * getNestPieData(payload:{ }, { call, put }) {
      const response = yield call(api.getNestPieData);
      yield put({
        type: 'getNestPieDataSuccess',
        payload: { response },
      });
    },
    * getPieData(payload:{ }, { call, put }) {
      const response = yield call(api.getPieData);
      yield put({
        type: 'getPieDataSuccess',
        payload: { response },
      });
    },

  },
  subscriptions: {},
};
