let express  =require("express");
let app = express();
let database = require('./db/dbConfig')
const {Creators} = require('./db/dbConfig')
app.get('/', (req, res) => {
    res.send('Hello its backend')
});
app.use(express.urlencoded());
app.use(express.json())
app.listen(8080, () => {
    console.log('App listening on port 8080!');
});