const { Strategy } = require('unleash-client');

class TargetByEmailProviderStrategy extends Strategy {
	constructor() {
		super('TargetByEmailProvider');
	}

	isEnabled(parameters, context) {
		// Parameters are set in the Unleash server when adding the
		// custom strategy to a toggle
		const { EmailProviders } = parameters;
		const emailArray = EmailProviders?.split(',');
		let found = false;

		try {
			emailArray?.forEach((email) => {
				// Context is set on the client side
				if (context.properties.EmailProvider.includes(email)) {
					found = true;
				}
			});
		} catch (error) {
			console.log('Error: ', error);
		}

		// Return value must be a boolean
		return found;
	}
}

module.exports = TargetByEmailProviderStrategy;
