<template>
  <div>

  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input required minlength="2" v-model="formData.title"
        type="text" class="form-control" id="title" aria-describedby="title"/>
    </div>

    <div class="mb-3">
      <label for="text" class="form-label">text</label>
      <input required  v-model="formData.text" type="text" class="form-control"
        id="text" aria-describedby="text"/>
    </div>

    <button type="submit" class="btn btn-primary m-4">Submit</button>
    <button type="reset" class="btn btn-warning m-4">reset</button>
  </form>
  </div>
  </template>

<script>
import PostService from '../services/PostService'
export default {

  data(){
    return{
      formData: {
        title:"",
        text:"" 
      }
    }

  },
  watch:{
    $route(){
      this.getPostAndInitForm()
    }
  },

  methods: {
    async onSubmit(){
      if(this.$route.name === 'EditPost'){
      await PostService.update(this.$route.params.id, this.formData)
      }else{
        await PostService.createPost(this.formData)
      }
      this.$router.push('/posts')
    },

    async getPostAndInitForm(){
      if(this.$route.name === 'EditPost'){
        try{
          const post = await PostService.getOne(this.$route.params.id)
          this.formData = post
        }catch(e){
          alert('Post does not exist')
        } 
      }
    }
      
  },

 async created(){
  this.getPostAndInitForm();
    }
  }

</script>

<style>

</style>
