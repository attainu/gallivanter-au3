const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {addCreator, creatorLogin, getCreator} = require('../controllers/creatorCtrl')

/* GET users listing. */
router.get('/', auth, getCreator);

router.post('/addcreator', addCreator);

router.post('/login', creatorLogin);

module.exports = router;
