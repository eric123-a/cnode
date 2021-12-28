import styles from '../aboutPage/index.less';
import React from 'react';
import SideBar from '../aboutPage/sidebar';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.pannel}>
          <div className={styles.header}>
            <span>
              <a href="#">主页</a>{' '}
            </span>{' '}
            /<span className={styles.active}>Node.js 新手入门</span>
          </div>
        </div>
        <div className={styles.topicContent}>
          <div className={styles.innertopic}>
            <h3>Node.js 入门</h3>
            <p>
              《 <strong>汇智网 Node.js 课程</strong> 》
            </p>
            <p>
              <a href="http://www.hubwiz.com/course/?type=nodes">
                http://www.hubwiz.com/course/?type=nodes
              </a>
            </p>
            <p>
              《 <strong>快速搭建 Node.js 开发环境以及加速 npm</strong> 》
            </p>
            <p>
              <a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">
                http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html
              </a>
            </p>
            <p>
              《 <strong>Node.js 包教不包会</strong> 》
            </p>
            <p>
              <a href="https://github.com/alsotang/node-lessons">
                https://github.com/alsotang/node-lessons
              </a>
            </p>
            <p>
              《 <strong>ECMAScript 6入门</strong> 》
            </p>
            <p>
              <a href="http://es6.ruanyifeng.com/">
                http://es6.ruanyifeng.com/
              </a>
            </p>
            <p>
              《 <strong>七天学会NodeJS</strong> 》
            </p>
            <p>
              <a href="https://github.com/nqdeng/7-days-nodejs">
                https://github.com/nqdeng/7-days-nodejs
              </a>
            </p>
            <p>
              《 <strong>Node入门-一本全面的Node.js教程</strong> 》
            </p>
            <p>
              <a href="http://www.nodebeginner.org/index-zh-cn.html">
                http://www.nodebeginner.org/index-zh-cn.html
              </a>
            </p>

            <h3 className={styles.secondP}>Node.js 资源</h3>
            <p>
              《 <strong>node weekly</strong> 》
            </p>
            <p>
              <a href="http://nodeweekly.com/issues">
                http://nodeweekly.com/issues
              </a>
            </p>
            <p>
              《 <strong>node123-node.js中文资料导航</strong> 》
            </p>
            <p>
              <a href="https://github.com/youyudehexie/node123">
                https://github.com/youyudehexie/node123
              </a>
            </p>
            <p>
              《{' '}
              <strong>
                A curated list of delightful Node.js packages and resources
              </strong>{' '}
              》
            </p>
            <p>
              <a href="https://github.com/sindresorhus/awesome-nodejs">
                https://github.com/sindresorhus/awesome-nodejs
              </a>
            </p>
            <p>
              《 <strong>Node.js Books</strong> 》
            </p>
            <p>
              <a href="https://github.com/pana/node-books">
                https://github.com/pana/node-books
              </a>
            </p>

            <h3 className={styles.secondP}>Node.js 名人</h3>
            <p>
              《 <strong>名人堂</strong> 》
            </p>
            <p>
              <a href="https://github.com/cnodejs/nodeclub/wiki/名人堂">
                https://github.com/cnodejs/nodeclub/wiki/名人堂
              </a>
            </p>
            <h3 className={styles.secondP}>Node.js 服务器</h3>
            <p>
              《 <strong>名人堂</strong> 》
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
      </div>
      <div className={styles.rightContent}>
        <SideBar></SideBar>
      </div>
    </div>
  );
}
