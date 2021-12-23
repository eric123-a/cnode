import styles from './index.less';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gettopicsId} from '../../services/user'
import ReactDOM from 'react-dom';

export default function IndexPage() {
    const location:any = useLocation();
    const id = location.state.id;
    const [html ,sethtml]=useState('')
    const parser = new DOMParser();
    let doc
    const h=(
        <div>111</div>
    )
    useEffect(()=>{ 
        gettopicsId(id).then((e:any) => {
            sethtml(e.data.content)
            console.log(html)
            doc=parser.parseFromString(html, "text/html"); 
                      console.log(doc)

           document.getElementById('id')!.innerHTML=e.data.content
           
         //   n&&n.appendChild(doc)
    })
   },[id])
 
  return(
    <div id='id'></div>
  )
   
}