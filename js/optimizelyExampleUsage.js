// I had initially a created a separate .js file in the config folder, for the SDK initialization but decided to move it here for now.

// initialize the SDK and create the instance:
import { createInstance } from '@optimizely/optimizely-sdk';

const optimizely = createInstance({
  sdkKey: 'FJS2GxMeUoGtW3KK3egjN', // [X] Provide the sdkKey of your desired environment here. this instance will load in this datafile.
});

// create a flag/feature:
if (optimizely) {
  optimizely.onReady().then(({ success, reason }) => {
    if (!success) {
      throw new Error(reason);
    }

    // set the user:
    const user = optimizely.createUserContext('user123', attributes);

    if (!user) {
      throw new Error('failed to create user context');
    }

    // set up feature/flag:
    const decision = user.decide('consolelog_message'); // 'consolelog_message' is the Name/Key of the flag.
    const isEnabled = decision.enabled;

    if (isEnabled) {
      console.log('consolelog_message flag is enabled');
      console.log(decision.variables['messageGreeting']);
    }
  });
} else {
  console.log('There was an error creating Optimizely instance') // there was an error creating the instance, handle error
}
