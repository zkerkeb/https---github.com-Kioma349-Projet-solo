import React from 'react';
import Routes from './src/config/routes';
import { View } from 'react-native';
import FlashMessage from 'react-native-flash-message';


// function Apps() {
//   return (
//   <View style={{ flex: 1 }}>
//   <YourMainApp />
//   <FlashMessage ref='myLocalFlashMessage' />   {/* <--- here as the last component always with `ref` as a prop */}
// </View>
//   );
// }
function MyScreen() {
  return (
    <View style={{ flex: 10 }}>
      <Button
        onPress={() => {
          /* HERE IS WHERE WE'RE GOING TO SHOW OUR FIRST MESSAGE */
          showMessage({
            message: 'Simple message',
            type: 'success',
            
          });
        }}

        
        title='Request Details'
        color='#841584'
      />
    </View>
  );
}


const App = () => {
  

  return (
     <>
    <Routes/>
     <FlashMessage position="top" />
    </>
    )
  
};


export default App;
