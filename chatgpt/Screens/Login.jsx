import React, { useEffect } from "react";
import axios from "axios"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

const Login = ({ navigation }) => {
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`
useEffect(()=>{
    axios.get("http://localhost:8000/test").then(res=>{
        alert(res)
    })
})
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Your Virtual Assistant</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("chat")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ebebeb",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4287f5",
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
