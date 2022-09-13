import React, { Component } from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

let makeUpater = apply => key => state =>{
  return{
    [key]: apply(state[key])
    }
  }

  const toggleKey = makeUpater(previous =>!previous)
  const incrementCounter = makeUpater(previous => previous +1)

class Home extends Component {
  state = {
    firstName: '',
    lastName: '',
    isValid: false,
    counter: 0
  }

  logFields=() => {
    const {firstName, lastName} = this.state;
    console.log('Fullname: ', `${firstName} ${lastName}`)
  }
  handleFormChange= (e) =>{
    const {name, value} = e.target
    this.setState({
      [name]: value
    }, ()=> {this.logFields()})
    this.handleCounter()
    //this.logFields()
  }
  handleCounter= () =>{
    this.setState(incrementCounter('counter'))
  }

  handleIsValid= (e) =>{
    this.setState(state =>{
      return {
        isValid: !state.isValid
      }
    })
    this.handleCounter()
  }

toggleKey = key => state =>{
  return {
    [key]: !state[key]
  }
}
incrementCounter = key => state =>{
  return{
    [key]: state[key] +1,
  }
}
handleIsValid = () => {
  this.setState(toggleKey('isValid'))
  this.handleCounter()
}

renderButtonColor= () =>{
  return this.state.isValid ?
  'btn btn-danger' : 'btn btn-success'
}

  toggleIsValid = state =>{
    return{
      isValid: !state.isValid
    }
  }



  render(){
    return (
      <div className="Home mt-3 text-center">
        <h2>How to setState in react</h2>
          <h5>by Jackokramer</h5>
          <hr/>
          <div className="my-3">
            <h3>User Info</h3>
            <div>First Name: {this.state.firstName}</div>
            <div> Last Name: {this.state.lastName}</div>
            <hr/>
            <div className="my-3">
              <h5>Form</h5>
              <div className="form-group">
                <label for='firstName'>First Name: </label>
                <input className='ml-2' type="text" name="firstName" onChange={this.handleFormChange}/>
                <br/>
                <label for='lastName'>Last Name: </label>
                <input className='ml-2' type="text" name="lastName" onChange={this.handleFormChange}/>
                <br/>
                <button className='ml-2'>Render</button>
              </div>
          </div>
      </div>
      </div>
    )
  }
}

export default Home;
