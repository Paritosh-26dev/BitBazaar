const express = require("express");
const router = express.Router();
const User = require("../models/userCard");
const bcrypt = require('bcryptjs');
const generateToken = require("../utils/generateToken");

//API for loging in user
router.post('/api/login', async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password)
    	return res.status(400).json({ msg: "Not all fields have been entered." });

	const user = await User.findOne({ email: email });
    if (!user)
	{
		return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });
	}

	const isPasswordValid = await bcrypt.compare(password, user.password);

	if (isPasswordValid) {
		const token = generateToken(user._id);
		return res.json({ status: 'ok', user: token });
	} else {
		return res.json({ status: 'error', user: false });
	}
})

module.exports = router;