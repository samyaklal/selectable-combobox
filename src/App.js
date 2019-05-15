import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      games: ['CandyEat', 'OnionsPick', 'FannyDuck', 'Click-o-wisp', 'Counter Strike'],
      search: ''
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  toggleDropDown() {
    this.setState({ open: !this.state.open });
  }

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    const filteredGames = this.state.games.filter(game => (
      game.toLowerCase().search(this.state.search.toLowerCase()) > -1 
    ));
    const games = filteredGames.map(game => (
      <li key={game}><input type="checkbox"></input>{game}</li>
    ));
    return (
      <div className="App">
        <div className="dropdown-wrapper">
          <h2>Pick a game below</h2>
          {
            this.state.open
            ?
              <div className='dropdown'>
                <input
                  placeholder='Search for games..'
                  value={this.state.search}
                  onChange={this.updateSearch}
                  className='search-bar'>
                  </input>
                <ul>{games}</ul>
              </div>
            :
              <button onClick={this.toggleDropDown}>Games ></button>
          }
        </div>
      </div>
    );
  }
}

export default App;
