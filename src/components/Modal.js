import React from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.css";
import { FaUserAltSlash, FaUserCheck } from "react-icons/fa";

const Modal = ({ open, onClose , children, message }) => {
  if (!open) return null;
 
  return ReactDom.createPortal(
    <>
      <div className={ styles.overlaystyle }>
        <div className={styles.modalstyle}>
          <div className={styles.header}>{message ? <FaUserCheck className={styles.green} /> : <FaUserAltSlash className={styles.red}/>}</div>
          <div className={styles.body}>{message?'اطلاعات با موفقیت ثبت شده است':' اطلاعات معتبر نیست لطفا فیلدهای مورد نظر را پر کنید'}</div>
          <div className={styles.footer}>
            <button onClick={onClose}>بستن</button>
          </div>
        </div>
      </div>
        
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
