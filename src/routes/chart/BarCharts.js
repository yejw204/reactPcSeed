/**
 * @file routes/chart/BarCharts.js
 *  柱状图页面
 * @author maoquan(maoquan@htsc.com)
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'dva/router';
import { connect } from 'dva';
import { Row, Col, Card } from 'antd';
import './chart.less';
import Chart from '../../components/chart/index';

const colProps = {
  lg: 12,
  md: 24,
};

const mapStateToProps = state => ({
  barWorldPeopleData: state.chart.barWorldPeopleData,
});

const mapDispatchToProps = {
  getBarWorldPeople: query => ({
    type: 'chart/getBarWorldPeople',
    payload: query || {},
  }),
};

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
export default class BarCharts extends PureComponent {
  static propTypes = {
    location: PropTypes.object.isRequired,
    getBarWorldPeople: PropTypes.func.isRequired,
    barWorldPeopleData: PropTypes.array.isRequired,
  }

  static defaultProps = {
    BarWorldPeople: [],
  }

  componentWillMount() {
    this.props.getBarWorldPeople();
  }

  render() {
    const { barWorldPeopleData } = this.props;
    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col {...colProps}>
            <Card title="世界人口总量">
              <Chart.BarWorldPeople data={barWorldPeopleData} />
            </Card>
          </Col>
          <Col {...colProps}>
            <Card title="柱状图动画延迟">
              <Chart.BarFlash />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

