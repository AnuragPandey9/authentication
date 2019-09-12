const express = require('express');
const router = express.Router();
const dbTransacions = require('../dbConnection/dbTransactions');
const authorization = require('../authorization/authorization');

router.post('/verify',(req,res)=>{
    const token = req.headers.authorization.split(' ')[1];
    authorization.jwtTokenVerify(token.toString())
    .then((result)=>{res.status(200).json(result)})
    .catch((error)=>{res.status(401).end(error)})
});

router.post('/signIn',(req,res)=>{
    const email = req.body.emailId;
    const password = req.body.password;
    const dbObj = req.app.get('dbObj');
    dbTransacions.transaction(dbObj,email,password)
    .then(result => {
      authorization.jwtTokenSign(JSON.parse(JSON.stringify(result))[0])
      .then((result)=>{
        res.status(200).json(result)
      })
      .catch((error)=>{res.status(401).end(error)}) 
    })
    .catch((error)=>{res.status(401).end(error)})
})

router.get('',(req,res)=>{
    res.sendFile(process.cwd()+'/dist/authAngular/index.html');
})
module.exports = router;