import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginPage from './screens/loginPage';
import FaceRegPage from './screens/faceregPage';
import CameraPage from './screens/cameraPage';
import LandingPage from './screens/landingPage';
import Header from './shared/header';
import HomePage from './screens/homePage';
import {Text} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            headerTitle: () => <Header />,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="FaceRegPage"
          component={FaceRegPage}
          options={{
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="CameraPage"
          component={CameraPage}
          options={{
            headerTitle: () => <Header />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
