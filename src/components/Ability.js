import React, { Component } from 'react'

class Ability extends Component {
	state = {
		name: this.props.input.name,
		score: this.props.input.score,
		proficiencies: this.props.input.proficiencies,
	}

	mod = score => {
		return Math.floor((score - 10) / 2)
	}

	modProficiencies = (score, index) => {
		const { proficiencyBonus } = this.props

		if (this.state.proficiencies[index].value) {
			return Math.floor((score - 10) / 2) + proficiencyBonus
		} else {
			return Math.floor((score - 10) / 2)
		}
	}

	handleButtonPlus = () => {
		this.setState(prevState => {
			return {
				score: prevState.score + 1,
			}
		})
	}

	handleButtonMinus = () => {
		this.setState(prevState => {
			return {
				score: prevState.score - 1,
			}
		})
	}

	handleCheckbox = index => {
		this.setState(prevState => {
			// Make a copy of the existing state
			const prevStateCopy = { ...prevState }
			// Access the location that needs to change and flip it
			prevStateCopy.proficiencies[index].value = !prevStateCopy.proficiencies[index].value
			// Return the new state
			return {
				proficiencies: prevStateCopy.proficiencies,
			}
		})
	}

	render() {
		const { name, score, proficiencies } = this.state
		const styles = {
			name: {
				color: 'red',
				padding: 2,
				fontWeight: 'bold',
				fontSize: 18,
			},
			score: {
				color: 'blue',
				align: 'center',
				padding: 10,
				textAlign: 'center',
				fontWeight: 'bold',
				fontSize: 16,
			},
			mod: {
				color: 'purple',
				align: 'center',
				padding: 10,
				textAlign: 'center',
				fontWeight: 'bold',
				fontSize: 16,
			},
			skill: {
				color: 'green',
				padding: 2,
				marginLeft: 20,
				fontSize: 16,
				display: 'flex',
				flexDirection: 'row',
			},
			box: {
				border: 'solid',
				padding: 10,
				margin: 5,
				width: 260,
				display: 'flex',
				flexDirection: 'row',
			},
			left: {
				display: 'flex',
				flexDirection: 'column',
			},
			right: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'left',
			},
			whole: {
				display: 'flex',
				flexDirection: 'row',
			},
			checkbox: {
				margin: 5,
			},
			button: {
				textAlign: 'center',
			},
			proficiencyMod: {
				display: 'flex',
				flexDirection: 'row',
				marginLeft: 2,
				marginRgith: 2,
				color: 'orange',
			},
		}

		return (
			<div style={styles.whole}>
				<div style={styles.box}>
					<div style={styles.left}>
						<div style={styles.name}>{name}</div>
						<div style={styles.mod}>{this.mod(score)}</div>
						<div style={styles.score}>{score}</div>
						<div style={styles.button}>
							<button onClick={this.handleButtonMinus}>-</button>
							<button onClick={this.handleButtonPlus}>+</button>
						</div>
					</div>
					<div style={styles.right}>
						{proficiencies.map((proficiency, index) => (
							<div style={styles.skill}>
								{' '}
								{proficiency.name}
								<input
									style={styles.checkbox}
									checked={proficiency.value}
									onChange={e => this.handleCheckbox(index)}
									value={index}
									type="checkbox"
								/>
								<div style={styles.proficiencyMod}> {this.modProficiencies(score, index)}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default Ability

/* Next steps
1. Add Level Selector
2. Make Proficiency Bonus dependent on Level Selector
3. Add AC
4. Add armor selector drop-down which updates AC
5. Add Weapon selector drop-down and stats
6. Add HP based on level times avg hit die value
7. Add Race + Subrace selector drop-down (auto complete???) (pick race then just show subrace options)
8. Add Class + Subclass selector drop-down (pick class then just show subclass options)
*/
