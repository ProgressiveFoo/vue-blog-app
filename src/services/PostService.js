import http from "./BaseURL";

class PostService {
  async getAll() {
    try {
      const response = await http.get("posts");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(postId) {
    try {
      const response = await http.get(`posts/${postId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async createPost(post) {
    const response = await http.post("posts", post);
    return response;
  }

  async update(postId, data) {
    const response = await http.put(`posts/${postId}`, data);
    return response.data;
  }
}

const postService = new PostService();
export default postService;
