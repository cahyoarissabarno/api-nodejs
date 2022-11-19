  const Post = require('../models/post')

  exports.getPosts = (req, res) => {
    Post.find().then(foundPosts => {
      res.json({
        posts: foundPosts
      });
    });
  }
   
  exports.createPost = (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
   
    // create a new Post instance
    const post = new Post({
      title: title,
      content: content
    });
   
    // save the instance to the database
    post
    .save()
    .then(postSaved => {
      res.status(201).json({
        message: 'Post berhasil diunggah',
        post: postSaved
      });
    })
    .catch(err => console.log('err', err));
  }