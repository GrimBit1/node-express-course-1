let logger =  (req, res, next) => {
    console.log('Hi');
    return next();
};

module.exports = logger;