import React from 'react'
import styles from './ContactList.module.css'
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import ContactListItem from '../contactListItem/ContactListItem'


const ContactList = ({contacts, onDelete}) => {
  return (

 <TransitionGroup component='ul' className= {styles.contactData}>
   {contacts.map(({id, name, number}, idx) => 
   <CSSTransition  key={id} timeout={1000} classNames={styles} > 
        <ContactListItem id={id} name={name} number={number} idx={idx} onDelete={onDelete}/>    
   </CSSTransition>
   )
   }
 
 </TransitionGroup>
)
}
 
ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDelete: PropTypes.func.isRequired
};
export default ContactList;

