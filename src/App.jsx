import React, { Component } from 'react'
import List from './components/List/List'


export default class App extends Component {

  state = { cities: ['Kharkiv', 'Mykolaiv', 'Lviv', 'Poltava'], colorUl: 'lightblue' }

  render() {

    const { cities, colorUl } = this.state;
    return (


      <List list={cities} colorUl={colorUl} />
    )
  }
}
