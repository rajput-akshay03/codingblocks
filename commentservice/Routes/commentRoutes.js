const express = require('express');
const router = express.Router();
const { addComment, getCommentsByPostId } = require('../controller/commentController');
const authMiddleware = require('../Middlewares/authMiddleware');
router.post('/comments', authMiddleware, addComment);
router.get('/comments', getCommentsByPostId);

module.exports = router;
