import React from 'react';
import styles from './LoginSignup.module.css'

const LoginSignup = ({login,signup}) => {
    return (
        <div className={styles.container}>
            <a href='#' onClick={login}><div className={styles.link}>ورود</div></a>
            <a href='#' onClick={signup}><div  className={styles.link}>ثبت نام</div></a>
            {/* <div className={styles.link}><a href='#' onClick={login}>ورود</a></div>
            <div className={styles.link}><a href='#'onClick={signup}>ثبت نام</a></div> */}
            {/* <button className={styles.btn} onClick={login}>ورود</button>
            <button className={styles.btn} onClick={signup}>ثبت نام</button> */}
           
        </div>
    );
};

export default LoginSignup;
//
//