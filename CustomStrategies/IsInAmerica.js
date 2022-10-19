const { Strategy } = require('unleash-client');

class IsInAmerica extends Strategy {
	constructor() {
		super('IsInAmerica');
	}

	isEnabled(parameters, context) {
		return context?.properties?.Region?.toLowerCase() === 'america';
	}
}

module.exports = IsInAmerica;
