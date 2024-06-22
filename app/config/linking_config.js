import * as Linking from 'expo-linking';

const linking = {
  prefixes: ['supamenu://', 'http://localhost:3000'],
  config: {
    screens: {
      index: 'home',
      'restaurant-detail/[id]': 'restaurant/:id',
      '(auth)': {
        screens: {
          login: 'login',
          signup: 'signup',
        },
      },
      '(tabs)': {
        screens: {
          home: 'home',
          profile: 'profile',
        },
      },
    },
  },
};

export default linking;
