
import React, { useState, useEffect  } from 'react'
import { v4 as uuidv4 } from "uuid";
import ContactList from './contactList/ContactList'
import Filter from './filter/Filter'
import ContactEditor from './contactEditor/ContactEditor'
import { CSSTransition } from 'react-transition-group'
import styles from './App.module.css'
import Notification from '../components/notification/Notification'


 
  const App = () => {

  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')
  const [isVisible, setIsVisible] = useState(false);


 

  useEffect (() => {
   localStorage.getItem('contacts') && setContacts(JSON.parse(localStorage.getItem('contacts')))
  }, []);
  

 useEffect (() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])
    

  const getFilter = (e) => {
    setFilter(e.target.value)
  }
  const filterContacts =() => {
    return [...contacts.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase()))]
    }

 
  const addContact = item => {
    const searchName = contacts.map(contact => contact.name).includes(item.name)
    if(searchName) {setTimeout(()=>setIsVisible(true), 500)
    setTimeout(()=>setIsVisible(false), 2000)}
    else {
    setContacts([...contacts, {id: uuidv4(), ...item}])
    
    }
  }
  
  const deleteContact = (e) => {
    const id = e.target.dataset.id;
    setContacts(
      [...contacts.filter(contact=> contact.id !== id) 
    ])
  }
 

    return (
      <>
     
      <Notification isVisible={isVisible}   />
      
    
      <ContactEditor onAddForm={addContact}/>
      <CSSTransition
      in={contacts.length > 1}
      timeout={300}
      classNames={styles}
      unmountOnExit
      >
        <Filter value={filter} onChange={getFilter}/>
      </CSSTransition>
      
     { <ContactList contacts= {filterContacts()} onDelete={deleteContact}/> }
    
    
     
      </>
    )

}

export default App

/* <CSSTransition
      in={isVisible}
      timeout = {250}
      classNames={styles}
      unmountOnExit>
      <Notification  />
      </CSSTransition>*/







/*import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid";
import ContactList from './contactList/ContactList'
import Filter from './filter/Filter'
import ContactEditor from './contactEditor/ContactEditor'

export default class App extends Component {
  state = {
    contacts: [],
    filter:'', 
  }
  
  componentDidMount() {
    if (localStorage.getItem('contacts')) 
    {this.setState({contacts: JSON.parse(localStorage.getItem('contacts'))})}
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))}
    }
    

  setFilter = (e) => {
    this.setState({filter: e.target.value})
  }
  filterContact =() => {
    const {contacts, filter} = this.state
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase()))
    }
  
 
  addContact = (name, number) => {
    const searchName = this.state.contacts.map((contact) => contact.name).includes(name)
    if(searchName) {alert(`${name} is already in contacts`)} 
    else {
    const contact = {
      id: uuidv4(),
      name,
      number
    }
    this.setState(prevState => {
      return{ contacts: [...prevState.contacts, contact]}})
    }
  }

  deleteContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact=> contact.id !== id) 
      }})
  }
  render() {
    const filtredContact = this.filterContact();
    return (
      <>
      <ContactEditor onAddForm={this.addContact}/>
      {this.state.contacts.length && <Filter value={this.state.filter} onChange={this.setFilter}/>}
     {this.state.contacts.length && <ContactList contacts= {filtredContact} onDelete={this.deleteContact}/> }
      
      </>
    )
}
}
*/