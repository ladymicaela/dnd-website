import React, { Component } from 'react'

class Select extends Component {
	render() {
		const { handleSelection, options, value, placeholder } = this.props

		return (
			<select onChange={handleSelection} value={value}>
				<option value="">{placeholder}</option>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		)
	}
}

export default Select
