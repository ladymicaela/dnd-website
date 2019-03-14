import React, { Component } from 'react'
import './App.css'

import fullInfo from './data/dndInfo.json'

import newClasses from './data/classes.json'
import newRaces from './data/races.json'

// Components
import Ability from './components/Ability'
import Select from './components/Select'

class App extends Component {
	state = {
		level: '',
		raceSelected: false,
		raceCurrent: null,
		classSelected: '',
		subClassSelected: '',
		subRaceSelected: '',
		subRaceCurrent: null,
		subClassCurrent: null,
	}

	handleLevelChange = event => {
		this.setState({ level: event.target.value })
	}

	handleRaceSelection = event => {
		this.setState({
			raceSelected: event.target.value,
			subRaceSelected: '',
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

	handleSubRaceSelection = event => {
		this.setState({
			subRaceSelected: event.target.value,
		})
	}

	render() {
		const bonus = fullInfo.proficiencyBonus[this.state.level]
		const passive = 'stubbed'
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
			clacevel: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				width: 400,
				paddingBottom: 20,
			},
			classs: {
				display: 'flex',
				flexDirection: 'column',
			},
			race: {
				display: 'flex',
				flexDirection: 'column',
			},
			level: {
				display: 'flex',
				flexDirection: 'column',
			},
		}

		return (
			<div>
				<h1>Character Sheet</h1>
				<div style={styles.clacevel}>
					<div style={styles.classs}>
						<h2>Class</h2>
						<Select
							value={this.state.classSelected}
							options={newClasses.allClasses}
							handleSelection={this.handleClassSelection}
							placeholder={'Select Class'}
						/>
						{this.state.classSelected && (
							<Select
								value={this.state.subClassSelected}
								options={newClasses[this.state.classSelected]}
								handleSelection={this.handleSubClassSelection}
								placeholder={'Select Subclass'}
							/>
						)}
					</div>
					<div style={styles.race}>
						<h2>Race</h2>
						<Select
							value={this.state.raceSelected}
							options={newRaces.allRaces}
							handleSelection={this.handleRaceSelection}
							placeholder={'Select Race'}
						/>
						{this.state.raceSelected && newRaces[this.state.raceSelected].length > 0 && (
							<Select
								value={this.state.subRaceSelected}
								options={newRaces[this.state.raceSelected]}
								handleSelection={this.handleSubRaceSelection}
								placeholder={'Select Subrace'}
							/>
						)}
					</div>
					<div style={styles.level}>
						<h2>Level</h2>
						<Select
							value={this.state.level}
							options={Object.keys(fullInfo.proficiencyBonus)}
							handleSelection={this.handleLevelChange}
							placeholder={'Select Level'}
						/>
					</div>
				</div>
				{this.state.level && (
					<div style={styles.proficiency}>
						<h2>Proficiency Bonus</h2>
						<div style={styles.pbonus}>{bonus}</div>
					</div>
				)}
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
