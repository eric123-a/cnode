import React, { useEffect, useState } from "react";
import styles from '../index.less';
import { content } from '../type'
import { gettopics } from '../../../services/user'
import { Link } from 'umi';
import {useHistory} from 'react-router-dom';
import getDateDiff from './time'

export default function Content(props: content) {
    const [data,setdata]=useState([])
    
    useEffect(()=>{ 
        gettopics(props.num).then((e) => {
        setdata(e.data)
        console.log('data',data)
    })
   },[props])
   
    function tab(good:boolean,title:string){
        if(good) return '精华'
        switch (title) {
            case 'ask':
                return '问答'
            case 'share':
                return '分享'
            case 'job':
                return '招聘'
            default:
                break;
        }
    }
    const history=useHistory()
    function link(id:string){
       
        history.push({
            pathname: "/topic",
            state: {id: id}
            });
    }
    return (
        <div className="main">
            {
                data.map((item: any) =>
                {
                   
                    const last=new Date(item.last_reply_at).getTime()
                    item.reply_time=getDateDiff(last)
                   
                   return( <div key={item.id} className={styles.content}>
                        <img src={item.author.avatar_url} className={styles.avat}/>
                       <div className={styles.reply}><div className={styles.reco}>{item.reply_count}</div>/<div className={styles.vis}>{item.visit_count}</div></div>
                        <div className={item.top||item.good?styles.top:styles.other}>
                            {
                               item.top?'置顶':tab(item.good,item.tab)
                            }
                        </div>
                        <a   className={styles.tit} style={{color:"black"}} onClick={()=>link(item.id)}>{item.title}</a>
                        <div className={styles.last_reply}>{
                        
                        item.reply_time
                        
                        }</div>
                    </div>)
                }
                )
            }

        </div>
    )
}