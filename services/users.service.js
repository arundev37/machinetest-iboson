const { User } = require("../models/users.schema")

module.exports.createUser = async (data) => {
    const user = await User.findOne({ email: data.email });
    if(user) {
        throw new Error('User already registered')
    }
    const newUser = new User(data);
    await newUser.save();
    return 'Success'
}