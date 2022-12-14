const port = 3001;

require('dotenv').config();
const { createApp } = require('@unleash/proxy');

const IsInAmerica = require('./CustomStrategies/IsInAmerica');
const DateTimeIsBetweenRange = require('./CustomStrategies/DateTimeIsBetweenRange');
const TargetByEmailProviderStrategy = require('./CustomStrategies/TargetUserEmailProvider');
const TargetByOSStrategy = require('./CustomStrategies/TargetByOS');
const EnableAfter = require('./CustomStrategies/EnableAfter');
const UserRoleStrategy = require('./CustomStrategies/UserRoleStrategy');
const IsUnderAgeStrategy = require('./CustomStrategies/IsUnderAgeStrategy');

const app = createApp({
	unleashUrl: 'http://unleash-lb-391482345.us-east-2.elb.amazonaws.com/api',
	// unleashUrl: 'http://localhost:4242/api',
	unleashApiToken:
		// LOCAL ENV API KEY
		// '*:development.16d79bb7fea5b528138e682a688d996996fc443ff72b0b2c6e3b763e',

		// AWS ENV API KEY
		'*:development.e9d1bc856ba87529568cdcb5b8d5c2457f23beddc7cea01804e0c531',
	clientKeys: ['proxy-1'],
	proxyPort: 3001,
	customStrategies: [
		new DateTimeIsBetweenRange(),
		new EnableAfter(),
		new IsInAmerica(),
		new IsUnderAgeStrategy(),
		new TargetByOSStrategy(),
		new TargetByEmailProviderStrategy(),
		new UserRoleStrategy(),
	],
});

app.listen(port, () =>
	console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`)
);
