const {
    Router
} = require('express');
const router = Router();
const Message = require('../utils/messages');

router.use((req, res, next) => {
    const value = req.header('x-skip-request');
    if (value) {
        res.status(401).json(Message.error('Unauthorized'));
    } else {
        next();
    }

});

module.exports = router;