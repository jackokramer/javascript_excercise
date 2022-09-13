import React, { Component } from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

class Home extends Component {
  state = {
    magicNumber: 23,
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.randomMagicNumber(),
      1000
    );
  };

  componentWillUnMount() {
    clearInterval(this.timerID);
  }

  randomMagicNumber = () => {
    return this.setState({
      magicNumber: _.random(100),
    });
  }

  render() {
    return (
      <div className="Home">
          { this.state.magicNumber }
         <ChildOfHome magicNumber={this.state.magicNumber} />
         <ChildOfHomeBrother magicNumber={this.state.magicNumber} />
         <ChildOfHomeSister magicNumber={this.state.magicNumber} />
      </div>
    );
  }
}

class ChildOfHome extends Component {
  render() {
    return (
      <div className="ChildOfHome">
          {this.props.magicNumber}
      </div>
    )
  }
}

class ChildOfHomeBrother extends Component {
  state = {
    magicNumber: 0,
  }

  componentDidMount() {
    this.setState({
      magicNumber: this.props.magicNumber,
    });
  }

  render() {
    return (
      <div className="ChildOfHomeBrother">
          {this.state.magicNumber}
      </div>
    )
  }
}

class ChildOfHomeSister extends Component {
  state = {
    magicNumber: 0,
  }

  componentDidMount() {
    this.setState({
      magicNumber: this.props.magicNumber,
    });
  }

  componentDidUpdate(prevProps){
    if (prevProps !== this.props) {
      this.setState({
        magicNumber: this.props.magicNumber,
      });
    }
  }

  render() {
    return (
      <div className="ChildOfHomeSister">
          {this.state.magicNumber}
      </div>
    );
  }
}

export default Home;
