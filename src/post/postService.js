import Post from './post.js';
import FileService from '../file/fileService.js';

class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture);
        return await Post.create({ ...post, picture: fileName });
    }
}

export default new PostService();
