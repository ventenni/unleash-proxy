const { Strategy } = require('unleash-client');

class UserRoleStrategy extends Strategy {
	constructor() {
		super('UserRole');
	}

	isEnabled(parameters, context) {
		console.log({ parameters, context });
		let isUserRole = false;

		const roles = parameters.UserRole.split(',');

		[...roles].forEach((item) => {
			if (item.toLowerCase() === context?.properties?.UserRole?.toLowerCase()) {
				isUserRole = true;
			}
		});

		return isUserRole;
	}
}

module.exports = UserRoleStrategy;
