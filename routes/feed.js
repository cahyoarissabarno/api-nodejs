const express = require('express');
const router = express.Router(); 

const feedController = require('../controllers/feed');

router.get('/post', feedController.getPosts); //GET /feed/posts 
router.post('/post', feedController.createPost); //POST /feed/post 

module.exports = router; //export router