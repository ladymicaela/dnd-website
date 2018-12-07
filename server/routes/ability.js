const abilitycontroller = require('./../controllers/ability.ctrl')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = router => {
	// get all abilities
	router.route('/abilities').get(abilitycontroller.getAll)

	// create an ability
	router.route('/ability').post(multipartWare, abilitycontroller.addAbility)
}
