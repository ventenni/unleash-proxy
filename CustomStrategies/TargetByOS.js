const { Strategy } = require('unleash-client');

class TargetByOSStrategy extends Strategy {
	constructor() {
		super('TargetByOS');
	}

	isEnabled(parameters, context) {
		const { OperatingSystems } = parameters;
		const systemsArray = OperatingSystems.split(',');

		let isUsingOS = false;
		try {
			systemsArray.forEach((system) => {
				if (context.properties.userOS.includes(system)) {
					isUsingOS = true;
					return true;
				}
			});
		} catch (error) {
			console.log(`Error: ${error}`);
		}

		return isUsingOS;
	}
}

module.exports = TargetByOSStrategy;
