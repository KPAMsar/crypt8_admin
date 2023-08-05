import { ReactNode } from 'react';
import styles from './containerLayout.module.css'

const Container = ({children}:{children: ReactNode})=>{
    return <div className={styles.containerWrapper}>{children }</div>;
}
export default Container;