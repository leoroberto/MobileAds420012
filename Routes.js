import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Pages2 from './pages/Page2';

const AppStack = createStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" initialRouteName="Home">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Pages2" component={Pages2} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;