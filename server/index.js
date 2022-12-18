import express from "express";
// import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors({ origin: "*", credentials: true, methods: "GET,HEAD,PUT,PATCH,POST,DELETE"}));
// import session from "express-session";
// dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.API,
});
const openai = new OpenAIApi(configuration);

const port = 8000;
// app.use(
//   session({
//     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//     saveUninitialized: false,
//     cookie: { maxAge: 10000000000000 },
//     resave: false,
//   })
// );

app.get("/test",(req,res)=>{
  res.send("ytfgc")
})
// Initialize the OpenAI API client

// Define a function that generates a response using GPT-3
app.get("/", (req, res) => {

  console.log(req.query.que)
  async function generateResponse(data) {
    // Call the GPT-3 API to generate a response
    return await openai
      .createCompletion({
        model: "text-davinci-002",
        prompt: data,
        max_tokens: 2048,
      })
      .then((response) => {
        // Return the GPT-3 response as the chatbot's reply
        return response.data.choices[0].text;
      });
  }

  generateResponse(req.query.que).then((response) => {
    console.log(response);
    res.send(response);
  });

  // Listen for user inputs and generate responses using GPT-3
  // process.stdin.on("data", (input) => {
  //   generateResponse(input.toString().trim()).then((response) => {
  //     console.log(response);
  //   });
  // });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
