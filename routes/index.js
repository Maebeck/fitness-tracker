const router = require("express").Router();
const apiRoutes = require('./api/apiRoutes');
const home = require('./home');


router.use('/api', apiRoutes)

router.use('/', home)

router.use((req, res) => {
    res.send("<h1> Wrong Route! </h1>")
});

module.exports = router;