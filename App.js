import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import Section1 from './Section1'
import Home from './Home'





export default function App() {
  const [bool, setBoolean] = useState(true);
  const [name, setName] = useState('');
  const onPress = () => setBoolean(!bool)
  

  const onSubmit = () => {
    console.log(name)
  }


  // if(bool){
  //   return <Text>login</Text>
  // }else{
  //   return <Text>register</Text>
  // }

  const renderLoginPage = () => {
      return(
        <>
            <Text>Login</Text>
        </>
      )
  }

  const renderRegiserPage = () => {
    return(
      <>
          <Text>Register</Text>
      </>
    )
  }
  
  return (
    <Home/>
  )
  
  
  return (
    <View style={[styles.mainContainer]}>
    
      {bool ? (
        <Text>Login</Text>
      ):(
        <Text>Register</Text>
      ) }


      {/* {bool ? renderLoginPage() : renderRegiserPage() } */}
      <TextInput
        style={{backgroundColor:'white',height:50}}
       value={name}
       onChangeText={setName}
      
      />
      {/* <Button title="update state" color="red" onPress={() => setBoolean(!bool)} />  */}
      {/* <Button title="update state" color="red" onPress={onSubmit} />  */}
      <Button title="update state" color="red" onPress={onPress} /> 
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "gray",
    padding: 33,
    flexDirection: "column",
  },

  firstContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  secondContainer: {
    flex: 1,
    backgroundColor: "gray",
    height: 200,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
  },
  thirdContainer: {
    flex: 1,
    backgroundColor: "gray",
    padding: 20,
    marginTop: 10,
    flexDirection: "column",
  },
  fourthContainer: {
    flex: 1,
    backgroundColor: "gray",
    padding: 6,
    marginTop: 10,
    flexDirection: "row",
  },
  firstShape: {
    backgroundColor: "gray",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  secondShape: {
    backgroundColor: "lightgray",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  specialShape: {
    flex: 1,
    backgroundColor: "gray",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  textsty: {
    paddingTop: 10,
    color: "black",
    fontSize: 22,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  textInputstyle: {
    height: 40,
    padding: 10,
    backgroundColor: "white",
  },
  secondTextInputstyle: {
    marginTop: 20,
    padding: 10,
    lineHeight: 200,
    backgroundColor: "white",
  },
  floatingButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  smalltextsty: {
    // paddingTop: 6,
    color: "black",
    fontSize: 12,
    backgroundColor: "green",
  },
  userContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgray",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  usernameContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
