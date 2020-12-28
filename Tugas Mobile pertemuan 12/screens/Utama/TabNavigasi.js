import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import screens from './index';

const Tab = createBottomTabNavigator();

const TabNavigasiScreen = () => (
  <Tab.Navigator
    Name="Home"
    tabBarOptions={{
      labelStyle: {
        marginBottom: 6,
      },
      activeTintColor: "#2585e8",
      inactiveTintColor: '#888',
    }}
  >
    {screens.map((screen) => (
      <Tab.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name={screen.icon}
              size={size}
              color={color}
            />
          ),
        }}
      />
    ))}
  </Tab.Navigator>
);

export default TabNavigasiScreen;
