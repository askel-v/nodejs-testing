import Post from './post.js';
import PostService from './postService.js';

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture);
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await Post.find();
            res.json(posts);
        } catch (error) {
            res.status(500).json(e);
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const posts = await Post.findById(id);
            if (!id) res.status(400).json({ message: 'Id not set' });
            res.json(posts);
        } catch (error) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const post = req.body;
            if (!post._id) res.status(400).json({ message: 'Id not set' });
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
                new: true,
            });
            res.json(updatedPost);
        } catch (error) {
            res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            if (!id) res.status(400).json({ message: 'Id not set' });
            const post = await Post.findByIdAndDelete(id);
            res.json(post);
        } catch (error) {
            res.status(500).json(e);
        }
    }
}

export default new PostController();
