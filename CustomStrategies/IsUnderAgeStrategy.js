const { Strategy } = require('unleash-client');

class IsUnderAgeStrategy extends Strategy {
	constructor() {
		super('IsUnderAge');
	}

	isEnabled(parameters, context) {
		const { UserAge } = context.properties;
		console.log({
			parameters,
			context,
			isUnderAge: parseInt(UserAge) < parseInt(parameters.Age),
		});

		return parseInt(UserAge) < parseInt(parameters.Age);
	}
}

module.exports = IsUnderAgeStrategy;
