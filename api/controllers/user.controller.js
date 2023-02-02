const auth = require("./../models/user.model")
const bcrypt = require("bcryptjs")

// Register

const Register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(16);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newauthUser = new auth({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        })
        const authuser = await newauthUser.save();
        res.status(200).json(
            authuser
        );
    } catch (err) {
        res.status(500).json(err);
    }
};


//Login

const Login = async (req, res) => {
    try {
        const authuser = await auth.findOne({ email: req.body.email });
        !authuser && res.status(400).json({ message: 'email not match!' });

        const validated = await bcrypt.compare(req.body.password, authuser.password);
        !validated && res.status(400).json({ error: 'password not match!' });

        const { password, ...others } = authuser._doc;

        res.status(200).json({ success: 'login successfully!', others });
    } catch (err) {
        res.status(500).json({ error: 'you have no account', err });
    }
};


//All User

const all = async (req, res) => {
    try {
        const authuser = await auth.find();
        res.status(200).json(authuser);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
};

const FindAUserById = async (req, res, next) => {
    let userId = req.params.Id;
    try {
        const user = await auth.findOne({ Id: userId })
        res.status(200).json(user)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    Register,
    Login,
    all,
    FindAUserById
}