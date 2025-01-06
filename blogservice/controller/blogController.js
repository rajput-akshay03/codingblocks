const Blog = require('../Models/blogModel');

// controller for creating blog

exports.createBlog = async (req, res) => {
  try {
    const {title,content} = req.body;
    if((!title)|| (!content))
    {
       return res.json({
          message:"pls provide title and content completely"
       })
    }
    const id = req.user.id;
    console.log(req.user.id);
   const blog = await Blog.create({title,content,userId:id});
    res.status(201).json(blog);
  }
   catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// controller for getting list of all blogs

exports.listBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const blogs = await Blog.findAll({ offset, limit });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//controller for editing the blog

exports.editBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);
    if (!blog) return res.status(404).json({ error: 'Blog post not found' });

    if (blog.userId !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized to edit this blog post' });
    }
    const updates = {};
    if (req.body.title) updates.title = req.body.title;
    if (req.body.content) updates.content = req.body.content;

    const updatedBlog = await blog.update(updates);
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//controller for deleting the blog

exports.deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);
    if (!blog) return res.status(404).json({ error: 'Blog post not found' });

    if (blog.userId !== req.user.id) {
      return res.status(403).json({ error: 'Unauthorized to delete this blog post' });
    }
    await blog.destroy();
    res.json({ message: 'Blog post deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

