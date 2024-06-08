const express = require('express');
const tweetController = require('../controllers/tweetController');

const router = express.Router();

router.post('/', tweetController.createTweet);
router.get('/timeline/:userId', tweetController.getUserTimeline);

module.exports = router;
