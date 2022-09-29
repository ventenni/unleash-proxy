const { Strategy } = require('unleash-client');

class DateTimeIsBetweenRange extends Strategy {
	constructor() {
		super('EnableBetween');
	}

	isEnabled(parameters, context) {
		const { StartDate, EndDate } = parameters;
		const startTime = new Date(StartDate).getTime();
		const endTime = new Date(EndDate).getTime();
		const current = new Date(context.properties.currentDate).getTime();

		return current > startTime && current < endTime;
	}
}

module.exports = DateTimeIsBetweenRange;
