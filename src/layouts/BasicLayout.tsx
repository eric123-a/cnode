import { ConnectState } from '@/models/connect';
import React from 'react';
import { Layout } from 'antd';
import { connect } from 'umi';
import logo from '../imgs/brand.svg';
import styles from './index.less';
import digitalocean from '../imgs/digitalocean.png';
import qiniu from '../imgs/qiniu.png';
import { history } from 'umi';

const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;

interface BasicProps {
  children: React.ReactNode;
}
function BasicLayout({ children }: BasicProps) {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.navbarLeft}>
            <div className={styles.brand}>
              <a href="#">
                <img width="120px" src={logo} alt="" />
              </a>
            </div>
            <div className={styles.headerSearch}>
              <form action="" className={styles.headerSearch}>
                <input type="text" />
              </form>
            </div>
          </div>
          <div className={styles.navbarRight}>
            <ul>
              <li>
                <a href="/">首页</a>
              </li>
              <li>
                <a onClick={() => history.push('/getStart')}>新手入门</a>
              </li>
              <li>
                <a>API</a>
              </li>
              <li>
                <a onClick={() => history.push('/about')}>关于</a>
              </li>
              <li>
                <a>注册</a>
              </li>
              <li>
                <a onClick={() => history.push('/login')}>登录</a>
              </li>
            </ul>
          </div>
        </div>
      </Header>
      <Layout className={styles.mainbody}>
        <Content>{children}</Content>
      </Layout>
      <Footer className={styles.Footer}>
        <div className={styles.footMain}>
          <div className={styles.links}>
            <a href="">RSS</a> | <a href="">源码地址</a>
          </div>
          <div className={styles.colFoots}>
            <p>
              CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
              的技术研究。
            </p>
            <p>
              <p>服务器搭建在 </p>
              <a href="#">
                <img src={digitalocean} width="92" alt="" />
              </a>
              <p> , 存储赞助商为 </p>
              <a href="#">
                <img src={qiniu} alt="" width="115" />
              </a>
            </p>
            <p>
              新手搭建 Node.js 服务器，推荐使用无需备案的
              <a href="https://www.digitalocean.com/">
                {' '}
                DigitalOcean(https://www.digitalocean.com/)
              </a>
            </p>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default connect((state: ConnectState) => ({}))(BasicLayout);
