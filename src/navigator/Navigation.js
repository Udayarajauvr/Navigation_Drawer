import * as React from 'react';
import {Button , View, Text , TouchableOpacity}  from 'react-native';
import { NavigationContainer , DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
     } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import CutoffScreen from '../screens/CutoffScreen';
import MockScreen from '../screens/MockScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LogoutScreen from '../screens/LogoutScreen';
import EntryScreen from '../screens/EntryScreen';
import OTPScreen from '../screens/OTPScreen';
import ForgotScreen from '../screens/ForgotScreen';


import Icons from 'react-native-vector-icons/FontAwesome';



const Stack = createStackNavigator();
const Drawer= createDrawerNavigator(); 


function LogoTitle() {
  return (
   
    <Icons  name="bars" size={30} color="white" />
  
   );
}

export default function App() {

createHomeStack = ({navigation}) =>
      
      <Stack.Navigator >
         <Stack.Screen 
                name="Entry Screen"
                component={EntryScreen} 
                options={{
      
                        headerShown  : false ,
                   
                        headerRight:(props) => (
                          <TouchableOpacity  
                          style = {{marginRight: 10 }}   
                          onPress={() => {navigation.dispatch(DrawerActions.openDrawer)}}>
                          <LogoTitle
                           {...props}
                         />
                         </TouchableOpacity>
                            ),
                    headerTitle:'Login', 
                    headerStyle: 
                            {
                            backgroundColor: '#e57373'
                          
                            },
                    headerTintColor: 'black',
                    headerTitleStyle: 
                            {
                            fontWeight: 'bold',
                            fontSize : 25,
                            color : "#fff"
                           
                       
                            },
                            headerTitleAlign : 'center'
                            }}
            /> 
          <Stack.Screen 
                name="Homes"
                component={HomeScreen} 
                options={{
                    headerRight:(props) => (
                      <TouchableOpacity  
                      style = {{marginRight: 10 }}   
                      onPress={() => {navigation.dispatch(DrawerActions.openDrawer)}}>
                      <LogoTitle
                       {...props}
                     />
                     </TouchableOpacity>
                        ),
                       
                    headerTitle:'Homes', 
                    headerStyle: 
                            {
                            backgroundColor: '#e57373'
                          
                            },
                    headerTintColor: 'black',
                    headerTitleStyle: 
                            {
                            fontWeight: 'bold',
                            fontSize : 25,
                            color : "#fff"
                           
                       
                            },
                            headerTitleAlign : 'center'
                            }}
            /> 
            <Stack.Screen name="CutoffScreen" 
            component={CutoffScreen} 
            options={{
                title: 'Cutoff Calculator',
                headerStyle: {
                  backgroundColor: '#e57373',
            
                },
                headerTitleAlign : 'center',
                headerRight:(props) => (
                  <TouchableOpacity  
                  style = {{marginRight: 10 }}   
                  onPress={() => {navigation.dispatch(DrawerActions.openDrawer)}}>
                  <LogoTitle
                   {...props}
                 />
                 </TouchableOpacity>
                    ),
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize : 20,
                  color : "#fff",
                }}}/>
            <Stack.Screen name="MockScreen" 
            component={MockScreen} 
            options={{
              title: 'Mock Counselling',
              headerTitleAlign : 'center',
              headerRight:(props) => (
                <TouchableOpacity  
                style = {{marginRight: 10 }}   
                onPress={() => {navigation.dispatch(DrawerActions.openDrawer)}}>
                <LogoTitle
                 {...props}
               />
               </TouchableOpacity>
                  ),
              headerStyle: {
                backgroundColor: '#e57373',
          
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize : 20,
                color : "#fff",
              }}}
            />
             <Stack.Screen name="OTPScreen" 
            component={OTPScreen} 
            options={{
              title: 'Verify your Account',
              headerTitleAlign : 'center',
              headerStyle: {
                backgroundColor: '#e57373',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize : 20,
                color : "#fff"
              }}}
            />
              <Stack.Screen name="ForgotScreen" 
            component={ForgotScreen} 
            options={{
              title: 'Forgot Password',
              headerTitleAlign : 'center',
              headerStyle: {
                backgroundColor: '#e57373',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize : 20,
                color : "#fff"
              }}}
            />
               
        </Stack.Navigator>
       
     

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Contact"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Help"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

/*function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
    
        onPress={() => Linking.openUrl('https://mywebsite.com/help')}
      />
    </DrawerContentScrollView>
  );
} */
        return (
                <NavigationContainer>
                    <Drawer.Navigator
                     initialRouteName="Home"
                     drawerContent={props => <CustomDrawerContent {...props} />}>
                        <Drawer.Screen  name="Home" component={createHomeStack} />
                        <Drawer.Screen name="Edit Profile" children={ProfileScreen} />
                        <Drawer.Screen name="Logout" children={LogoutScreen}/>
                    
                    </Drawer.Navigator>                  
                </NavigationContainer>
  );
}
<Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
  {/* screens */}
</Drawer.Navigator>