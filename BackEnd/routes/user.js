const router = require('express').Router();

router.get("/usertest", (req,res) => {
    res.send("User Route Successful");

});

module.exports = router;