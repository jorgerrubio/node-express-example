const {
    Router
} = require('express');
const router = Router();

router.use((req, res, next) => {
    const time = Date.now();
    console.log(req.url, '@', time);
    next();
    console.log(req.url, '@', Date.now() - time);
});

module.exports = router;