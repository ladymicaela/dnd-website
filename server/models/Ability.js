const mongoose = require('mongoose')

let AbilitySchema = new mongoose.Schema({
	name: String,
	score: Number,
})

AbilitySchema.methods.addName = function(abilityname) {
	this.name = abilityname
	return this.save()
}

module.exports = mongoose.model('Ability', AbilitySchema)
