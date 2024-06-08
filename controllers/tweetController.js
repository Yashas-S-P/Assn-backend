const Tweet = require('../models/Tweet');

exports.createTweet = async (req, res) => {
  try {
    const { text } = req.body;
    const userId = req.user._id;
    const tweet = new Tweet({ text, userId });
    await tweet.save();
    res.send({ message: 'Tweet posted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error posting tweet' });
  }
};

exports.getUserTimeline = async (req, res) => {
  try {
    const userId = req.params.userId;
    const tweets = await Tweet.find({ userId })
      .sort({ createdAt: -1 })
      .limit(10);
    res.send(tweets);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error fetching timeline' });
  }
};