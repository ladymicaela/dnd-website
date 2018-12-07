const Ability = require('./../models/Ability')

const fs = require('fs')
const cloudinary = require('cloudinary')

module.exports = {
	addAbility: (req, res, next) => {
		let { name, score, proficiences } = req.body
		saveAbility({ name, score, proficiences })

		function saveAbility(obj) {
			new Ability(obj).save((err, ability) => {
				if (err) res.send(err)
				else if (!ability) res.send(400)
				else {
					return res.send(ability)
				}
				next()
			})
		}
	},

	getAll: (req, res, next) => {
		Ability.find(req.params.id).exec((err, ability) => {
			if (err) res.send(err)
			else if (!ability) res.send(400)
			else {
				return res.send(ability)
			}
			next()
		})
	},
}
