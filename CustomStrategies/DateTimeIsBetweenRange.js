const { Strategy } = require('unleash-client');

class DateTimeIsBetweenRange extends Strategy {
	constructor() {
		// Text inside super() needs to match the custom strategy
		// name that created in the Unleash server
		super('EnableBetween');
	}

	isEnabled(parameters, context) {
		// StartDate & EndDate parameters are set in the Unleash server
		const { StartDate, EndDate } = parameters;
		const startTime = new Date(StartDate).getTime();
		const endTime = new Date(EndDate).getTime();

		// context.properties are set in the front end client
		// You can set custom contexts in the front end client with details
		// such as UserID, User location, time of day, etc.
		const current = new Date(context.properties.currentDate).getTime();

		// Return value must return a boolean value.
		return current > startTime && current < endTime;
	}
}

module.exports = DateTimeIsBetweenRange;
