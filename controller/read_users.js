const read_user = require('../model/login');


const userList = async (req, res) =>{
    try{
    const allUsers = await read_user.findAll()
    res.status(200).send(allUsers)
    }catch(err){
     console.log(err)
     res.send(err)
    }
}

module.exports = {userList}