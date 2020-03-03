import React, {useState} from 'react';
import {View , Text , StyleSheet , TextInput , TouchableOpacity ,Alert ,ImageBackground} from 'react-native';





const ForgotScreen = ({navigation}) => {
   
const [phonenumber , setPhonenumber] = useState('');


onMessageUpdate=()=>{
    Alert.alert("Your Password is sent to your Registered Mobile number"); 
    setPhonenumber('');
    navigation.navigate('Entry Screen');
   }
    
    return (
        <ImageBackground source = {require('../images/bg4.jpg')} style = {{height : "100%" , width : "100%"}}>
        <View>
                   


                    <View>
                        <TextInput
                        style= {styles.inputStyle}
                        placeholder = "Phone number"
                        value = {phonenumber}
                        onChangeText = {(value)=> setPhonenumber(value)}
                        keyboardType = {"decimal-pad"}
                        placeholderTextColor = "black"
                        />      
                    </View>


                <TouchableOpacity  style={styles.inputButton} onPress={onMessageUpdate}>
                                                <View>
                                                    <Text style = {styles.textInput}>Generate Password</Text> 
                                                </View>
                </TouchableOpacity>   
    </View>
    </ImageBackground>
    );
}

export default ForgotScreen;

const styles = StyleSheet.create({
    container : {
  
        justifyContent : "center",
        alignItems : "center"
    },
    textInput : {
       
        justifyContent : "center",
        alignItems : "center"
    },
    inputStyle : {
        borderBottomWidth : 10,
        fontSize : 30 ,
        textAlign :"center"
    },
    inputButton : {
        marginTop : 20,
        justifyContent : "center",
        alignItems : "center"

    }

});



