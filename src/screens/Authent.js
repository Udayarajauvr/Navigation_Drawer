import React, { useState } from 'react';
import {View,StyleSheet,Text,ImageBackground,TextInput ,KeyboardAvoidingView,TouchableOpacity, Alert } from 'react-native';
import Navigation from '../navigator/Navigation'; 


const AuthentScreen = () => 
{
    const [loggedIn, setLoggedIn] = useState(false);

    onCal=()=>{
        if(!loggedIn) {
        return (
        <Navigation/> 
        );
        } else {
            setLoggedIn(false);
            Alert.alert("BOOOM");
        }}


    return(
        <KeyboardAvoidingView>
        <ImageBackground source = {require('../images/bg4.jpg')} style = {{height : "100%" , width : "100%"}}>
    <View style = {{alignItems  : "center" , marginTop :20}}>

          
    <View style = {{marginTop:5 , justifyContent : "center" , alignContent : "center" , alignItems : "center"}}>
          <Text style = {{fontSize : 30}}>Enter Profile Details</Text>
                   <TextInput 
                       style= {styles.input}
                       placeholder = "Enter Your Name"
                       keyboardType = {"default"}
                       autoCorrect = {false}
                       clearTextOnFocus = {true}
                   />
                   <TextInput 
                       style= {styles.input}
                       placeholder = "Enter your Email Address"
                       keyboardType = {"default"}
                       placeholderTextColor = "black"
                       autoCorrect = {false}
                       clearTextOnFocus = {true}
                   />
                  <TextInput 
                   style= {styles.input}
                   placeholder = "Enter Alternate Number"
                   keyboardType = {"default"}
                   placeholderTextColor = "black"
                   autoCorrect = {false}
                   clearTextOnFocus = {true}
                   />
                   <TextInput 
                   style= {styles.input}
                   placeholder = "Enter Address"
                   keyboardType = {"default"}
                   placeholderTextColor = "black"
                   autoCorrect = {false}
                   clearTextOnFocus = {true}
                   />

               <TouchableOpacity  style = {styles.inputButton} onPress={onCal} >
                <Text>Save</Text>
               </TouchableOpacity>
           
        

     </View>
   
    </View>
    </ImageBackground>
    </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
   container : {
       flex :1 ,
       justifyContent : "center",
       alignItems : "center"
   },
   input : {
       width : 300,
       height : "15%" ,
       borderColor: 'gray',
       borderWidth: 2 ,
       borderRadius : 10,
       marginTop:20,
       textAlign : "center",
       fontSize : 20
   },
   inputButton : {
       borderRadius : 40,
       marginTop:20,
       backgroundColor : "orange",
       width:200,
       height:40,
       alignSelf : "center",
       justifyContent : "center",
       alignItems : "center"   ,
       fontSize : 20
         
   }
});
export default AuthentScreen;