const {Creator, BlogPost, Comment, Image}  = require('../db/dbConfig');

const getAllBlog = (req,res) =>{
    if(req.params.userId){
        BlogPost.findAll({
            include:[
                {
                    model: Creator,
                    where: {
                        id: req.params.userId
                    },
                    model: Comment
                }
            ],
            order: [['updatedAt', 'DESC']]
        })
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json({error: error.message})
        })
    }
    else{
        BlogPost.findAll({
            include:[Creator,Comment],
            order: [['updatedAt', 'DESC']]
        })
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json({error: error.message})
        })
    }
}
const getOneBlog = (req, res) => {
    const blogId = req.params;
    console.log(blogId);
    BlogPost.findOne({
        where: {blogId: blogId},
        include:[Creator,Comment, Image]
    })
    .then(blogData => {
        res.json(blogData)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
}
module.exports = {
    getAllBlog,
    getOneBlog
}