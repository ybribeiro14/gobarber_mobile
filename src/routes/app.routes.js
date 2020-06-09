import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Confirm from '~/pages/New/Confirm';
import SelectDateTime from '~/pages/New/SelectDateTime';
import SelectProvider from '~/pages/New/SelectProvider';

const Tab = createBottomTabNavigator();
const New = createStackNavigator();

const NewRoutes = ({ navigation }) => (
  <New.Navigator
    screenOptions={{
      headerShown: true,
      headerTransparent: true,
      headerTintColor: '#fff',
      headerLeftContainerStyle: {
        marginLeft: 20,
      },
    }}
  >
    <New.Screen
      name="SelectProvider"
      component={SelectProvider}
      options={{
        title: 'Selecione o Prestador',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          >
            <Icon name="chevron-left" size={20} color="#FFF" />
          </TouchableOpacity>
        ),
      }}
    />
    <New.Screen
      name="SelectDateTime"
      component={SelectDateTime}
      options={{
        title: 'Selecione o Horário',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectProvider');
            }}
          >
            <Icon name="chevron-left" size={20} color="#FFF" />
          </TouchableOpacity>
        ),
      }}
    />
    <New.Screen
      name="Confirm"
      component={Confirm}
      options={{
        title: 'Confirmar agendamento',
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectDateTime');
            }}
          >
            <Icon name="chevron-left" size={20} color="#FFF" />
          </TouchableOpacity>
        ),
      }}
    />
  </New.Navigator>
);

const AppRoutes = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#FFF',
      inactiveTintColor: 'rgba(255,255,255,0.6)',
      style: {
        backgroundColor: '#8d41a8',
      },
    }}
  >
    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarLabel: 'Agendamentos',
        tabBarIcon: ({ color }) => (
          <Icon name="event" size={20} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="New"
      component={NewRoutes}
      options={{
        tabBarVisible: false,
        tabBarLabel: 'Agendar',
        tabBarIcon: ({ color }) => (
          <Icon name="add-circle-outline" size={20} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Meu Perfil',
        tabBarIcon: ({ color }) => (
          <Icon name="person" size={20} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppRoutes;
