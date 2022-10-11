
import * as React from 'react';
import { Text, Button, SafeAreaView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    marginVertical: 8,
  }
});

// Allows for there to be a homescreen and you can now go to the second page.
const HomeScreen = ({navigation}) => {
    
    return (
      <SafeAreaView >
        <Text style = {styles.text}>
          Click on the Cookie Recipe to see the recipe for the
          perfect batch of cookies!
        </Text>

        {/* The actual code to switch screens via a button. */}
        <Button
        title="World Famous Cookies!"
        onPress={() =>
          navigation.navigate('Cookie Recipe')
        }
        />
      </SafeAreaView>
    );
  }

// Allows the home screen to be usable to app.js
export default HomeScreen