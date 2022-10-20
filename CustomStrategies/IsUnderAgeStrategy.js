const { Strategy } = require('unleash-client');

class IsUnderAgeStrategy extends Strategy {
	constructor() {
		super('IsUnderAge');
	}

	isEnabled(parameters, context) {
		const { UserAge } = context.properties;

		return parseInt(UserAge) < parseInt(parameters.Age);
	}
}

module.exports = IsUnderAgeStrategy;
