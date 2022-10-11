import * as React from 'react';
import {Text, TextInput, StyleSheet, SafeAreaView, Button} from 'react-native';


// creates a style object for the recipes page.
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  // Defines a recipe page. 
const Recipes = ({navigation}) => 
{
    const [text] = React.useState("Input a desired recipe!");
    
    return (
        // SafeArea View is a parent tag and to render content 
        // within the safe area boundaries of a device.
        <SafeAreaView>
            <TextInput
                style={styles.input}
                placeholder={text}
            />
            <Button
              title = {text}
              onPress={() =>
              navigation.navigate('CookieRecipe')}
            />
        </SafeAreaView>
    );
  }

export default Recipes