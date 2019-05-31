import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import { createStore, combineReducers } from 'redux'
import { colors, sort } from '../reducers'

import AddColorForm from './AddColorForm';
import ColorList from './ColorList';

/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


class App extends Component {

  constructor(props) {
    super(props)

    /*this.state = {
      colors: [
        {
          id: "de11390c-e3e3-44fc-a8b7-01d2a6a83fd2",
          title: "ocean at dusk",
          color: "#440000",
          rating: "4"
        }
      ]
    }*/

    //this.addColor = this.addColor.bind(this)
    //this.rateColor = this.rateColor.bind(this)
    //this.removeColor = this.removeColor.bind(this)


    const defaultState = {
      colors: [
        {
          id: "69546fd1-967e-4c26-b85f-b8f0fefc678c",
          title: "Default color",
          color: "#FF0000",
          rating: "0"
        }
      ]
    }

    
    this.store = createStore(
      combineReducers({colors, sort}), //???
      (localStorage['redux-store']) ?
        JSON.parse(localStorage['redux-store']) :
        defaultState
    )

    this.store.subscribe(() => {
      localStorage['redux-store'] = JSON.stringify(this.store.getState())
    })
    

  }

  getChildContext() {
    return {
      store: this.store
    }
  }

  componentWillMount() {
    this.unsubscribe = this.store.subscribe(
      () => this.forceUpdate()
    )
    
  }

  componentDidMount() {
    //
  }

  componentWillUnmount() {
    this.unsubscribe() //???
  }

  /*addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({colors})
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(color => 
      (color.id !== id) ?
      color : {
        ...color,
        rating
      }
    )
    this.setState({colors})
  }

  removeColor(id) {
    const colors = this.state.colors.filter(
      color => color.id !== id
    )
    this.setState({colors})
  }*/

  render() {
    //const { addColor, rateColor, removeColor } = this
    const { colors } = this.store.getState()
    return (
      <div className="app"> 
        <AddColorForm />
        <ColorList colors={colors} />
      </div>
    )
  }

}

App.childContextTypes = {
  store: PropTypes.object.isRequired
}

export default App;