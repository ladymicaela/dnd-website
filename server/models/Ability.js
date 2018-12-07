const mongoose = require('mongoose')

let AbilitySchema = new mongoose.Schema({
	name: String,
	score: Number,
	proficiencies: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Proficiency',
		},
	],
})

module.exports = mongoose.model('Ability', AbilitySchema)
