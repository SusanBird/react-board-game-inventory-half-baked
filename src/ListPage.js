import { getGames } from './services/fetch-utils';
import Game from './Game';
import './App.css';
import React from 'react';
// import { useState, useEffect } from 'react';

export default class ListPage extends React.Component {
  constructor() {
    super();
    this.state = {
      games: [],
    };
  }

  async componentDidMount() {
    const data = await getGames();

    this.setState({ games: data });
  }

  // // you'll need some state to hold onto the array of games
  // const [games, setGames] = useState([]);
  // // fetch the games on load and inject them into state

  // useEffect(() => {
  //   async function loadData() {
  //     const data = await getGames();

  //     setGames(data);
  //   }

  //   loadData();
  // }, []);

  render() {
    return (
      <div className='list'>
        {/* map through the games in state and render Game components */}
        {this.games.map((game, i) => (
          <Game key={game + i} game={this.game}/>
        ))}
      </div>
    );
  }
}