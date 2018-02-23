/**
 * @file layouts/Main.js
 * @author maoquan(maoquan@htsc.com)
 */

import React, { PureComponent } from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  routerRedux,
} from 'dva/router';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import _ from 'lodash';

import Tab from '../components/common/Tab';
import { constants } from '../config';
import menuConfig from '../config/menu';

import Header from './Header';
import Footer from './Footer';
import Sider from './Sider';

import Test from '../routes/example/Home';
import TestDetail from '../routes/example/Detail';
import Page from '../routes/example/Page';
import LineCharts from '../routes/chart/LineCharts';
import BarCharts from '../routes/chart/BarCharts';
import PieCharts from '../routes/chart/PieCharts';

import styles from './main.less';
import '../css/skin.less';

// 默认index,从菜单配置中取
const indexMenu = _.find(menuConfig, item => !!item.default);

const Router = ({ match }) => (
  <Switch>
    <Route exact path={`${match.path}example`} component={Test} />
    <Route path={`${match.path}detail/:id`} component={TestDetail} />
    <Route path={`${match.path}menu:id`} component={Page} />
    <Route
      path={`${match.path}charts`}
      render={
        ({ match: chartMatch }) => (
          <Switch>
            <Route
              path={`${chartMatch.path}/charts1`}
              component={LineCharts}
            />
            <Route
              path={`${chartMatch.path}/charts2`}
              component={BarCharts}
            />
            <Route
              path={`${chartMatch.path}/charts3`}
              component={PieCharts}
            />
          </Switch>
        )
      }
    />
    <Redirect to={indexMenu.key} />
  </Switch>
);

Router.propTypes = {
  match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ...state.app,
  loading: state.loading.global,
});

const mapDispatchToProps = {
  push: routerRedux.push,
  switchMenuPopover: () => ({
    type: 'app/switchMenuPopover',
  }),
  switchSider: () => ({
    type: 'app/switchSider',
  }),
  changeOpenKeys: openKeys => ({
    type: 'app/changeOpenKeys',
    payload: { navOpenKeys: openKeys },
  }),
  changeTheme: () => ({
    type: 'app/changeTheme',
  }),
};

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class Main extends PureComponent {

  static propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    menuPopoverVisible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    // 侧栏折叠
    siderFold: PropTypes.bool.isRequired,
    // 是否深色主题
    darkTheme: PropTypes.bool.isRequired,
    useMenuPopover: PropTypes.bool.isRequired,
    navOpenKeys: PropTypes.array.isRequired,

    switchMenuPopover: PropTypes.func.isRequired,
    switchSider: PropTypes.func.isRequired,
    changeOpenKeys: PropTypes.func.isRequired,
    changeTheme: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }

  static defaultProps = {
  }

  render() {
    const {
      location,
      match,
      loading,
      siderFold,
      darkTheme,
      useMenuPopover,
      menuPopoverVisible,
      navOpenKeys,
      // 方法
      push,
      switchMenuPopover,
      switchSider,
      changeOpenKeys,
      changeTheme,
    } = this.props;

    const headerProps = {
      siderFold,
      location,
      useMenuPopover,
      menuPopoverVisible,
      navOpenKeys,
      switchMenuPopover,
      switchSider,
      changeOpenKeys,
      logout() {
        console.log('logout...');
      },
    };

    const siderProps = {
      siderFold,
      darkTheme,
      location,
      navOpenKeys,
      changeTheme,
      changeOpenKeys,
    };

    return (
      <div>
        <Helmet>
          <link rel="icon" href={constants.logoSrc} type="image/x-icon" />
        </Helmet>
        <div
          className={
            classnames(
              styles.layout,
              {
                [styles.fold]: useMenuPopover ? false : siderFold,
                [styles.withnavbar]: useMenuPopover,
              },
            )
          }
        >
          {!useMenuPopover
            ? (
              <aside className={classnames(styles.sider, { [styles.light]: !darkTheme })}>
                <Sider {...siderProps} />
              </aside>
            ) : null
          }
          <div className={styles.main}>
            <Header {...headerProps} />
            <div className={styles.content}>
              <Tab
                location={location}
                push={push}
                loading={loading}
              >{Router({ match })}</Tab>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
