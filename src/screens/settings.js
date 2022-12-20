import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, Button, TouchableOpacity } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";

function MyScreen() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => {
            /* HERE IS WHERE WE'RE GOING TO SHOW OUR FIRST MESSAGE */
            showMessage({
              message: 'Simple message',
              type: 'success',
              backgroundColor: 'purple', // background color
                color: '#606060', // text color
            });
          }}

          
          title='Request Details'
          color='#841584'
        />
      </View>
    );
  }

const Settings = () => {

    const navigation = useNavigation ();

    return (
        <SafeAreaView>
            <Text>PAGE SETTING</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>

            <Text> VERS PAGE SETTINGS</Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
};

export default Settings;