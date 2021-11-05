const express = require('express')
const router = express.Router()

/*======================POST==========================*/ 
router.post('/users', (req, res)=>{
    res.send('create user');
});

module.exports = router