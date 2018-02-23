/**
 * @file components/chart/LinePileup.js
 *  折线图
 * @author maoquan(maoquan@htsc.com)
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chart from '../../common/IECharts';

export default class LinePileup extends PureComponent {

  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  handleReady() {
  }

  render() {
    const { data } = this.props;
    const options = {
      style: {
        width: '80%',
        height: 200,
      },
      title: {
        show: true,
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      },
      yAxis: {
        type: 'value',
      },
      series: [...data],
    };
    return (
      <Chart
        onReady={this.handleReady}
        option={options}
        resizable
        style={{
          height: '335px',
        }}
      />
    );
  }
}
