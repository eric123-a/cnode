import styles from './index.less';
import React, { useDebugValue, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  gettopicsId,
  userdetail,
  createreplies,
  ups,
} from '../../services/user';
import up from '../../imgs/up.png';
import getDateDiff from '../mainPage/component/time';
import { Input } from 'antd';

export default function IndexPage() {
  const location: any = useLocation();
  const id = location.state.id;
  const [html, sethtml] = useState('');
  const [author, setauthor] = useState({
    avatar_url: '',
    loginname: '',
    score: 1,
    recent_topics: [],
  });
  const [topic, settopic] = useState([]);
  const [reply, setreply] = useState([]);
  const [score, setscore] = useState(0);
  const [istop, setistop] = useState(false);
  const [title, settitle] = useState('');
  const [det, setdet] = useState({
    create_at: '',
    tab: '',
    visit_count: 0,
    last_reply_at: '',
  });

  const { TextArea } = Input;
  useEffect(() => {
    gettopicsId(id).then((e: any) => {
      sethtml(e.data.content);
      setauthor(e.data.author);
      console.log('dat', e.data.content);
      setreply(e.data.replies);
      setistop(e.data.top);

      settitle(e.data.title);
      const cretime: string = getDateDiff(new Date(e.data.create_at).getTime());
      const last_time: string = getDateDiff(
        new Date(e.data.last_reply_at).getTime(),
      );
      let tab = '';
      switch (e.data.tab) {
        case 'ask':
          tab = '问答';
          break;
        case 'share':
          tab = '分享';
          break;
        case 'job':
          tab = '招聘';
          break;
        default:
          break;
      }
      setdet({
        create_at: cretime,
        tab: tab,
        visit_count: e.data.visit_count,
        last_reply_at: last_time,
      });
      e.data.content !== null
        ? (document.getElementById('id')!.innerHTML = e.data.content)
        : '';
    });
  }, [id]);
  useEffect(() => {
    console.log(author);
    userdetail(author.loginname).then((e: any) => {
      settopic(e.data.recent_topics);
      setscore(e.data.score);
    });
  }, [author]);
  function commit(e: any) {
    const data = {
      accesstoken: 'c76c4bd5-773e-43a2-88cb-5767bf3d3b6c',
      content: e.target.value,
    };
    createreplies(id, data).then((e: any) => {
      if (e.success) {
        alert('评论成功');
        window.location.reload();
      }
    });
  }
  function toup(id: string, index: number) {
    ups(id, 'c76c4bd5-773e-43a2-88cb-5767bf3d3b6c').then((e: any) => {
      const re: any = reply;
      re[index].ups.length = re[index].ups.length + 1;
      setreply([...re]);
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>
          <div className={styles.toptit}>
            {' '}
            {istop && <div className={styles.istop}>置顶</div>}
            <div
              style={{
                marginLeft: '7px',
                width: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              <b>{title}</b>
            </div>
          </div>
          <div className={styles.det}>
            *发布于{det.create_at}*作者{author.loginname}*{det.visit_count}
            次浏览*来自{det.tab}
          </div>
        </div>
        <div id="id" className={styles.main}></div>
        <div style={{ marginTop: '10px' }}>
          <TextArea rows={10} onPressEnter={commit} />
        </div>
        <div className={styles.reply}>
          <div className={styles.replynum}>{reply.length}回复</div>
          {reply &&
            reply.map((item: any, index: number) => {
              if (document.getElementById(item.id) !== null) {
                document.getElementById(item.id)!.innerHTML = item.content;
              }

              const time = new Date(item.create_at).getTime();
              item.time = getDateDiff(time);
              return (
                <div className={styles.reply_item} key={item.id}>
                  <div className={styles.reply_avatar}>
                    <img
                      src={item.author.avatar_url}
                      width="30px"
                      className={styles.reply_ava}
                    ></img>
                    <div>{item.author.loginname}</div>
                    <div className={styles.reply_time}>
                      {index + 1}楼*{item.time}
                    </div>
                    <div className={styles.up}>
                      <img
                        src={up}
                        width="15px"
                        onClick={() => toup(item.id, index)}
                      ></img>
                      {item.ups.length}
                    </div>
                  </div>
                  <div className={styles.content} id={item.id}></div>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.au}>
          <div className={styles.author}>作者</div>
          <div className={styles.name}>
            <img width="50px" src={author.avatar_url}></img>
            <div>{author.loginname}</div>
          </div>
          <div className={styles.name} style={{ color: '#5A5D5A' }}>
            积分：{score}
          </div>
        </div>
        <div className={styles.au}>
          <div className={styles.author}>作者的其他话题</div>
          <div className={styles.topic}>
            {topic.map((item: any) => (
              <a key={item.id}>{item.title}</a>
            ))}
          </div>
        </div>
        <div className={styles.au}>
          <div className={styles.author}>无人回复的话题</div>
          <div className={styles.topic}>
            {topic.map((item: any) => (
              <a key={item.id}>{item.title}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
