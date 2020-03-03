import React , {useState} from 'react';
import {View,StyleSheet,Text,TextInput,ImageBackground,Image,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
 
const EntryScreen = ({navigation}) =>{


    const [userName , setUserName] = useState("");
    const [password , setPassword] = useState(null);

    
  onPal=()=>{
    setUserName("");
    setPassword(null);
}


    return(
        
        <ImageBackground source = {require('../images/bg4.jpg')} style = {{height : "100%" , width : "100%"}}>
            <KeyboardAvoidingView  behavior  = "padding" style = {{flex : 1 , alignItems : "center" ,justifyContent : "center" }}>
             <View style = {{marginTop : 100}}>
                    <View style = {styles.container}>
                            <Image source = {require('../../assets/tnlogo.png')} style = {{height : 400 , width : 400}} />
                    </View>    

                <View style = {{paddingBottom: 20,justifyContent : "center", alignItems : "center" }}>
                    <TextInput 
                        style= {styles.inputStyle}
                        placeholder = "Phone number"
                        onChangeText ={(value) => setUserName(value)}
                        value = {userName}
                        keyboardType = {"decimal-pad"}
                        placeholderTextColor = "black"
                       
                    />
                    <TextInput 
                        style= {styles.inputStyle}
                        placeholder = "Passsword"
                        onChangeText ={(value) => setPassword(value)}
                        value = {password}
                        keyboardType = {"default"}
                        placeholderTextColor = "black"
                        secureTextEntry = {true}
                    />
                </View>
                      
                    <View style = {{paddingBottom: 20,alignItems : "center" , flexDirection : "row" , justifyContent : "space-around"}}>
                            <TouchableOpacity style={styles.inputButton} onPress={()=>navigation.navigate('Homes')}>
                                    <View style = {{padding : 10}} >
                                        <Text style = {styles.textInput}>Login</Text> 
                                    </View>
                            </TouchableOpacity>        

                            <TouchableOpacity  style={styles.inputButton} onPress={()=>navigation.navigate('Edit Profile')}>
                                        <View style = {{padding: 10}}  >
                                            <Text style = {styles.textInput}>Signup</Text> 
                                        </View>
                            </TouchableOpacity>        
                    </View>

                      
                         <TouchableOpacity style = {{paddingBottom: 10,alignItems : "center"}} onPress={()=>navigation.navigate('ForgotScreen')}>
                             <View>
                             <Text> Forgot Password</Text>
                             </View>
                             
                        </TouchableOpacity> 
                        <TouchableOpacity  onPress = {onPal} style = {{paddingBottom: 190,alignItems : "center"}}>
                             <View>
                             <Text> Reset</Text>
                             </View>

                             
                             
                        </TouchableOpacity> 
                     
            </View>
   </KeyboardAvoidingView>
    </ImageBackground>

);
}

const styles = StyleSheet.create({
   container : {
       flex : 1,
       justifyContent : "center",
       alignItems : "center",
       alignSelf : "center",
      marginBottom : 90,
      marginTop : 200
       
          },
  
   inputButton : {
       borderRadius : 40,
       backgroundColor : "#212121",
       width:150,
       height:40,
       alignSelf : "center",
       justifyContent : "space-between",
       alignItems : "center"   ,
       fontSize : 20   ,
       shadowColor : "#FFF",
       shadowOpacity : 2,
       shadowRadius : 2,
       elevation : 5,
       marginBottom : 10

   },
   textInput : {
     fontSize : 15 , 
     textAlign : "center",
     justifyContent : "center",
     alignSelf  :"center" ,
     color : "#fff",
     textAlignVertical : "center"
   },
   inputStyle : {
    width: 300,
    height: 55,
    backgroundColor: '#fff',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 15,
    fontWeight: '500'
   }
});
export default EntryScreen;