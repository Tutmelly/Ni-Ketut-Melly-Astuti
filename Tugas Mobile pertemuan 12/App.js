import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
//import firebase from './firebase.config';

const Stack = createStackNavigator();



const App = () => {
 // console.log(firebase)
  return ( 
    <NavigationContainer>
      <Stack.Navigator
        NameScreen="Signup"
      >
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
