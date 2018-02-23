import apiCreator from '../utils/apiCreator';

const api = apiCreator();

export default {

  // 暴露api上的几个底层方法: get / post
  ...api,

  // 获取xx列表
  getList: query => api.get('/test/users', query),

  // 获取xx详情
  getDetail: query => api.get('/test/userDetail', query),

  // 保存xx详情
  saveDetail: query => api.post('/test/saveDetail', query),
    // 获取折线图堆叠数据
  getLinePileupData: query => api.post('/test/linePileupData', query),
    // 获取多X轴数据
  getMultipleXLineData: query => api.post('/test/multipleXlineData', query),
    // 获取StepLine数据
  getStepLineData: query => api.post('/test/stepLineData', query),
    // 获取BarWorldPeople数据
  getBarWorldPeopleData: query => api.post('/test/barWorldPeopleData', query),
    // 获取NestPieData数据
  getNestPieData: query => api.post('/test/nestPieData', query),
    // 获取PieData数据
  getPieData: query => api.post('/test/pieData', query),
};
