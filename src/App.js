import React, { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  const [monsters, setMonsters] = useState([])
  const [searchText, setSearchText] = useState("");
  const [filteredMonster, setFilteredMonster] = useState(monsters)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchText)
    });
    setFilteredMonster(newFilteredMonster);

  }, [monsters, searchText]);

  const handleChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    setSearchText(searchField)
  }



  return (
    <div className='App'>

      <h1>
        Monsters App
      </h1 >

      <SearchBox
        placeholder='search monsters'
        onChangeHandler={handleChange}
      />

      <CardList monsters={filteredMonster} />

    </div >


  );



}
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       monsters: [],
//       searchText: "",
//     };

//     // binding the function  to the context of the this keyword of the constructor
//     // this.handleChange = this.handleChange.bind(this)
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(users => this.setState({ monsters: users }))


//   }


//   // handleChange(e) {
//   //   this.setState({ searchText: e.target.value }) 
//   // }


//   //arrow functions dont have their own this keyword so its bound to the this context fo the place its defined
//   handleChange = (e) => {
//     setSearchText({ searchText: e.target.value })
//     // this.setState({ searchText: e.target.value })
//   }
//   render() {

//     //destructuring the monster and searchText state
//     const { monsters, searchText } = this.state;


//     const { handleChange } = this;

//     //using filter array method to filter out monsters based on the searchText
//     const filteredMonster = monsters.filter((monster) => monster.name.toLowerCase().includes(searchText.toLowerCase())

//     )
//     return (
//       <div className='App'>
//         {/* passing the state as a prop */}

//         <h1>
//           Monsters App
//         </h1>

//         <SearchBox
//           placeholder='search monsters'
//           onChangeHandler={handleChange}
//         />

//         <CardList monsters={filteredMonster} />

//       </div>
//     );
//   }
// }

export default App;
