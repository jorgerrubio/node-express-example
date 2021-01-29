const { Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.status(200).send('hola mundo');
});

router.post('/', (req, res) => {
    console.log('body', req.body);
    res.send(req.body);
})

module.exports = router;