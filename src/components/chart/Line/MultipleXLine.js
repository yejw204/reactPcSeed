/**
 * @file components/chart/MultipleXLine.js
 *  折线图
 * @author maoquan(maoquan@htsc.com)
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chart from '../../common/IECharts';

export default class MultipleXLine extends PureComponent {

  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    const { data } = this.props;
    const colors = ['#5793f3', '#d14a61', '#675bba'];
    const options = {
      color: colors,
      title: {
        show: true,
      },
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        data: ['2015 降水量', '2016 降水量'],
      },
      grid: {
        top: 70,
        bottom: 50,
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[1],
            },
          },
          axisPointer: {
            label: {
              formatter(params) {
                return `降水量  ${params.value
                                   }${params.seriesData.length ? `：${params.seriesData[0].data}` : ''}`;
              },
            },
          },
          data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
        },
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[0],
            },
          },
          axisPointer: {
            label: {
              formatter(params) {
                return `降水量  ${params.value
                                   }${params.seriesData.length ? `：${params.seriesData[0].data}` : ''}`;
              },
            },
          },
          data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
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
