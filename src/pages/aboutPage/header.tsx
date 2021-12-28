import styles from './index.less';
import React from 'react';

interface Iprop {
  title: string;
}
export default function sideHeader(props: Iprop) {
  return (
    <div className={styles.header}>
      <span className={styles.colfade}>{props.title}</span>
    </div>
  );
}
