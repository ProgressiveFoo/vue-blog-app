<template>
  <div>
      <table class="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">title</th>
            <th scope="col">text</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in posts" :key="post.id">
							<td>{{post.id}}</td>
							<td>{{post.title}}</td>
							<td>{{post.text}}</td>
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
