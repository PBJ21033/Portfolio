import * as React from 'react';
import {Text} from 'react-native';

// Allows for the cookie recipe to display as the second screen.
const CookieRecipe =()=>
{ 
    return(
        <Text>
            {recipe}
        </Text>
        
    );
}

// recipe variable
const recipe =
'Ingredients\n ' +
    '1 cup salted butter* softened\n' +
    '1 cup white (granulated) sugar\n' +
    '1 cup light brown sugar packed\n' +
    '2 tsp pure vanilla extract\n' +
    '2 large eggs\n' +
    '3 cups all-purpose flour\n' +
    '1 tsp baking soda\n' +
    '½ tsp baking powder\n' +
    '1 tsp sea salt***\n' +
    '2 cups chocolate chips (or chunks, or chopped chocolate)\n' +
    '\n-Instructions\n' +
    'Preheat oven to 375 degrees F. Line a baking pan with parchment paper and set aside.\n' +
    'In a separate bowl mix flour, baking soda, salt, baking powder. Set aside.\n' +
    ' Cream together butter and sugars until combined.\n' +
    'Beat in eggs and vanilla until fluffy.\n' +
    ' Mix in the dry ingredients until combined.\n' +
    'Add 12 oz package of chocolate chips and mix well.\n' +
    ' Roll 2-3 TBS (depending on how large you like your cookies) of dough'+
    'at a time into balls and place them evenly spaced on your prepared'+
    'cookie sheets. (alternately, use a small cookie scoop to make your cookies).'+
    'Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just' +
    'BARELY starting to turn brown.\n' +
    ' Let them sit on the baking pan for 2 minutes before removing to cooling rack.'

// Now the cookie recipe is usable to the rest of the program.
export default CookieRecipe