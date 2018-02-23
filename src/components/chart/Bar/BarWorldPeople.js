/**
 * @file components/chart/Bar/BarWorldPeople.js
 * @author maoquan(maoquan@htsc.com)
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chart from '../../common/IECharts';

export default class BarWorldPeople extends PureComponent {

  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  static defaultProps = {
  }

  render() {
    const { data } = this.props;
    const options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['2011年', '2012年'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
      },
      series: [...data],
    };

    return (
      <Chart
        option={options}
        resizable
        style={{
          height: '335px',
        }}
      />
    );
  }
}
