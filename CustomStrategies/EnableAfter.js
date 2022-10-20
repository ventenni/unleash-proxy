const { Strategy } = require('unleash-client');

class EnableAfter extends Strategy {
	constructor() {
		super('EnableAfter');
	}

	isEnabled(parameters, context) {
		const current = new Date(context.properties.currentDate).getTime();
		const enabledDate = new Date(parameters.Date).getTime();

		return current > enabledDate;
	}
}

module.exports = EnableAfter;
