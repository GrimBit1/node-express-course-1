module.exports = (req, res, next) => {
    console.log('Authorize');
    const {user} = req.query
    if(user==='aditya'){
        req.query.user = {name:"aditya",id:3}
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}