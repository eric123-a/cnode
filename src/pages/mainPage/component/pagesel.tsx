import React, { useEffect, useState } from "react";
import styles from '../index.less';


export default function Pagesel(props:any) {
    const [page, setpage] = useState(1)
    const [totalpage, settotalpage] = useState([1, 2, 3, 4, 5])

    function changepage(pagen: number) {
        setpage(pagen)
        props.pagechange(pagen)
        const arr =[]
         if(pagen-2>0)
         {
            for (let i = pagen - 2; i < pagen + 3; i++) {
                
                arr.push(i)
            }
        }
        else
         {
             for(let i=1;i<=5;i++)
             {
                 arr.push(i)
             }
         } 
             settotalpage([...arr])
        
       
    }
    return (
        <div className={styles.pagesel}>
            {
                page <= 3 &&
                <>
                    <button className={styles.but_left}>{'<<'}</button>
                    {
                        totalpage.map((item: number) => (
                            <button className={page==item?styles.button_sel:''} key={item} onClick={() => changepage(item)}>&nbsp;{item}&nbsp;</button>
                        ))
                    }
                    <button>...</button>
                    <button className={styles.but_right}>{'>>'}</button>
                </>
            }
            {
                page > 3 && page <= 18 &&
                <>
                    <button className={styles.but_left}>{'<<'}</button>
                    <button>...</button>
                    {
                        totalpage.map((item: number) => (
                            <button className={page==item?styles.button_sel:''} key={item} onClick={() => changepage(item)}>&nbsp;{item}&nbsp;</button>
                        ))
                    }
                    <button>...</button>
                    <button className={styles.but_right}>{'>>'}</button>
                </>
            }
        </div>
    )
}