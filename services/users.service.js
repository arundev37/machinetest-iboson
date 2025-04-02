const { User } = require("../models/users.schema")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.createUser = async (data) => {
    const user = await User.findOne({ email: data.email });
    if(user) {
        throw new Error('User already registered')
    }
    const hash = await bcrypt.hash(data.password, saltRounds)
    data.password = hash;
    const newUser = new User(data);
    await newUser.save();
    return {message: 'Success'}
}

module.exports.signIn = async (data) => {
    const user = await User.findOne({ email: data.email });
    const isCorrectPassword = await bcrypt.compare(data.password, user.password)
    if(user && isCorrectPassword) {
        const token = jwt.sign({ name: user.name, id: user._id }, process.env.secret, { expiresIn: '1d' });
        return { token, message: 'Success' }
    }

    throw new Error('Invalid user')
}