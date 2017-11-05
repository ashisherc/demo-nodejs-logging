var express = require('express');
var router = express.Router();
var logger = require('../services/logger');

/* GET users listing. */
router.get('/', function (req, res, next) {
    try {
        /**
         * make a db query to get users
         * I'm hard coding a dummy json for the purpose
         */

        var result = {
            users: [{ name: "user1" }, { name: "user2" }]
        };
    }
    catch (error) {
        /**
         * If something goes wrong, error is sent to next
         * and than its logged by our handler
         */
        next(error);
        return; // return to stop further execution
    }
    res.send(result);
});

router.get('/:id', function (req, res, next) {
    const user = {
        name: "user1"
    };
    // use logger service to log as required.
    logger.info(`requested user id: ${req.params.id}`);
    res.send(user)
})

module.exports = router;

