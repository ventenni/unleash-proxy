const { Strategy } = require('unleash-client');

class TimeStampStrategy extends Strategy {
	constructor() {
		super('TimeStamp');
	}

	isEnabled(parameters, context) {
		// console.log('TimeStampStrategy', { parameters, context });
		return Date.parse(parameters.enableAfter) < Date.now();
	}
}

module.exports = TimeStampStrategy;
