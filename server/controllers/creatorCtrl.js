const {Creator, BlogPost, Image}  = require('../db/dbConfig');
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const cloud = require('../middleware/cloudinaryConfig');

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

const addBlogPost = (req,res) => {
    jwt.verify(req.token, `${process.env.SECRET}`, (error, authData) => {
        if(error){
            res.sendStatus(403);
        }
        else{
            BlogPost.create(req.body)
            .then(postData => {
                 res.json({
                     postData,
                     authData
                 })
            })
            .catch(error => {
                res.status(500).json({error: error.message})
            })
        }
    })
}
const updateImage = (req,res) => {
        jwt.verify(req.token, `${process.env.SECRET}`, (err, authData) => {
        if(err){
            res.sendStatus(403);
        }
        else{
            const imageDetails = {
                imageName: req.body.imageName
            }
            console.log("image: ", imageDetails)
            Image.findOne({
                where: {
                    imageName: imageDetails.imageName
                }
            }, (err, callback) => {
                if(err) throw err;
                else if(callback.length >= 1){
                    res.json({
                        message: 'file already exist'
                    })
                }
                else{
                    const imageDetails = {
                        imageName: req.body.imageName,
                        cloudImage: req.files[0].path,
                        blogPostId: req.body.blogPostId
                    }
                    console.log('imageDetails:, ' ,imageDetails)
                    cloud.uploads(imageDetails.cloudImage)
                    .then((result) => {
                        const imageDetails = {
                            imageName: req.body.imageName,
                            cloudImage: result.url,
                            blogPostId: req.body.blogPostId
                        }
                        Image.create(imageDetails)
                        .then(imageData => {
                            res.json({
                                imageData,
                                authData
                            })
                        })
                        .catch(error => {
                            res.status(500).json({error: error.message})
                        })
                    })
                }
            })
            .catch(error => console.log('cloudinary-error: ',error))
        }
    })
}
module.exports = {
    addCreator,
    creatorLogin,
    getCreator,
    addBlogPost,
    updateImage
}