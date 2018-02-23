/**
 * @file example/Detail.js
 *  xx详情
 * @author maoquan(maoquan@htsc.com)
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { withRouter } from 'dva/router';

import Info from '../../components/example/Info';

const mapStateToProps = state => ({
  detail: state.example.detail,
});

const mapDispatchToProps = {
  getDetail: query => ({
    type: 'example/getDetail',
    payload: query || {},
  }),
  save: query => ({
    type: 'example/save',
    payload: query || {},
  }),
};

@connect(mapStateToProps, mapDispatchToProps)
@withRouter
export default class Profile extends PureComponent {

  static propTypes = {
    getDetail: PropTypes.func.isRequired,
    detail: PropTypes.object,
    save: PropTypes.func.isRequired,
    routeParams: PropTypes.object.isRequired,
  }

  static defaultProps = {
    detail: {},
  }

  componentWillMount() {
    const { routeParams: { id } } = this.props;
    this.props.getDetail({ id });
  }

  render() {
    const { detail, save } = this.props;
    return (
      <div className="page-example-detail">
        <Info
          data={detail}
          save={save}
        />
      </div>
    );
  }
}

