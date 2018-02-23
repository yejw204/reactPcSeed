/**
 * @file test/List.js
 * @author maoquan(maoquan@htsc.com)
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import columns from './columns';
import styles from './list.less';

export default class TestList extends PureComponent {

  static propTypes = {
    list: PropTypes.array.isRequired,
  }

  static defaultProps = {
  }

  render() {
    const { list } = this.props;
    return (
      <Table
        className={styles.table}
        rowKey="id"
        columns={columns}
        dataSource={list}
        pagination={{ pageSize: 10 }}
      />
    );
  }
}
