const Creator  = require('../models/CreatorModel');
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const addCreator = (req,res) =>{
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }
    console.log("BodyData:- ",data);
    Creator.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(author => {
        if(!author){
            Creator.create(data)
            .then(author => {
                res.json(author)
            })
            .catch(error =>{
                    res.status(500).json({error:error.message})
            })
        }
        else{
            res.json({error:"Email id already taken"})
        }
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
}

const creatorLogin = (req,res) => {
    console.log('login-body-data: ',req.body);
       const email = req.body.email
       const password  = req.body.password
    Creator.findOne({
        where: {
            email: email
        }
    })
    .then(author =>{
      if(author){
          if(bcrypt.compareSync(password, author.password)){
              let token = jwt.sign(author.dataValues, `${process.env.SECRET}`, {
                  expiresIn: '24h'
              });
              jwt.verify(token, `${process.env.SECRET}`, (error,data)=>{
                  console.log(error,data)
              });
              res.json({success: true, token: token})
          }
          else{
              res.status(400).json({error: error.message})
          }
      }
      else{
          res.status(400).json({error: "User Not Found"})
      }
    })
}

const getCreator = (req,res) =>{
    jwt.verify(req.token, `${process.env.SECRET}`, (error, authData) => {
        if(error){
            console.log('Cannot connect to protected route')
            res.sendStatus(403);
        }
        else{
            res.json({
                message: 'Success loggedIn',
                authData
            })
            console.log('connected to protected route')
        }
    })
}
module.exports = {
    addCreator,
    creatorLogin,
    getCreator
}