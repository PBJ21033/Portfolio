import React from 'react';
// When exporting a default don't use curly braces.
import HomeScreen from './screens/home_screen';
// For creating the different screens.
import { NavigationContainer} from '@react-navigation/native';
// Creates the stack of screens. 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// allows for the cooke recipe to be accessible. 
import CookieRecipe from './screens/cookie_screen';

// Allows for screens on the mobile app. 
const Stack = createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>

        {/* The Starting page of the app (home page) */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Recipe App' }}
        />

        {/* The second page of the app (cookie recipe) */}
        <Stack.Screen
        name = "Cookie Recipe"
        component={CookieRecipe}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Allows the app to be available to the code that allows it to run.
export default App;
