import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabHome: {
            screens: {
              TabOneScreen: 'home',
            },
          },
          TabVax: {
            screens: {
              TabTwoScreen: 'vacina',
            },
          },
          TabProfile: {
            screens: {
              TabTwoScreen: 'perfil',
            },
          },
        },
      },
      VaxDetails: 'detalheVacina',
      NotFound: '*',
    },
  },
};

export default linking;
