import React, { useState} from 'react';
import {View , Text, StyleSheet , TextInput ,Alert,TouchableOpacity, KeyboardAvoidingView, ImageBackground,ScrollView} from 'react-native';

const CutoffScreen = ({navigation}) => {
 const [physics , setPhysics] = useState('');
 const [chemistry , setChemistry] = useState('');
 const [maths , setMaths] = useState('');
 const [result , setResult] = useState(0);

  onCal=()=>{
 var cal = Math.round(((physics/4) + (chemistry/4) + (maths/2)));

 if((cal > 200) || (cal < 60))
 {
     Alert.alert("Check your Marks");
     return;
 }
 else{
    setResult(cal);
    setPhysics('');
    setChemistry('');
    setMaths('');
   }
  }


 return (
   
     <KeyboardAvoidingView  style = {styles.container}
     behavior  = "padding">
         <ImageBackground source = {require('../images/bg4.jpg')} style = {{height : "100%" , width : "100%"}}>
     <View style = {{alignItems  : "center" , marginTop :20}}>
           
    <View style = {{marginTop:10}}>
                    <TextInput 
                        style= {styles.input}
                        placeholder = "Enter Physics Marks"
                        onChangeText ={(value) => setPhysics(value)}
                        value = {physics}
                        keyboardType = {"decimal-pad"}
                        placeholderTextColor = "black"
                       
                    />
                    <TextInput 
                        style= {styles.input}
                        placeholder = "Enter Chemistry Marks"
                        onChangeText ={(value) => setChemistry(value)}
                        value = {chemistry}
                        keyboardType = {"decimal-pad"}
                        placeholderTextColor = "black"
                     
                    />
                    <TextInput 
                    style= {styles.input}
                    placeholder = "Enter Maths Marks"
                    onChangeText ={(value) => setMaths(value)}
                    value = {maths}
                    keyboardType = {"decimal-pad"}
                    placeholderTextColor = "black"
                    
                    />
            <View style = {styles.inputButton} >
                <TouchableOpacity onPress = {onCal}> 
                 <Text>Submit</Text>
                </TouchableOpacity>
            </View>
            
           <Text  style = {{marginTop:20 , fontSize : 25 , textAlign : "center"}}> 
                    Your Cutoff Value  {result}
            </Text>

          <TouchableOpacity 
                style = {{alignSelf : "center", justifyContent : "center" }}
                onPress={()=>navigation.navigate('Homes')}>
                    <Text style = {{paddingTop : 20}}> 
                                Return to HomeScreen 
                    </Text>
          </TouchableOpacity>

      </View>
    
     </View>
     </ImageBackground>
     </KeyboardAvoidingView>
  
 );
}

export default CutoffScreen ; 

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