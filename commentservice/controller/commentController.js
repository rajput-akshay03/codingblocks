const  Comment  = require('../Models/commentModel');

exports.addComment = async (req, res) => {
  try {
    const { postId, content } = req.body;

    if (!postId || !content) {
      return res.status(400).json({ error: 'Post ID and content are required' });
    }

    const comment = await Comment.create({
      postId,
      userId: req.user.id, 
      content,
    });
    res.status(201).json({
      commentId:comment.id,
      postId:comment.postId,
      userId:comment.userId,
      comment:comment.content,
      updatedAt:comment.updatedAt,
      createdAt:comment.createdAt
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// controller for getting the comment with post id using query parameter

exports.getCommentsByPostId = async (req, res) => {
    try {
      const { post_id } = req.query;
  
      if (!post_id) {
        return res.status(400).json({ error: 'Post ID is required' });
      }
  
      const comments = await Comment.findAll({
        where: { postId: post_id },
        order: [['createdAt', 'ASC']],
      });
  
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
