import React from 'react';
import { getGameById, updateGame } from './services/fetch-utils';

export default class UpdatePage extends React.Component {

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

  async componentDidMount() {
    const game = await getGameById(id);

    this.setState({ ...game });
  }

  async handleUpdateSubmit(e) {
    e.preventDefault();

    // create a game
    await updateGame(id, this.state);
    // use history.push to send the user to the list page
    push('/board-games');
  }

  render() {
    return (
      <div className='update'>
        {/* on submit, call your handleSubmit function */}
        <form onSubmit={this.handleUpdateSubmit}>
          <h2>Update Game</h2>
          <label>
            Title
            {/* on change, set the title in state */}
            <input value={this.state.title} onChange={e => this.setState({ title: e.target.value,
            })} />
          </label>
          <label>
            Genre
            {/* on change, set the genre in state */}
            <select value={this.state.genre} onChange={e => this.setState({ genre: e.target.value,
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
            <input value={this.state.designer} onChange={e => this.setState({ designer: e.target.value,
            })} />        
          </label>
          <label>
            Min Players
            {/* on change, set the min players in state */}
            <input value={this.state.min_players} type="number" onChange={e => this.setState({ min_players: e.target.value,
            })} />
          </label>
          <label>
            Max Players
            {/* on change, set the max players in state */}
            <input value={this.state.max_players} type="number" onChange={e => this.setState({ max_players: e.target.value,
            })} />        
          </label>
          <label>
            Description
            {/* on change, set the description in state */}
            <input value={this.state.description} onChange={e => this.setState({ description: e.target.value,
            })} />        
          </label>
          <button>Create game</button>
        </form>
      </div>
    );
  }
}