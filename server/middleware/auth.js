const authRoute = (req,res,next) =>{
    const header = req.headers['authorization'];
    if(typeof header !== 'undefined'){
        const bearer = header.split(' ');
        const token = bearer[1];
        req.token = token;
        next();
    }
    else{
        res.status(403).send("<h1 align='center'>Request Denied: Protected URL</h1>")
    }
}
module.exports = authRoute;