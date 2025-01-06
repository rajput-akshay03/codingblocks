const express = require('express');
const { createBlog, listBlogs,editBlogPost,deleteBlogPost } = require('../controller/blogController');
const authMiddleware = require('../Middlewares/authMiddleware');
const router = express.Router();

router.post('/blogs',authMiddleware, createBlog);
router.get('/blogs', listBlogs);
router.put('/blogs/:id',authMiddleware, editBlogPost);
router.delete('/blogs/:id',authMiddleware, deleteBlogPost);


module.exports = router;
