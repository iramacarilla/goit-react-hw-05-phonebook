import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import ContactEditorElement from '../contactEditorElement/ContactEditorElement'
import Logo from '../logo/Logo'
import styles from '../contactEditor/ContactEditor.module.css'

const initialState = {
  name: '',
  number: '',
}

const ContactEditor = ({onAddForm}) => {

const[state, setState] = useState({...initialState})  

    const onHandelChange = (e) => {
        const {name} = e.target
        setState({...state, [name]: e.target.value})
      }
      
  const  handelSubmit = (e) => {
    e.preventDefault();
    
   onAddForm({name: state.name, number: state.number})
    setState({...initialState})
    }
    
  
        return (
          <div className={styles.phoneBook}>
          <CSSTransition
           in={true}
           appear={true}
           classNames={styles}
           timeout={500}
           unmountOnExit
           > 
           <Logo/>
           </CSSTransition>
          <ContactEditorElement name={state.name} number={state.number} 
          onChange={handelSubmit} onHandelChange={onHandelChange}/>
            </div>   
        )
    
}

export default ContactEditor


/*import React, { Component } from 'react'
import ContactEditorElement from '../contactEditorElement/ContactEditorElement'

export default class ContactEditor extends Component {
    state = {
        name: '',
        number: '',
      }
      onHandelChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
      }
      
    handelSubmit = (e) => {
    e.preventDefault();
    
    this.props.onAddForm(this.state.name, this.state.number)
    this.setState({name: '', number:''})
    }
    
    render() {
        return (
          <ContactEditorElement name={this.state.name} number={this.state.number} 
          onChange={this.handelSubmit} onHandelChange={this.onHandelChange}/>
           
        )
    }
}*/