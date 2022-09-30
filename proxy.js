const port = 3001;

const { createApp } = require('@unleash/proxy');
const TimeStampStrategy = require('./CustomStrategies/TimeStampStrategy');
const IsInNorthAmerica = require('./CustomStrategies/IsInNorthAmerica');
const DateTimeIsBetweenRange = require('./CustomStrategies/DateTimeIsBetweenRange');
const TargetUserEmailProvider = require('./CustomStrategies/TargetUserEmailProvider');
const IsUsingMacOS = require('./CustomStrategies/IsUsingMacOS');
const EnableAfter = require('./CustomStrategies/EnableAfter');

const app = createApp({
	unleashUrl: 'http://unleash-lb-391482345.us-east-2.elb.amazonaws.com/api',
	unleashApiToken:
		// '*:development.16d79bb7fea5b528138e682a688d996996fc443ff72b0b2c6e3b763e',
		'*:*.136d33e6bd0a83870227470d5e5e39eba3d30c41829efb3c2bd6debc',
	clientKeys: ['proxy-1'],
	proxyPort: 3001,
	customStrategies: [
		new DateTimeIsBetweenRange(),
		new EnableAfter(),
		new IsInNorthAmerica(),
		new IsUsingMacOS(),
		new TimeStampStrategy(),
		new TargetUserEmailProvider(),
	],
});

app.listen(port, () =>
	console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`)
);
