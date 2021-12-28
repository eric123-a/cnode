import styles from './index.less';
import React, { useState } from 'react';
import Title from './component/title'
import Content from './component/content';
import Pagesel from './component/pagesel';
import logo1 from '../../imgs/side1.png';
import logo2 from '../../imgs/golangtc-logo.png';
import logo3 from '../../imgs/phphub-logo.png';



export default function IndexPage() {
  const [title, setTitle] = useState('')
  const [pram, setPram] = useState({
    page: 1,
    tab: '',
    limit: 30,
    mdrender: 'true'
  })
  function setdata(e: string) {
    setTitle(e)
    // console.log(title)
    setPram({ ...pram, tab: e,page:1 })

    //console.log(pram)
  }
  function pagechange(page: number) {

    setPram({ ...pram, page: page })
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Title settitle={setdata} />
        <Content num={pram} />
        <div className={styles.page}>
          <Pagesel pagechange={pagechange} tab={title}/>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.login}>
          <div className={styles.text}>
            <div className={styles.head}>CNode：Node.js专业中文社区</div>
            <div style={{ margin: '5px' }}>您可以 <a href='/login' className={styles.login_a} style={{ color: "#E1E1E1" }} >登录</a> 或 <a className={styles.login_a} style={{ color: "#E1E1E1" }}>注册 </a>, 也可以</div>
            <button className={styles.but}>通过Github登录</button>
          </div>
        </div>
        <div className={styles.nobody}>
          <div >无人回复的话题</div>
          <a style={{ color: "#474747" }}>Tin工具测评：一键试用 TYK API 网关</a>
          <a style={{ color: "#474747" }}>不想安装环境，我如何与前端工程师远程...</a>
          <a style={{ color: "#474747" }}>原型链黑魔法</a>
          <a style={{ color: "#474747" }}>只需要浏览器，多个手机电脑轻松直连互...</a>
          <a style={{ color: "#474747" }}>前端直接访问第三方服务，存放token是否...</a>
        </div>
        <div className={styles.nobody}>
          <div >积分榜<a style={{ color: "#33338F" }}> TOP 100 {'>>'}</a></div>
          <a style={{ color: "#474747" }}>23035 i5ting</a>
          <a style={{ color: "#474747" }}>15840 alsotang</a>
          <a style={{ color: "#474747" }}>10170 atian25</a>
          <a style={{ color: "#474747" }}>9350 leapon</a>
        </div>
        <div className={styles.nobody}>
          <div >友情社区</div>
          <ul>
            <li>
              <a href="https://ruby-china.org/">
                <img src={logo1} alt="" width="150px" />
              </a>
            </li>
            <li>
              <a href="http://mojang.com/">
                <img src={logo2} alt="" width="150px" />
              </a>
            </li>
            <li>
              <a href="https://learnku.com/laravel">
                <img src={logo3} alt="" width="150px" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.scan_main}>
          <div className={styles.scan_tit}>客户端二维码</div>
          <div className={styles.scan}>
            <img
              src="https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"
              width="200px"
            />
            <br />
            <a
              className={styles.login_a}
              style={{ color: "#E1E1E1" }}
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
