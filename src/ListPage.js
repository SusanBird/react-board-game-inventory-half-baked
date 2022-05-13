import React, { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';
import './App.css';


export default function ListPage() {
  // you'll need some state to hold onto the array of games
  const [games, setGames] = useState([]);
  // fetch the games on load and inject them into state

  useEffect(() => {
    async function loadData() {
      const data = await getGames();

      setGames(data);
    }

    loadData();
  }, []);


  return (
    <div className='list games'>
      List of Games:
      {/* map through the games in state and render Game components */}
      {
        <Game games={games}/>
      }
    </div>
  );
}
