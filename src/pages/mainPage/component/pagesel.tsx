import React, { useEffect, useState } from "react";
import styles from '../index.less';
import { content } from '../type'
import { gettopics } from '../../../services/user'

export default function Pagesel(){
    const [page,setpage]=useState(1)
    return(
        <div className={styles.pagesel}>
            <div></div>
        </div>
    )
}