//let users = require('../models/users.model');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
var userName = 'Admin';
var password = 'password';

router.route('/').post((req, res) => {
    if(userName===req.body.userName && password === req.body.password)  
    {
        jwt.sign({
            user:userName
        },'RigWig112',{expiresIn:60*20},(err,token)=>
        {
            console.log(token);
            res.json({token:token});
            res.header('auth-token',token).send(token);
        });  
    }   
    else{
        res.json({fail:true});
    }    
});

module.exports = router;
