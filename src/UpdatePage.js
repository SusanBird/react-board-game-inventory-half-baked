import React, { useState, useEffect } from 'react';
import { getGameById, updateGame } from './services/fetch-utils';
import { useHistory, useParams } from 'react-router-dom';

export default function UpdatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  const { push } = useHistory();
  const { id } = useParams();
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

  useEffect(() => {
    async function load() {
      const game = await getGameById(id);

      setGameInTheForm(game);
    }
    load();
  }, [id]);

  async function handleUpdateSubmit(e) {
    e.preventDefault();

    // create a game
    await updateGame(id, gameInTheForm);
    // use history.push to send the user to the list page
    push('/board-games');
  }

  return (
    <div className='update'>
      {/* on submit, call your handleSubmit function */}
      <form onSubmit={handleUpdateSubmit}>
        <h2>Update Game</h2>
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
        <button>Create game</button>
      </form>
    </div>
  );
}