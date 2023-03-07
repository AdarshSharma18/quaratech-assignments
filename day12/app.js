const express = require('express')

const axios = require('axios');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello There.")
})

axios.get('https://official-joke-api.appspot.com/random_joke')
.then((result)=>{
    console.log('Random Data is :',result.data)
    console.log(`Random Joke is : ${result.data.punchline}`);
})
.catch((err)=>{
    console.log('You must have entered the wrong API')
});
app.listen(3000,()=>{
    console.log("this server is running")
})