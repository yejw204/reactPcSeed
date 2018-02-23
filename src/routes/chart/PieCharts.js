/**
 * @file routes/chart/PieCharts.js
 *  饼图页面
 * @author maoquan(maoquan@htsc.com)
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'dva/router';
import { Row, Col, Card } from 'antd';
import { connect } from 'dva';
import './chart.less';
import Chart from '../../components/chart';

const colProps = {
  lg: 12,
  md: 24,
};

const mapStateToProps = state => ({
  pieInnerData: state.chart.pieInnerData,
  pieOutData: state.chart.pieOutData,
  pieData: state.chart.pieData,
});

const mapDispatchToProps = {
  getNestPieData: query => ({
    type: 'chart/getNestPieData',
    payload: query || {},
  }),
  getPieData: query => ({
    type: 'chart/getPieData',
    payload: query || {},
  }),
};

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
export default class PineCharts extends PureComponent {

  static propTypes = {
    location: PropTypes.object.isRequired,
    getNestPieData: PropTypes.func.isRequired,
    getPieData: PropTypes.func.isRequired,
    pieInnerData: PropTypes.array.isRequired,
    pieOutData: PropTypes.array.isRequired,
    pieData: PropTypes.array.isRequired,
  }

  static defaultProps = {
    pieInnerData: [],
    pieOutData: [],
    pieData: [],
  }
  componentWillMount() {
    this.props.getNestPieData();
    this.props.getPieData();
  }
  render() {
    const { pieInnerData, pieOutData, pieData } = this.props;
    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col {...colProps}>
            <Card title="某站点用户访问来源">
              <Chart.Pie data={pieData} />
            </Card>
          </Col>
          <Col {...colProps}>
            <Card title="嵌套环形图">
              <Chart.NestPie innerData={pieInnerData} outerData={pieOutData} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

