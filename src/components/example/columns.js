/**
 * @file test/List.js
 * @author maoquan(maoquan@htsc.com)
 */

import React from 'react';
import { Link } from 'dva/router';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (name, item) => (
      <Link to={`/example/detail/${item.id}`}>{item.name}</Link>
    ),
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '操作',
    key: 'action',
    render: item => (
      <Link to={`/example/detail/${item.id}`}>修改</Link>
    ),
  },
];

export default columns;
