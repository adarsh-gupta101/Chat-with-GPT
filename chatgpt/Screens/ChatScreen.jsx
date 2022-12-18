import axios from "axios";
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

function ChatScreen() {
  // fetch from backend
  const [messages, setMessages] = useState([]);

  async function getResult() {
    // axios
    //   .get(`http://localhost:8000?que=${messages}`, {
    //     headers: { "Access-Control-Allow-Origin": "*" },
    //   })
    //   .then((res) => {
    //     console.log(res)
    //   });
    try {
      const response = await axios.get(`http://localhost:8000?que=${messages}`);
      //   const response = axios.get(`http://localhost:8000?que=${messages}`);

      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Text>Your AI Assistant</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Type your message here...'
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button
        title='Send'
        onPress={() => {
          // Send the message here
          getResult();
        }}
      />
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#ffffff",
    height: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
};

export default ChatScreen;
