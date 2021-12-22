import styles from './index.less';
import React from 'react';

export default function IndexPage() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.panel}>
          <div className={styles.header}>
            <span>
              <a href="#">主页</a>{' '}
            </span>{' '}
            /<span className={styles.active}>登录</span>
          </div>
          <div className={styles.inner}>
            <form action="" className="loginForm">
              <div className={styles.controlGroups}>
                <div className={styles.labels}>用户名</div>
                <div className={styles.controls}>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.controlGroups}>
                <div className={styles.labels}>密码</div>
                <div className={styles.controls}>
                  <input type="password" />
                </div>
              </div>
              <div className={styles.formAction}>
                <input type="submit" value="登录" />
                <a href="">
                  <span>通过 Github 登录</span>
                </a>
                <a href="">忘记密码了？</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.panel}>
          <div className={styles.header}>
            <span className={styles.colfade}>关于</span>
          </div>
          <div className={styles.inner}>
            <p>CNode：Node.js专业中文社区</p>
            <p>在这里你可以：</p>
            <ul>
              <li>向别人提出你遇到的问题</li>
              <li>帮助遇到问题的人</li>
              <li>分享自己的知识</li>
              <li>和其它人一起进步</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
