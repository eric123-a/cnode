import styles from './index.less';
import React, { useDebugValue, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gettopicsId, userdetail, createreplies, ups } from '../../services/user'
import up from '../../imgs/up.png'
import getDateDiff from '../mainPage/component/time'
import { Input } from 'antd';

export default function IndexPage() {
    const location: any = useLocation();
    const id = location.state.id;
    const [html, sethtml] = useState('')
    const [author, setauthor] = useState({ avatar_url: '', loginname: '', score: 1, recent_topics: [] })
    const [topic, settopic] = useState([])
    const [reply, setreply] = useState([])
    const [score, setscore] = useState(0)

    const { TextArea } = Input;
    useEffect(() => {
        gettopicsId(id).then((e: any) => {
            sethtml(e.data.content)
            setauthor(e.data.author)

            setreply(e.data.replies)
            e.data.content !== null ? document.getElementById('id')!.innerHTML = e.data.content : ''

        })

    }, [id])
    useEffect(() => {
        userdetail(author.loginname).then((e: any) => {
            settopic(e.data.recent_topics)
            setscore(e.data.score)

        })
    }, [author])
    function commit(e: any) {
        const data = {
            accesstoken: 'c76c4bd5-773e-43a2-88cb-5767bf3d3b6c',
            content: e.target.value,
        }
        createreplies(id, data).then((e: any) => {
            if(e.success)
            alert('评论成功')
        })
    }
    function toup(id: string, index:number) {

        ups(id, 'c76c4bd5-773e-43a2-88cb-5767bf3d3b6c').then((e: any) => {
            const re: any = reply
            re[index].ups.length = re[index].ups.length + 1
            setreply([...re])
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div id='id' className={styles.main}></div>
                <div><TextArea rows={10} onPressEnter={commit} /></div>
                <div className={styles.reply}>
                    <div className={styles.replynum}>{reply.length}回复</div>
                    {
                        reply && reply.map((item: any, index: number) => {
                            // console.log('1', item.content)
                            if (document.getElementById(item.id) !== null) {
                                document.getElementById(item.id)!.innerHTML = item.content
                            }

                            const time = new Date(item.create_at).getTime()
                            item.time = getDateDiff(time)
                            return (

                                <div className={styles.reply_item} key={item.id} >
                                    <div className={styles.reply_avatar}>
                                        <img src={item.author.avatar_url} width="60px"></img>
                                        <div >{item.author.loginname}</div>
                                        <div className={styles.reply_time}>{index + 1}楼*{item.time}</div>
                                        <div className={styles.up}><img src={up} width="15px" onClick={() => toup(item.id, index)}></img>{item.ups.length}</div>
                                    </div>
                                    <div className={styles.content} id={item.id} ></div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.au}>
                    <div className={styles.author}>
                        作者
                    </div>
                    <div className={styles.name}><img width="50px" src={author.avatar_url}></img><div>{author.loginname}</div></div>
                    <div className={styles.name} style={{ color: '#5A5D5A' }}>积分：{score}</div>
                </div>
                <div className={styles.au}>
                    <div className={styles.author}>
                        作者的其他话题
                    </div>
                    <div className={styles.topic}>{
                        topic.map((item: any) =>
                            <a key={item.id} >{item.title}</a>

                        )

                    }</div>
                </div>
                <div className={styles.au}>
                    <div className={styles.author}>
                        无人回复的话题
                    </div>
                    <div className={styles.topic}>{
                        topic.map((item: any) =>
                            <a key={item.id} >{item.title}</a>

                        )

                    }</div>
                </div>
            </div>

        </div>
    )

}