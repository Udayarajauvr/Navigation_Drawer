import React , {useState} from 'react';
import {View , Text , StyleSheet , TouchableOpacity,  ImageBackground,SafeAreaView} from 'react-native';
import {AppLoading} from  'expo';
import * as Font from 'expo-font';
import Ico from 'react-native-vector-icons/FontAwesome5';
import Mat from 'react-native-vector-icons/MaterialIcons';
import Fontist from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome';


const getFonts = () => Font.loadAsync({
    'OpenSans-Bold' :  require('../../assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular' : require('../../assets/fonts/OpenSans-Regular.ttf'),
    'Pacifico-Regular' : require('../../assets/fonts/Pacifico-Regular.ttf'),
    'Volkhov-BoldItalic' : require('../../assets/fonts/Volkhov-BoldItalic.ttf')


})
const MenuScreen = ({navigation}) => {
    const [fontsLoaded , setFontsLoaded] = useState(false);


    if(fontsLoaded){
        return(
        <SafeAreaView>
        
     <ImageBackground source = {require('../images/bg4.jpg')} style = {{height : "100%" , width : "100%"}}>
         
               

         
                <View style = {styles.container}>
                
                  
                    <View style = {{justifyContent : "space-around"}}>    
                    <TouchableOpacity style = {{justifyContent : "space-around"}} onPress= {()=>{navigation.navigate('CutoffScreen')}}> 
                                      
                                       <View style = {styles.button}>
                                           <Text  style = {styles.buttonText}> 
                                           <Icons name="gears" size={100} color="green" />
                                           {`\n`}{`\n`}
                                               CUTOFF CALCULATOR </Text>
                                       </View>
                              
                       </TouchableOpacity>
                                
                                
                                <TouchableOpacity 
                                onPress= {()=>{navigation.navigate('MockScreen')}}
                                style = {{marginTop : 20}}> 
                            
                                                <View style = {styles.button}>
                                                    <Text style = {styles.buttonText}>
                                                        <Ico name="school" size={100} color="orange" />
                                                        {`\n`}{`\n`}
                                                         MOCK COUNSELLING
                                                        </Text>
                                                </View>
                                     
                                </TouchableOpacity>

                              
                    </View>
                     
            </View>
            
</ImageBackground>

</SafeAreaView>
    );
}
 else {
    return (
    <AppLoading
      startAsync = {getFonts}
      onFinish = {() => setFontsLoaded(true)}
      />
    )
    
  }
  
   } 
        

 export default  MenuScreen;


const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      alignItems: 'center',
      marginBottom : 10,
      marginTop : 50,
      justifyContent : "space-around",
      alignContent : "center"
      
    
    },
    button: {
      marginBottom: 20,
      width: 300,
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius : 50

    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      color: 'black',
      fontSize : 20,
      fontFamily : "OpenSans-Bold"
    }
  });