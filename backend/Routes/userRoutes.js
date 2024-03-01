const express = require("express");
const router = express.Router();
const cors = require('cors')
const {createUser , loginUser,getUser} = require('../controllers/userController')

// middleware

router.use(
    cors(
        {
            credentials: true,
            origin: 'http://localhost:3000'
        }
    )
)


// routees

router.post('/register' , createUser)
router.post('/login' , loginUser)
router.get('/profile' , getUser)

module.exports = router