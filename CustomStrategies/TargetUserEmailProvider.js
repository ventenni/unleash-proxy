const { Strategy } = require('unleash-client');

class TargetUserEmailProvider extends Strategy {
	constructor() {
		super('TargetUserEmailProvider');
	}

	isEnabled(parameters, context) {
		const { EmailProviders } = parameters;
		const emailArray = EmailProviders.split(',');
		let found = false;

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

module.exports = TargetUserEmailProvider;
