import React from 'react';
import {View,StyleSheet } from 'react-native';
 

const CardSection = (props) => 
{
    return(
        <View style = {styles.containerStyle}>
            {props.children}  
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle : {
        borderBottomWidth : 1,
        borderColor : '#ddd',
        padding : 10,
        backgroundColor : '#fff',
        flexDirection : 'row',
        justifyContent : 'center',
        marginBottom:10,
        marginLeft :10,
        marginRight :10,
        borderRadius: 50,
        shadowColor: '#fff',
        shadowOpacity: 2,
        elevation: 2,
        position: 'relative',
        alignItems : "center"
    }
});
export default CardSection;