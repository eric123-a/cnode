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
      <Header className={styles.header}>header</Header>
      <Layout>
        <Content>{children}</Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default connect((state: ConnectState) => ({}))(BasicLayout);
