const SlotAvailabilityService = require('./slotAvailabilityService');
const credentials = require('./credentials');

const slotAvailabilityService = new SlotAvailabilityService(
  'mqtt://mosquitto:1884',  // External broker (for clients)
  credentials.brokerUrl,   // Internal broker (for services)
  {
    username: credentials.username,
    password: credentials.password,
  }
);