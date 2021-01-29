<template>
  <div>
    <h1>{{post.title}}</h1>
    <p>{{post.text}}</p>
  </div>
</template>

<script>
import PostService from '../services/PostService'
export default {

  data(){
    return{
      post:{}
    }
  },

  async mounted(){
    this.post = await PostService.getOne(this.$route.params.id) 
  }
}
</script>

<style>

</style>
