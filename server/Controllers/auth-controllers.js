const User = require("../Models/User.model")
// const bcrypt = require("bcryptjs");

// home
const Home = async (req, res ) => {
    try {
        const homeAPI = req.body;
        console.log(req.body)
        res.status(200).json(homeAPI)
    } catch (error) {
        console.log(error)
    }
}

// signUp
const signUp = async (req, res) => {
    try {
        const {email, password , username} = req.body;
        // const userExist = await User.findOne ({email});
        // const signUpData = req.body;
        // console.log(signUpData);
        // res.status(200).json({msg : signUpData})

        const userExist = await User.findOne({email});
        if(userExist) {
         return res.status(400).json({msg : "Email Already Exist"})
        }
 
       const UserData =  await User.create ({username, email, password});
       res.status(200).json({msg : "SignUp Successfully", 
        token: await UserData.generateToken(),
        userId: UserData._id.toString(),
       })

     
    } catch (error) {
        console.log(error)
    }
}


// login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        const isMatch = await user.comparePassword(password);
        console.log("password match", isMatch)

        if (isMatch) {
            res.status(200).json({
                msg: "Login Successful",
                token: await user.generateToken(),
                userId: user._id.toString(),
            });
        } else {
            res.status(400).json({ msg: "Invalid Email or Password" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server Error" });
    }
};





module.exports = {Home , signUp, login} ; 