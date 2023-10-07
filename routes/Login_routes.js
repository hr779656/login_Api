const express = require('express')
const router = express.Router()
const LogiData = require('../controller/user_login')
const allUsers = require('../controller/read_users')


router.post("/add-user", LogiData.login_Data)
router.get("/get-users", allUsers.userList)


module.exports = router
