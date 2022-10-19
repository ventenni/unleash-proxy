const { Strategy } = require('unleash-client');

class IsUnderAge extends Strategy {
	constructor() {
		super('IsUnderAge');
	}

	isEnabled(parameters, context) {
		console.log({ parameters, context });

		return context?.properties?.age < parseInt(parameters.Age);
	}
}

module.exports = IsUnderAge;
