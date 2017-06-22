import React, { Component } from 'react';
import './App.css';
import Main from '../Components/Main';
import User from '../Components/User';
import {connect} from 'react-redux';
import {setName, setAge} from '../Actions/userActions';
import {add, subtract} from '../Actions/mathActions';

class App extends Component {
 render() {
	return (
	  <div className="App">
		<div className="App-header">
		  <Main clicked={this.props.setName}/>
		  <User detail={this.props.user.name} />
		  <div>{this.props.user.age}</div>
		  <div>
			  <button onClick={() => this.props.add(5)}>Add 5</button>
			  <button onClick={() => this.props.subtract(5)}>Subtract 5</button>
			  <div style={{color: '#ff0000'}}> The value is : {this.props.math.value}</div>
		  </div>
		</div>
	  </div>
	);
  }
}
// taking state from the redux and creating a local `prop` object
const mapStateToProps = (state) => {
	return {
		math : state.math,
		user : state.user
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setName : (name) => {
			dispatch(setName(name));
		},
		setAge : (age) => {
			dispatch(setAge(age));
		},
		add : (num) => {
			dispatch(add(num));
		},
		subtract : (num) => {
			dispatch(subtract(num));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);






