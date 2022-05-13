import React, { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';
import './App.css';

export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  const history = useHistory();
  // here's the state you'll need:
  const [gameInTheForm, setGameInTheForm] = useState({
    title: '',
    genre: '',
    designer: '',
    description: '',
    min_players: 2,
    max_players: 8
  }); 

  // eslint-disable-next-line no-console
  // console.log(gameInTheForm.min_players);
  // CHANGES ARE GOING THROUGH IN CONSOLE FROM HERE

  async function handleSubmit(e) {
    e.preventDefault();

    // create a game
    await createGame(gameInTheForm);
    // use history.push to send the user to the list page
    history.push('/board-games');
  }

  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleSubmit}>
        Add board game
        <label>
            Title
          {/* on change, set the title in state */}
          <input value={gameInTheForm.title} onChange={e => setGameInTheForm({
            ...gameInTheForm,
            title: e.target.value,
          })} />
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select value={gameInTheForm.genre} onChange={e => setGameInTheForm({
            ...gameInTheForm,
            genre: e.target.value,
          })}>
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input value={gameInTheForm.designer} onChange={e => setGameInTheForm({
            ...gameInTheForm,
            designer: e.target.value,
          })} />        
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input value={gameInTheForm.min_players} type="number" onChange={e => setGameInTheForm({
            ...gameInTheForm,
            min_players: e.target.value,
          })} />
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input value={gameInTheForm.max_players} type="number" onChange={e => setGameInTheForm({
            ...gameInTheForm,
            max_players: e.target.value,
          })} />        
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <input value={gameInTheForm.description} onChange={e => setGameInTheForm({
            ...gameInTheForm,
            description: e.target.value,
          })} />        
        </label>
        <button>Create Game</button>
      </form>
    </div>
  );
}
