import React,{useState} from 'react';
import {View,StyleSheet,Text,ImageBackground,TextInput ,KeyboardAvoidingView,TouchableOpacity,Alert , Picker } from 'react-native';


export default ProfileScreen = ({navigation}) => 
{
    const [selectedValue, setSelectedValue] = useState("bds");
    const [PickerSelectedVal , setPickerSelectedVal] = useState('');


    getChecked = (value) => {
        // value = our checked value
        Alert.alert(value);
        }

    return(
       
        <ImageBackground source = {require('../images/bg4.jpg')} style = {{height : "100%" , width : "100%"}}>
             <KeyboardAvoidingView behavior  = "padding" style = {{flex : 1 , alignItems : "center" ,justifyContent : "center" }}>
    <View style = {{alignItems  : "center" , marginTop :20}}>

          
    <View style = {{marginTop:5 , justifyContent : "center" , alignContent : "center" , alignItems : "center"}}>
          <Text style = {{fontSize : 30}}> Enter Profile Details</Text>
                   <TextInput 
                       style= {styles.input}
                       placeholder = "Enter Student Name"
                       keyboardType = {"default"}
                       placeholderTextColor = "black"
                       autoCorrect = {false}
                       clearTextOnFocus = {true}
                   />
                   <TextInput 
                       style= {styles.input}
                       placeholder = "Enter your Qualification"
                       keyboardType = {"default"}
                       placeholderTextColor = "black"
                       autoCorrect = {false}
                       clearTextOnFocus = {true}
                   />
                    <TextInput 
                    require
                   style= {styles.input}
                   placeholder = "Phone Number"
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
                   <TextInput 
                   style= {styles.input}
                   placeholder = "Enter Password"
                   keyboardType = {"default"}
                   placeholderTextColor = "black"
                   autoCorrect = {false}
                   clearTextOnFocus = {true}
                   secureTextEntry = {true}
                   />
                   <TextInput 
                   style= {styles.input}
                   placeholder = "Confirm Password"
                   keyboardType = {"default"}
                   placeholderTextColor = "black"
                   autoCorrect = {false}
                   clearTextOnFocus = {true}
                   secureTextEntry = {true}
                   />

                 <View style= {{marginTop : 10}}>
                    <Text style = {{fontSize : 20 , fontWeight : "bold"}}> Select Community </Text>
                    <Picker
                            selectedValue={PickerSelectedVal}
                            onValueChange={(itemValue, itemIndex) => setPickerSelectedVal(itemValue)} >

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

                                         
       <TouchableOpacity onPress={()=>navigation.navigate('OTPScreen')}> 
                    <View style = {styles.inputButton} >
                    <Text>Save</Text>
                    </View>
       </TouchableOpacity>
    
     </View>
   
    </View>
    </KeyboardAvoidingView>
    </ImageBackground>
 
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
       height : "6%" ,
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
