import * as React from 'react';
import { BottomNavigation, DefaultTheme, Text } from 'react-native-paper';
import HomeScreen from '../../screen/Home/Home.screen';
import AccountScreen from '../../screen/Account/Account.screen';

import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
  } from '@react-navigation/native';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default function NavigationComponent() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Comprar', focusedIcon: 'heart', activeColor: '#fff', unfocusedIcon: 'heart'},
    { key: 'albums', title: 'Blog', focusedIcon: 'album' },
    { key: 'recents', title: 'Carrinho', focusedIcon: 'history' },
    { key: 'account', title: 'Conta', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    account: AccountScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      theme={NavigationDefaultTheme}
      activeColor={'#fff'}
      inactiveColor={'#fff'}
    />
  );
};