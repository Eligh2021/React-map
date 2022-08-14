import logo from './logo.svg';
import './App.css';
import React from 'react';
import  {setState} from 'react';

class App extends React.Component  {
  state =  {
    value: 'hey'
  }

  onHandleChange = event => {
   console.log(event.target.value)
   this.setState({
    value: event.target.value
  }) 

   }
  onSubmit = event => {
    this.setState({
      value: ''
    })
  }

   render() {
    return (
      <div className="App">
        <header className="App-header">
         <div class="input-group">
          <input onChange={this.onHandleChange} required="" type="text" name="text" autocomplete="off" class="input"/>
          <label class="user-label"></label>
         </div>
            <button  class='name_button' onClick={this.onSubmit} >Clear</button>
            <h3>{this.state.value}</h3>
        </header>
      </div>
    );
   }
}



export default App;
