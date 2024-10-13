const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const session = require('express-session')
const path = require("path");
const db = require("./config/database-connection");
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const ownerRoutes = require('./routes/ownerRoutes');
const indexRoutes = require('./routes/indexRoutes')
const flash = require('connect-flash');
require("dotenv").config();

app.use(express.json());
app.use(session(
    {  resave: false,
       saveUninitialized: true,
       secret: 'dc1466563191356bd49e1f27a351c3f2ef6939c9a3958a9c5c897778c2a6f018fd57423123492e9f707d9fe46c36559fbf30db610da7b094786199913f435d76',
    }
))
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(express.static(path.join( __dirname , "public")));
app.set("view engine" , "ejs");
app.use(flash());

app.use('/' , indexRoutes)
app.use('/owner' , ownerRoutes );
app.use('/product' , productRoutes );
app.use('/user' , userRoutes)

app.listen(3000);