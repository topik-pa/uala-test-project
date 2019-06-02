import React from 'react';
import { Component } from 'react';
import fetch from 'isomorphic-fetch'

import PageTemplate from '../PageTemplate/PageTemplate'



class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      countryNames: [],
      loading: false
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('https://restcountries.eu/rest/v1/all')
      .then(response => response.json())
      .then(json => json.map(country => country.name))
      .then(countryNames => this.setState({countryNames, loading: false}))
  }

  componentWillUnmount() {
  }

  render() {
    const { countryNames, loading } = this.state
    return (
      <PageTemplate>
        {
        (loading) ?
        <div>loading...</div> :
        (!countryNames.length) ?
        <div>no counties</div> :
        <ul>
          {countryNames.map(
            (x,i) => <li key={i}>{x}</li>
          )}
        </ul>
        }
      </PageTemplate>
    )    
  }

}


export default About;