const express = require('express');
const router = express.Router();

// @route 	GET api/info
// @desc		Shows the current info
// @access	Public

router.get('/', (req,res) => {
	res.send("Here's your info");
});

module.exports = router;