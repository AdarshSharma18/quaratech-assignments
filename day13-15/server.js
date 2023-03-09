const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin:'https://localhost:8081'
}


// Middlewares

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))


// routers

const router = require('./routes/productRouters')

app.use('/api/products',router)

// testing api

app.get('/',(req,res)=>{
    res.json({message:'Hello from api'})
    
})

// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})