/*import React from 'react';
import {View , Text , StyleSheet , TextInput , ImageBackground} from 'react-native';



const OTPScreen = ({navigation}) => {
    return (
        <ImageBackground source = {require('../images/bg4.jpg')} style = {{height : "100%" , width : "100%"}}>
            <View style = {styles.container}>
                <Text>
                Verify Your OTP
                </Text>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    }
});

export default OTPScreen; */



import React from "react";
import { View , StyleSheet , Text ,ImageBackground , TouchableOpacity} from "react-native";
import OtpInputs from "react-native-otp-inputs";

 
const OTPScreen = ({navigation}) =>  {
    otpRef = React.createRef();

    
  resetOTP = () => {
    otpRef.current.reset();
  };


  return (
 <ImageBackground source = {require('../images/bg4.jpg')} style = {{height : "100%" , width : "100%"}}>
      <View style={styles.container}>
        <OtpInputs
          ref={otpRef} 
          handleChange={code => console.log(code)}
          numberOfInputs={4}
          secureTextEntry = {true}
        />
        <View style = {styles.buttonStyle}>
         <TouchableOpacity   onPress={this.resetOTP}>  
                    <Text>
                        Reset
                    </Text>
         </TouchableOpacity>

         <TouchableOpacity  style = {{paddingLeft : 40 }}onPress = {()=> navigation.navigate("Homes")}>  
                    <Text>
                        Submit
                    </Text>
         </TouchableOpacity>
        </View>
    </View>
</ImageBackground>
      
    );
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        marginTop : 50,
        
    },
    buttonStyle :{
       paddingBottom : 400,
        flexDirection : "row"
       
    }
    
}
);
export default OTPScreen;
