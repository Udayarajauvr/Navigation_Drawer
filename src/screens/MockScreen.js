/*import React from 'react';
import {View,StyleSheet,Button,Text,ImageBackground,TouchableOpacity} from 'react-native';
 
const MockScreen = ({navigation}) => 
{


    return(
        <ImageBackground source = {require('../images/bg4.jpg')} style = {{height : "100%" , width : "100%"}}>
        <View style = {styles.containerStyle}>
            <Text style = {styles.textStyle}>
                Mock Counselling will be updated soon
            </Text>




            <TouchableOpacity  style={styles.inputButton} onPress={onMessageUpdate}>
                                                <View style = {{padding: 10}}  >
                                                    <Text style = {styles.textInput}>District</Text> 
                                                </View>
            </TouchableOpacity>




          <Button title = "Exit" onPress = {()=> navigation.navigate('Homes')}/> 
        </View>



        





        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    containerStyle : {
        borderBottomWidth : 1,
        borderColor : '#ddd',
        
    },
    textStyle : {
        fontSize: 20,
        textAlign : "center",
        justifyContent : "center",
    
    }
});
export default MockScreen; */



import React, {useState} from "react";
import { Platform, StyleSheet, View, Button, Picker, Alert  ,Text ,ImageBackground} from "react-native";

 const MockScreen =({navigation})=> {

const [PickerSelectedVal1 , setPickerSelectedVal1] = useState('');
const [PickerSelectedVal2 , setPickerSelectedVal2] = useState('');
const [PickerSelectedVal3 , setPickerSelectedVal3] = useState('');
     

   getSelectedPickerValue=()=>{
      Alert.alert("Selected District is : " + PickerSelectedVal1 ,"Selected College Code is : " + PickerSelectedVal2 );
      
    }


  
    return (
        <ImageBackground source = {require('../images/bg4.jpg')} style = {{height : "100%" , width : "100%"}}>
      <View style={styles.container}>
         <View>
                     <Text style = {{fontSize : 15 , fontWeight : "bold"}}> Select District </Text>
                    <Picker
                                selectedValue={PickerSelectedVal1}
                                onValueChange={(itemValue1, itemIndex) => setPickerSelectedVal1(itemValue1)} >

                                <Picker.Item label="Chennai" value="Chennai" />
                                <Picker.Item label="Kanchipuram" value="Kanchipuram" />
                                <Picker.Item label="Tiruvallur" value="Tiruvallur" />
                                <Picker.Item label="Vellore" value="Vellore" />
                                <Picker.Item label="Cuddalore" value="Cuddalore" />
                                <Picker.Item label="Trichy" value="Trichy" />
                                <Picker.Item label="Madurai" value="Madurai" />
                                <Picker.Item label="Coimbatore" value="Coimbatore" />
                                <Picker.Item label="Theni" value="Theni" />
                                <Picker.Item label="Erode" value="Erode" />
                        
                    </Picker>
         </View>


         <View>
                    <Text style = {{fontSize : 15 , fontWeight : "bold"}}> Select College Code </Text>
                    <Picker
                            selectedValue={PickerSelectedVal2}
                            onValueChange={(itemValue2, itemIndex) => setPickerSelectedVal2(itemValue2)} >
                            <Picker.Item label="OC" value="OC" />
                            <Picker.Item label="BC" value="BC" />
                            <Picker.Item label="BCM" value="BCM" />
                            <Picker.Item label="MBC" value="MBC" />
                            <Picker.Item label="SCA" value="SCA" />
                            <Picker.Item label="SC" value="SC" />
                            <Picker.Item label="ST" value="ST" />
                            <Picker.Item label="FC" value="FC" />
                     </Picker>
         </View>


         <View>
                    <Text style = {{fontSize : 15 , fontWeight : "bold"}}> Select Branch </Text>
                    <Picker
                            selectedValue={PickerSelectedVal3}
                            onValueChange={(itemValue3, itemIndex) => setPickerSelectedVal3(itemValue3)} >

                            <Picker.Item label="Mechanical" value="Mechanical" />
                            <Picker.Item label="Civil" value="Civil" />
                            <Picker.Item label= "ECE" value="ECE"/>
                            <Picker.Item label="EEE" value="EEE" />
                            <Picker.Item label="EIE" value="EIE" />
                            <Picker.Item label="CSE" value="CSE" />
                            <Picker.Item label="IT" value="IT" />
                            <Picker.Item label="Chemical" value="Chemical" />

                     </Picker>
         </View>

         <Button title="Get Selected from list" onPress={ getSelectedPickerValue } />
      </View>
      </ImageBackground>
    );
 
  
}

export default MockScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    margin :30
  },
});