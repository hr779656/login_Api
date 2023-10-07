const login_schema = require('../model/login')

const login_Data = async (req, res)=>{
    const {username, email, password} = req.body
    try{
        login_schema.create({
            username: username,
            email: email,
            password: password
        }).then((result)=>{
            res.status(200).json({user: result, msg : 'user save dataBase'})
        })
    }catch(err){
        console.log(err)
        res.status(500).json({msg: err})
    }
}

module.exports = {login_Data}