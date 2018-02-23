/**
 * @file components/chart/Pie/NestPie.js
 *  嵌套饼图
 * @author maoquan(maoquan@htsc.com)
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Chart from '../../common/IECharts';

export default class NestPie extends PureComponent {

  static propTypes = {
    innerData: PropTypes.array.isRequired,
    outerData: PropTypes.array.isRequired,
  }

  render() {
    const { innerData, outerData } = this.props;
    const options = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他'],
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],

          label: {
            normal: {
              position: 'inner',
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [...innerData],
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '55%'],

          data: [...outerData],
        },
      ],
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
