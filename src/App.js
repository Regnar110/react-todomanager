import React, {Component, Fragment} from 'react';
import ListInput from './ListInput';
import {list} from './list.js'
import ListItems from './ListItems';

class App extends Component { // Można pisać bez konstruktora i super() jest to nowy syntax - nie trzeba tworzyć już konstruktora i używać super do dziedziczenia po obiekcie nadrzędnym. Wystarczy tak jak jest tutaj
  constructor() {  
    super();
    this.state = {
      inputField: '',
      listQueue: list
    }
  }
  
  inputValue = (event) => {
    this.setState({inputField: event.target.value})
  }

  submitField = (event) => {
    this.setState({listQueue:list.push(this.state.inputField)}) // zmiana stanu listQueue na to co zostało wprowadzone w inputField - setState to funkcja asynchroniczna
    event.target.parentNode.firstChild.value = ''; // usuwa wartość z pola input po kliknięciu submit
    this.setState({inputField: ''}) //ustawia po submit input field na pustego stringa.
  }


  render() {
    return(
    <Fragment>
    <div className='app-container'>
      <div className='input-container'>
        <h1 className='todo-header'>To Do Manager</h1>
        <ListInput submit={this.submitField} input={this.inputValue}/>
      </div>
      <div className='output-container'>
        <ListItems  itemsArr={list}/>
      </div>
    </div>
    </Fragment>
    )
  }
}

export default App;
