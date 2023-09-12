import React from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MainScreen, NavigationNameMainScreen } from './src/UI/Screens/MainScreen';
import { navigationRef, isReadyRef } from './src/Navigation/RootOptions';
import { BottomNavigationBar } from './src/UI/Components/BottomNavigationBar';
import 'react-native-reanimated';
import { Colors } from './src/Resources/Colors';
import { FavotitesScreen, NavigationNameFavoritesScreen } from './src/UI/Screens/FavotitesScreen';
import { BookmarksScreen, NavigationNameBookmarksScreen } from './src/UI/Screens/BookmarksScreen';
import { NavigationNameUserScreen, UserScreen } from './src/UI/Screens/UserScreen';
import { DetailsScreen, NavigationNameDetailsScreen } from './src/UI/Screens/DetailsScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Content }} >
      <NavigationContainer
        ref={navigationRef}>
        <Stack.Navigator
        screenOptions={{animation:'fade'}}>
          <Stack.Screen
            options={{headerShown: false}}
            component={MainScreen}
            name={NavigationNameMainScreen} />
            <Stack.Screen
            options={{headerShown: false}}
            component={FavotitesScreen}
            name={NavigationNameFavoritesScreen} />
            <Stack.Screen
            options={{headerShown: false}}
            component={BookmarksScreen}
            name={NavigationNameBookmarksScreen} />
            <Stack.Screen
            options={{headerShown: false}}
            component={UserScreen}
            name={NavigationNameUserScreen} />
            <Stack.Screen
            options={{headerShown: false}}
            component={DetailsScreen}
            name={NavigationNameDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <BottomNavigationBar></BottomNavigationBar>
    </SafeAreaView>
  );
}

export default App;
