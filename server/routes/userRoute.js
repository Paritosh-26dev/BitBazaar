const express = require("express");
const router = express.Router();
const User = require("../models/userCard");
const bcrypt = require('bcryptjs');

//API for registering new user
router.post('/api/register', async (req, res) => {
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10);
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		});
		res.json({ status: 'ok' })
	} catch (err) {
        res.json({ status: 'error', error: 'Duplicate email'})
	}
})

module.exports = router;