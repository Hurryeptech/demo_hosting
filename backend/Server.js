const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const model = require("./model")
const cors = require("cors")
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("mongodb connected")
})
app.use(express.json())
app.use(cors())
app.post('/addUser',async(req,res)=>{

    const {name,email} = req.body

    const create = await model.create({name: name,email: email})

    res.status(201).json({
        success: true
    })
})

app.get('/getUser',async(req,res)=>{

   

    const create = await model.find()

    res.status(201).json({
        success: true,
        create
    })
})

app.listen(process.env.PORT,()=>{
    console.log("server started",process.env.PORT)
})


