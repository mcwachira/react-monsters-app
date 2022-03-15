import React, { Component } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchText: "",
    };

    // binding the function  to the context of the this keyword of the constructor
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))


  }


  // handleChange(e) {
  //   this.setState({ searchText: e.target.value })
  // }


  //arrow functions dont have their own this keyword so its bound to the this context fo the place its defined
  handleChange = (e) => {
    this.setState({ searchText: e.target.value })
  }
  render() {

    //destructuring the monster and searchText state
    const { monsters, searchText } = this.state;



    //using filter array method to filter out monsters based on the searchText
    const filteredMonster = monsters.filter((monster) => monster.name.toLowerCase().includes(searchText.toLowerCase())

    )
    return (
      <div className='App'>
        {/* passing the state as a prop */}

        <h1>
          Monsters App
        </h1>

        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonster} />

      </div>
    );
  }
}

export default App;
