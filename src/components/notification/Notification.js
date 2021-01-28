import React from 'react'
import styles from './Notification.module.css'
import { CSSTransition } from 'react-transition-group'

const Notification = ({isVisible}) => {
    return (
        <CSSTransition
        in={isVisible}
        timeout = {250}
        classNames={styles}
        unmountOnExit>
        <div className={styles.notification} >
        Contact already exists
        </div>
        </CSSTransition>
        
    )
}

export default Notification
