/**
 * @file routes/chart/LineCharts.js
 *  折线图页面
 * @author maoquan(maoquan@htsc.com)
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';
import { connect } from 'dva';
import { withRouter } from 'dva/router';

import Chart from '../../components/chart/index';
import './chart.less';

const colProps = {
  lg: 12,
  md: 24,
};

const mapStateToProps = state => ({
  linePileupData: state.chart.linePileupData,
  multipleData: state.chart.multipleData,
  stepLineData: state.chart.stepLineData,
});

const mapDispatchToProps = {
  getLinePileupData: query => ({
    type: 'chart/getLinePileupData',
    payload: query || {},
  }),
  getMultipleXLineData: query => ({
    type: 'chart/getMultipleXLineData',
    payload: query || {},
  }),
  getStepLineData: query => ({
    type: 'chart/getStepLineData',
    payload: query || {},
  }),
};

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
export default class lineCharts extends PureComponent {

  static propTypes = {
    location: PropTypes.object.isRequired,
    getLinePileupData: PropTypes.func.isRequired,
    getMultipleXLineData: PropTypes.func.isRequired,
    getStepLineData: PropTypes.func.isRequired,
    linePileupData: PropTypes.array.isRequired,
    multipleData: PropTypes.array.isRequired,
    stepLineData: PropTypes.array.isRequired,
  }

  static defaultProps = {
    linePileupData: [],
    multipleData: [],
    stepLineData: [],
  }

  componentWillMount() {
    this.props.getLinePileupData();
    this.props.getMultipleXLineData();
    this.props.getStepLineData();
  }

  render() {
    const { linePileupData, multipleData, stepLineData } = this.props;
    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col {...colProps}>
            <Card title="折线图堆叠">
              <Chart.LinePileup data={linePileupData} />
            </Card>
          </Col>
          <Col {...colProps}>
            <Card title="多X轴实例">
              <Chart.MultipleXLine data={multipleData} />
            </Card>
          </Col>
          <Col {...colProps}>
            <Card title="Step Line">
              <Chart.StepLine data={stepLineData} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

