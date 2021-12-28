import React, { useEffect, useState } from "react";
import styles from '../index.less';


export default function Pagesel(props: any) {
    console.log(props)
    const [page, setpage] = useState(1)
    const [totalpage, settotalpage] = useState([1, 2, 3, 4, 5])
   
    
    function changepage(pagen: number) {
        setpage(pagen)
        props.pagechange(pagen)
        const arr = []
        if (pagen - 2 > 0) {
            for (let i = pagen - 2; i < pagen + 3; i++) {

                arr.push(i)
            }
        }
        else {
            for (let i = 1; i <= 5; i++) {
                arr.push(i)
            }
        }
        settotalpage([...arr])


    }
    function last(e: number) {
        if (e !== 0) {
            setpage(e)
            changepage(e)
        }
    }
    function next(e: number) {

        setpage(e)
        changepage(e)

    }
    useEffect(() => {
       
        setpage(1)
        changepage(1)
    }, [props.tab])
    return (
        <div className={styles.pagesel}>
            {
                page <= 3 &&
                <>
                    <button className={styles.but_left} onClick={() => last(page - 1)}>{'<<'}</button>
                    {
                        totalpage.map((item: number) => (
                            <button className={page == item ? styles.button_sel : ''} key={item} onClick={() => changepage(item)}>&nbsp;{item}&nbsp;</button>
                        ))
                    }
                    <button>...</button>
                    <button className={styles.but_right} onClick={() => next(page + 1)}>{'>>'}</button>
                </>
            }
            {
                page > 3 && page <= 18 &&
                <>
                    <button className={styles.but_left} onClick={() => last(page - 1)}>{'<<'}</button>
                    <button>...</button>
                    {
                        totalpage.map((item: number) => (
                            <button className={page == item ? styles.button_sel : ''} key={item} onClick={() => changepage(item)}>&nbsp;{item}&nbsp;</button>
                        ))
                    }
                    <button>...</button>
                    <button className={styles.but_right} onClick={() => next(page + 1)}>{'>>'}</button>
                </>
            }
            {
                page > 18 &&
                <>
                    <button className={styles.but_left} onClick={() => last(page - 1)}>{'<<'}</button>
                    <button>...</button>
                    {
                        totalpage.map((item: number) => (
                            <button className={page == item ? styles.button_sel : ''} key={item} onClick={() => changepage(item)}>&nbsp;{item}&nbsp;</button>
                        ))
                    }
                    <button>...</button>
                    <button className={styles.but_right} onClick={() => next(page + 1)}>{'>>'}</button>
                </>
            }
        </div>
    )
}