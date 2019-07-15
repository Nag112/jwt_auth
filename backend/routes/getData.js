//let users = require('../models/users.model');
const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.route('/').get((req,res)=>
{    
     jwt.verify(req.get('auth-token'),'RigWig112',(err,data)=>
    {
        if(data){console.log(data.user);
         
            res.json({ 
           token:req.get('auth-token')});
        }
        else{
            console.log(err)
            res.sendStatus(403)
        }
        
    })
})


module.exports = router;