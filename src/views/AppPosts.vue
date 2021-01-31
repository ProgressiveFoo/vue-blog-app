<template>
  <div>
      <table class="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">title</th>
            <th scope="col">text</th>
            <th scope="col"></th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts" :key="post.id">
							<td>{{post.id}}</td>
							<td>{{post.title}}</td>
							<td>{{post.text}}</td>
                            <td><router-link :to="`/post/${post.id}`" class="btn btn-info">View Post</router-link></td>
                            <td><router-link :to="`/posts/${post.id}/edit`" class="btn btn-warning">Edit Post</router-link></td>
            </tr>
        </tbody>
        </table>
  </div>

</template>

<script>
import PostService from '../services/PostService'
export default {

  data(){
    return{
      posts: []
    }
  },

  async created() {
     this.posts = await PostService.getAll()
  },

  mounted(){

  }
}
</script>

<style>

</style>
