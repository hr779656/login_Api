const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT
const bodyParser = require('body-parser')
const sequelize = require('./utils/db')
const loginRoutes = require('./routes/Login_routes')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(loginRoutes)

sequelize.sync().then((result)=>{
    app.listen(port, ()=>{
        console.log(`server run this port: ${port}`)
    })
    
}).catch((err)=>{
    console.log(err)
})
    
