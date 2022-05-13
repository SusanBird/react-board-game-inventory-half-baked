import { Link } from 'react-router-dom';
import './App.css';


export default function Game({ game }) {
  return (
    // be sure this component is wrapped in a react-router link that takes the user to the correct detail page
    <Link to={`/board-games/${game.id}`}>
      <div className='game'>
        <h3>{game.title}</h3>
        <p>A {game.genre} game by designer {game.designer}</p>
        <p>for {game.min_players} - {game.max_players} players</p>
        <p>{game.description}</p>
      </div>
    </Link>)
  ;
}
