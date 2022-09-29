const { Strategy } = require('unleash-client');

class IsUsingMacOS extends Strategy {
	constructor() {
		super('IsUsingMacOS');
	}

	isEnabled(parameters, context) {
		// console.log('IsUsingMacOS', context.properties.userAgent.includes('Mac'));
		return context.properties.userAgent.includes('Mac');
	}
}

module.exports = IsUsingMacOS;
