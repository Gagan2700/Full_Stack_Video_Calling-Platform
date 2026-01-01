import User from '../Models/user.js';
import bcrypt from 'bcrypt';
import generateToken from '../Utils/generateToken.js';
import userSchema from '../Utils/SchemaValidator.js';

const signup = async (req, res) => {
    try {
        const { error } = userSchema.validate(req.body);
        console.log(error);
        if (error) {
            return res.status(400).json({ msg: error.details[0].message });
        }

        const { name, username, password } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ msg: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            name,
            username,
            password: hashedPassword
        });

        const token = generateToken(newUser._id);

        res
            .cookie("token", token, {
                httpOnly: true,
                sameSite: "lax",
                secure: false,
                maxAge: 7 * 24 * 60 * 60 * 1000,
            })
            .status(201)
            .json({ msg: "User Created" });

    } catch (e) {        
        console.error(e);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        if(!username || !password){
            return res.status(400).json({msg:"All fields are required "});
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ msg: "Invalid Credentials" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ msg: "Invalid Password" });
        }

        const token = generateToken(user._id);

        res
            .cookie("token", token, {
                httpOnly: true,
                sameSite: "lax",
                secure: false,
                maxAge: 7 * 24 * 60 * 60 * 1000,
            })
            .status(200)
            .json({ msg: "Logged in Successfully" });

    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

const logout = async (req, res) => {
    try {
        if (!req.cookies?.token) {
            return res.status(401).json({ msg: "Not logged in" });
        }

        res.clearCookie("token", {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
        });

        res.status(200).json({ msg: "Logout successful" });

    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

export { signup, login, logout };
