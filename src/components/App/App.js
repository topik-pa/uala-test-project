import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

import { createStore, combineReducers } from 'redux'
import { colors, sort } from '../../utils'

import PageTemplate from '../PageTemplate/PageTemplate';

import AddColorForm from './AddColorForm/AddColorForm';
import ColorList from './ColorList/ColorList';


class App extends Component {

  constructor(props) {
    super(props)

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

  render() {
    const { colors } = this.store.getState()
    return (
      <PageTemplate>
      <div className="app"> 
        <AddColorForm />
        <ColorList colors={colors} />
      </div>
      </PageTemplate>
    )
  }

}

App.childContextTypes = {
  store: PropTypes.object.isRequired
}

export default App;