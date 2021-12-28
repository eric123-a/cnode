import React, { useState } from "react";
import styles from '../index.less';
import { title } from '../type'

export default function Title(props: title) {
    const [select, setSelect] = useState('')
    function Select(num: string) {

        setSelect(num)

        props.settitle(num)
    }
    return (
        <div className={styles.title}>
            <div className={select == '' ? styles.node_sel : styles.node} onClick={() => Select('')}>全部</div>
            <div className={select == 'good' ? styles.node_sel : styles.node} onClick={() => Select('good')}>精华</div>
            <div className={select == 'share' ? styles.node_sel : styles.node} onClick={() => Select('share')}>分享</div>
            <div className={select == 'ask' ? styles.node_sel : styles.node} onClick={() => Select('ask')}>问答</div>
            <div className={select == 'job' ? styles.node_sel : styles.node} onClick={() => Select('job')}>招聘</div>
            <div className={select == 't' ? styles.node_sel : styles.node} onClick={() => Select('t')}>客户端测试</div>
        </div>
    )
}