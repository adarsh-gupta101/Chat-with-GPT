import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Screens/Login";
import { NavigationContainer } from '@react-navigation/native';
import ChatScreen from "./Screens/ChatScreen";


const Stack = createStackNavigator();


export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>ChatGPT as a Service! let's try it-</Text>
    //   <StatusBar style='auto' />
    // </View>
    <NavigationContainer>

<Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Login}  />
     <Stack.Screen name="chat" component={ChatScreen} />
  {/*  <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Settings" component={Settings} /> */}
  </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
