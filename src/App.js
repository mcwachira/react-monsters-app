import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))


  }


  render() {
    return (
      <>
        {/* passing the state as a prop */}
        <input type="search" placeholder='search monsters'
          onChange={e => {

            this.setState({ searchText: e.target.value })
          }
          }
        // setState is an asynchronous method so we add a callback function to make sure the state has been changed before showing it
        // this.setState({ searchText: e.target.value }, () => console.log(this.state))

        />
        <CardList monsters={this.state.monsters} />

      </>
    );
  }
}

export default App;
