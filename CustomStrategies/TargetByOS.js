const { Strategy } = require('unleash-client');

class TargetByOSStrategy extends Strategy {
	constructor() {
		super('TargetByOS');
	}

	isEnabled(parameters, context) {
		const { OperatingSystems } = parameters;
		const systemsArray = OperatingSystems.split(',');

		let isUsingOS = false;

		console.log({
			context,
			systemsArray,
		});

		try {
			systemsArray.forEach((system) => {
				if (
					context?.properties?.userOS
						?.toLowerCase()
						.includes(system.toLowerCase())
				) {
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
