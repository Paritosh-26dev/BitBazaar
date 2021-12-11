require('dotenv').config();
const express = require("express");
const router = express.Router();
const User = require("../models/userCard");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//API for loging in user
router.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			process.env.JWT_SECRET
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

module.exports = router;