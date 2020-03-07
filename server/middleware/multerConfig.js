const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file, cb) => {
        if(file.mimetype === 'image/jpeg' || file.mimetype ==='image/png'){
            cb(null, './files/images/');
        }
        else{
            cb({message: 'this file type in not supported'}, false)
        }
    },
    filename: (req,file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage});
module.exports = upload;