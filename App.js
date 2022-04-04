import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import NavigationStack from './components/Navigation/NavigationStack';

export default function App() {

  return (

    <NavigationContainer>
        
        <NavigationStack/>
        {/* <ButtomTab /> */}
        
    </NavigationContainer>
    
  );
}


