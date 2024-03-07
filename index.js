
/*
import express from "express";
import {V4} from "uuid";
import cors from "cors"
*/

const express = require('express')
const uuid = require('uuid')
const cors = require ('cors')


const app = express()
const port = 3001
app.use(express.json())
app.use(cors())

const checkid = (req, res, next) =>{
     
    const { id } = req.params
    const index = user.findIndex(user => user.id === id)
    if (index < 0) {
        return res.status(404).json({ message: " user not found" })
    }
   
    req.userindex = index 
    req.userid = id
   
    next()

}

const user = []

app.get('/Users', (req, res) => {
    return res.json(user)
})
app.post('/Users', (req, res) => {
    const { name, age } = req.body
    const newuser = { id: uuid.v4(), name, age }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        user.push(newuser)
    return res.json(newuser)
})
app.put('/Users/:id',checkid, (req, res) => {
    const { name, age } = req.body
    const index  = req.userindex
    const id = req.userid
    const Userupdate = { id, name, age }
    
    user[index] = Userupdate
    return res.json(Userupdate)
})
app.delete('/Users/:id',checkid, ( req, res ) => {
   
    const index  = req.userindex
   
    user.splice (index, 1)
   
   
    return res.status(202).json()
})




app.listen(port, () => {
    console.log(`Server started ${port}🚀`)
})