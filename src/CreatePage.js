import React from 'react';
import { createGame } from './services/fetch-utils';
import './App.css';
import { withRouter } from 'react-router-dom';

export default withRouter(
  class CreatePage extends React.Component {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  // const history = useHistory();
  // here's the state you'll need:
    constructor() {
      super();
      this.state = {
        title: '',
        genre: '',
        designer: '',
        description: '',
        min_players: 2,
        max_players: 8
      }; 
    }

  // eslint-disable-next-line no-console
  // console.log(gameInTheForm.min_players);
  // CHANGES ARE GOING THROUGH IN CONSOLE FROM HERE

  handleSubmit = async (e) => {
    const {
      title,
      genre,
      designer,
      description,
      min_players, 
      max_players
    } = this.state;

    e.preventDefault();

    // create a game
    await createGame({
      title,
      genre,
      designer,
      description,
      min_players, 
      max_players
    });
    // use history.push to send the user to the list page
    this.props.history.push('/board-games');
  };

  render() {
    return (
      <div className='create'>
        {/* on submit, call your handleSubmit function */}
        <form onSubmit={this.handleSubmit}>
        Add board game
          <label>
            Title
            {/* on change, set the title in state */}
            <input value={this.state.title} onChange={e => this.setState({
              title: e.target.value,
            })} />
          </label>
          <label>
            Genre
            {/* on change, set the genre in state */}
            <select value={this.state.genre} onChange={e => this.setState({
              ...this.state,
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
            <input value={this.state.designer} onChange={e => this.setState({
              ...this.state,
              designer: e.target.value,
            })} />        
          </label>
          <label>
            Min Players
            {/* on change, set the min players in state */}
            <input value={this.state.min_players} type="number" onChange={e => this.setState({
              ...this.state,
              min_players: e.target.value,
            })} />
          </label>
          <label>
            Max Players
            {/* on change, set the max players in state */}
            <input value={this.state.max_players} type="number" onChange={e => this.setState({
              ...this.state,
              max_players: e.target.value,
            })} />        
          </label>
          <label>
            Description
            {/* on change, set the description in state */}
            <input value={this.state.description} onChange={e => this.setState({
              ...this.state,
              description: e.target.value,
            })} />        
          </label>
          <button>Create Game</button>
        </form>
      </div>
    );
  }
  })