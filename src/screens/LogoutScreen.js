import React from 'react';
import {View,StyleSheet,Button ,ImageBackground } from 'react-native';
 
const LogoutScreen = ({navigation}) => 
{
    return(
        <ImageBackground source = {require('../images/bg4.jpg')} style = {{height : "100%" , width : "100%"}}>

       <View style = {styles.containerStyle}>
            <Button title = "Logout" onPress = {()=> navigation.navigate('Entry Screen')}/> 
       </View>
       </ImageBackground>
    );
};

const styles = StyleSheet.create({
    containerStyle : {
        flex: 1,
        justifyContent : "center",
        alignItems : "center",
        borderBottomWidth : 1,
        borderColor : '#ddd'
        
    }
});

export default LogoutScreen;
 