import { ConnectState } from '@/models/connect';
import React from 'react';
import { Layout } from 'antd';
import { connect } from 'umi';
import styles from './index.less';

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
        <div className="navbar-inner">
          <div className="brand">
            <a href="#">
              <img src="../imgs/brand.png" alt="" />
            </a>
          </div>
          <div className="header-search">
            <form action="">
              <input type="text" />
            </form>
          </div>
          <div className="am-navbar-right"></div>
        </div>
      </Header>
      <Layout>
        <Content>{children}</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default connect((state: ConnectState) => ({}))(BasicLayout);
