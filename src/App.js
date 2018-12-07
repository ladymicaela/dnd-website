import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import fullInfo from './data/dndInfo.json'

// Components
import Ability from './components/Ability'

class App extends Component {
	state = {
		level: 1,
	}

	handleLevelChange = (event) => {
		this.setState({ level: event.target.value })
	}


	render() {
		const bonus = fullInfo.proficiencyBonus[this.state.level]
		return (
			<div>
				<h1>Character Sheet</h1>
				<select onChange={this.handleLevelChange} >
					<option>Select Level</option>
					{Object.keys(fullInfo.proficiencyBonus).map(level =>
						<option key={'level-${level}'} value={level}>{level}</option>
					)}
				</select>
				<h2>Proficiency Bonus</h2>
				<div>{bonus}</div>
				{fullInfo.abilities.map(ability =>
					<Ability input={ability} proficiencyBonus={bonus} />
				)
				}
			</div>
		);
	}
}

export default App;
