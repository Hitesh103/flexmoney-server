// const bcrypt = require('bcrypt');
const User = require('../model/User');

class RegisterController {
    constructor() {
        this.name = 'RegisterController';
    }

    async create(req, res) {
        try {
            const { name, age, phone, email, current_batch, start_date } = req.body;

            // Check if the user with the given email already exists
            const existingUser = await User.getUserByEmail(email);

            if (existingUser.length > 0) {
                return res.status(400).json({ error: 'User with this email already exists' });
            }

            // const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = {
                name,
                age,
                phone,
                email,
                current_batch,
                start_date,
            };

            let flag = true;

            const registrationResult = await User.registerUser(newUser,flag);

            if (registrationResult.affectedRows > 0) {
                return res.status(201).json({ message: 'Registration successful' });
            } else {
                return res.status(500).json({ error: 'Registration failed' });
            }
        } catch (error) {
            console.error('Error during user registration:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports =  RegisterController;