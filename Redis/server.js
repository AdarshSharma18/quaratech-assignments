const express = require('express');
const axios = require('axios');
const cors = require("cors");

const Redis = require('redis');

const redisClient = Redis.createClient();

const DEFAULT_EXPIRATION = 3600;

const app = express();
app.use(cors());

app.get('/',(req,res,next)=>{
    res.send('<h1>Hello Everyone</h1>')
})

app.get('/photos',async (req,res,next)=>{
    const albumId = req.query.albumId;
    const photos = await getOrSetCache(`photos?albumId=${albumId}`, async () =>{
        const  {data} = await axios.get(
            `https://jsonplaceholder.typicode.com/photos`,
            {params: {albumId}}
        )
        return data

    })
    
    res.json(photos);
})

app.get("/photos/:id",async (req,res,next)=>{
    const {data} = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
    )
    res.json(data);
})

function getOrSetCache(key,cb){
    return new Promise((resolve,reject)=>{
        redisClient.get(key,async (error,data)=>{
            if(error) return reject(error)
            if(data != null) return resolve(JSON.parse(data))
            const freshData = await cb();
            redisClient.SETEX(key,DEFAULT_EXPIRATION,JSON.stringify(freshData))
            resolve(freshData)
        })
    })
}

app.listen(3000);