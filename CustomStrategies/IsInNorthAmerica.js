const { Strategy } = require('unleash-client');

class IsInNorthAmerica extends Strategy {
	constructor() {
		super('NorthAmerican');
	}

	isEnabled(parameters, context) {
		return (
			context.properties.Region ===
			Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[0]
		);
	}
}

module.exports = IsInNorthAmerica;
