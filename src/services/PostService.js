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
}

const postService = new PostService();
export default postService;
