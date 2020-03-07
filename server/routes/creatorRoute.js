const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {addCreator, creatorLogin, getCreator, addBlogPost, updateImage} = require('../controllers/creatorCtrl')
const upload = require('../middleware/multerConfig');
/* GET users listing. */
router.get('/', auth, getCreator);

router.post('/addcreator', addCreator);

router.post('/login', creatorLogin);

router.post('/articles', auth, addBlogPost);

router.post('/upload/image', auth,upload.any(), updateImage);

module.exports = router;
