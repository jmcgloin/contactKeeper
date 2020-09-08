//const express = require('express');
import express from 'express';
const router = express.Router();

// CRUD

// @route 	POST api/contacts
// @desc		Adds a new contact
// @access	Private

router.post('/', (req, res) => {
	res.json({ msg: 'Add a new contact' });
});

// @route 	GET api/contacts
// @desc		Gets all user's contacts
// @access	Private

router.get('/', (req, res) => {
	res.json({ msg: 'Gets all contact' });
});

// @route 	PUT(PATCH) api/contacts/:id
// @desc		Updates an existing contact
// @access	Private

router.put('/:id', (req, res) => {
	const id = req.params.id
	res.json({ msg: `Update contact ${id}` });
});

// @route 	DELETE api/contacts/:id
// @desc		Deletes a contact
// @access	Private

router.delete('/:id', (req, res) => {
	const id = req.params.id
	res.json({ msg: `Delete contact ${id}` });
});

// module.exports = router;
export default router;