// const express = require('express');
import express from 'express';

const router = express.Router();

// @route 	GET api/info
// @desc		Shows the current info
// @access	Public

router.get('/', (req,res) => {
	res.send("Here's your info");
});

// module.exports = router;
export default router;