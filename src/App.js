import React, { Component } from 'react'
import './App.css'

import fullInfo from './data/dndInfo.json'
import races from './data/dndRace.json'
import classes from './data/dndclass.json'

import newClasses from './data/classes.json'

// Components
import Ability from './components/Ability'
import Select from './components/Select'

class App extends Component {
	state = {
		level: 1,
		raceSelected: false,
		raceCurrent: null,
		classSelected: '',
		//classCurrent: '',
		subRaceCurrent: null,
		subClassCurrent: null,
	}

	handleLevelChange = event => {
		this.setState({ level: event.target.value })
	}

	handleRaceSelection = event => {
		this.setState({
			raceSelected: true,
			raceCurrent: event.target.selectedIndex - 1,
			subRaceCurrent: '',
		})
	}

	handleClassSelection = event => {
		this.setState({
			classSelected: event.target.value,
			subClassSelected: '',
		})
	}
	handleSubClassSelection = event => {
		this.setState({
			subClassSelected: event.target.value,
		})
	}

	render() {
		const bonus = fullInfo.proficiencyBonus[this.state.level]
		const passive = 'stubbed'
		const subClassSelection =
			(classes &&
				classes.Classes &&
				classes.Classes[this.state.classCurrent] &&
				classes.Classes[this.state.classCurrent].SubClasses &&
				classes.Classes[this.state.classCurrent].SubClasses[this.state.subClassCurrent]) ||
			{}
		const currentSubClasses =
			(classes &&
				classes.Classes &&
				classes.Classes[this.state.classCurrent] &&
				classes.Classes[this.state.classCurrent].SubClasses) ||
			[]

		const styles = {
			pbonus: {
				border: 'dashed',
				borderColor: 'grey',
				padding: 5,
				margin: 10,
				width: 20,
				height: 20,
				display: 'flex',
				fontSize: 20,
				flexDirection: 'column',
				textAlign: 'center',
			},
			proficiency: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			},
			passive: {
				display: 'flex',
				fontSize: 16,
				flexDirection: 'row',
				textAlign: 'center',
				alignItems: 'center',
			},
			passivescore: {
				display: 'flex',
				flexDirection: 'column',
				border: 'dashed',
				borderColor: 'pink',
				margin: 10,
				padding: 5,
			},
		}

		return (
			<div>
				<h1>Character Sheet</h1>

				<h2>Class</h2>
				<Select
					value={this.state.classSelected}
					options={newClasses.allIds}
					handleSelection={this.handleClassSelection}
				/>
				{this.state.classSelected && (
					<Select
						value={this.state.subClassSelected}
						options={newClasses[this.state.classSelected]}
						handleSelection={this.handleSubClassSelection}
					/>
				)}
				{/*
				<select onChange={this.handleClassSelection}>
					<option>Select Class</option>
					{classes.Classes.map((classs, index) => (
						<option key={`class-${index}`} value={classs.name}>
							{classs.name}
						</option>
					))}
				</select>
				<Select
					value={subClassSelection}
					options={currentSubClasses}
					handleSelection={this.handleSubClassSelection}
				/>
				*/}

				<h2>Race</h2>
				<select onChange={this.handleRaceSelection}>
					<option>Select Race</option>
					{races.Races.map((race, index) => (
						<option key={index} value={race.name}>
							{race.name}
						</option>
					))}
				</select>
				{this.state.raceSelected && (
					<select>
						<option>Select SubRace</option>
						{races.Races[this.state.raceCurrent].SubRaces.map((subRace, index) => (
							<option key={index} value={subRace.name}>
								{subRace.name}
							</option>
						))}
					</select>
				)}
				<h2>Level</h2>
				<select onChange={this.handleLevelChange}>
					<option>Select Level</option>
					{Object.keys(fullInfo.proficiencyBonus).map(level => (
						<option key={`level-${level}`} value={level}>
							{level}
						</option>
					))}
				</select>
				<div style={styles.proficiency}>
					<h2>Proficiency Bonus</h2>
					<div style={styles.pbonus}>{bonus}</div>
				</div>
				<div style={styles.passive}>
					<h3>Passive Perception</h3>
					<div style={styles.passivescore}>{passive}</div>
				</div>
				{fullInfo.abilities.map(ability => (
					<Ability input={ability} proficiencyBonus={bonus} />
				))}
			</div>
		)
	}
}

export default App
