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
    limit: 20,
    mdrender: 'true'
  })
  function setdata(e: string) {
    setTitle(e)
   // console.log(title)
    setPram({ ...pram, tab: e })
   //console.log(pram)
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Title settitle={setdata} />
        <Content num={pram} />
        <Pagesel />
      </div>
      <div className={styles.right}>
        <div className={styles.login}>
          <div className={styles.text}>
            <div className={styles.head}>CNode：Node.js专业中文社区</div>
            <div style={{margin:'5px'}}>您可以 <a style={{color:"#E1E1E1"}}>登录</a> 或 <a style={{color:"#E1E1E1"}}>注册 </a>, 也可以</div>
            <button>通过Github登录</button>
          </div>
        </div>
        <div className={styles.nobody}>
             <div >无人回复的话题</div>
             <a style={{color:"#E1E1E1"}}>11111</a>
             <a style={{color:"#E1E1E1"}}>2222</a>
             <a style={{color:"#E1E1E1"}}>11111</a>
             <a style={{color:"#E1E1E1"}}>11111</a>
             <a style={{color:"#E1E1E1"}}>11111</a>
        </div>
        <div className={styles.nobody}>
             <div >积分榜<a style={{color:"#33338F"}}> TOP 100 {'>>'}</a></div>
             <a style={{color:"#E1E1E1"}}>11111</a>
             <a style={{color:"#E1E1E1"}}>2222</a>
             <a style={{color:"#E1E1E1"}}>11111</a>
             <a style={{color:"#E1E1E1"}}>11111</a>
        </div>
        <div className={styles.nobody}>
             <div >友情社区</div>
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
        <div className={styles.nobody}>
             <div >客户端二维码</div>
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
  );
}
