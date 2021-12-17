import styles from './index.less';
import React from 'react';
import SideHeader from './header';

import logo1 from '../../imgs/side1.png';
import logo2 from '../../imgs/golangtc-logo.png';
import logo3 from '../../imgs/phphub-logo.png';

export default function sideHeader() {
  return (
    <div className={styles.pannel}>
      <div className={styles.sideblock}>
        <div className={styles.inner}>
          <p>CNode：Node.js专业中文社区</p>
          <div>
            您可以
            <a> 登录 </a>或<a> 注册 </a>, 也可以
            <a>
              <span className={styles.spanInfo}>通过 GitHub 登录</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.sideblock}>
        <SideHeader title="友情社区"></SideHeader>
        <div className={styles.inner}>
          <ul>
            <li>
              <a href="">
                <img src={logo1} alt="" width="150px" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={logo2} alt="" width="150px" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={logo3} alt="" width="150px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.sideblock}>
        <SideHeader title="客户端二维码"></SideHeader>
        <div className={styles.inner}>
          <div className={styles.download}>
            <img
              src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"
              width="200px"
            />
            <br />
            <a
              href="https://github.com/soliury/noder-react-native"
              target="_blank"
              rel="noreferrer"
            >
              客户端源码地址
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
