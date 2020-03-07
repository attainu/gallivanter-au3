const express = require('express');
const router = express.Router();
const {getAllBlog, getOneBlog} = require('../controllers/appCtrl')
/* GET home page. */
router.get('/articles/:userId?', getAllBlog);

router.get('articles/:articleId', getOneBlog)

module.exports = router;
