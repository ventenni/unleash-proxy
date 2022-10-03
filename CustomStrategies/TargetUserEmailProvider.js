const { Strategy } = require('unleash-client');

class TargetByEmailProviderStrategy extends Strategy {
	constructor() {
		super('TargetByEmailProvider');
	}

	isEnabled(parameters, context) {
		const { EmailProviders } = parameters;
		const emailArray = EmailProviders.split(',');
		let found = false;

		console.log({ parameters, context });

		try {
			emailArray.forEach((email) => {
				if (context.properties.EmailProvider.includes(email)) {
					found = true;
				}
			});
		} catch (error) {
			console.log('Error: ', error);
		}

		return found;
	}
}

module.exports = TargetByEmailProviderStrategy;
