const mongoose = require('mongoose')

let ProficiencySchema = new mongoose.Schema({
	name: String,
	value: Boolean,
})
