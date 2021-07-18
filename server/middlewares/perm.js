const perm=(req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000','http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

module.exports= perm