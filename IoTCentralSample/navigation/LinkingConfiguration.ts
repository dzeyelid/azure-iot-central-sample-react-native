import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabActions: {
            screens: {
              TabActionsScreen: 'actions',
            },
          },
          TabSettings: {
            screens: {
              TabSettingsScreen: 'settings',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
