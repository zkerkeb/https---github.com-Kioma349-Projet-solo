import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';


const Home = () => {

    const navigation = useNavigation ();

    return (
        <SafeAreaView>
            <Text>
                PAGE HOME
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>

            <Text>
                VERS PAGE SETTINGS
            </Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
};

export default Home;
