<template>
  <div class="post">
    <post-item :post="post" disableButtons></post-item>
  </div>
</template>

<script>
import PostItem from '@/components/post/PostItem'
import axios from 'axios'

export default {
  name: 'PostPage',
  components: {PostItem},
  data() {
    return {
      post: {},
    }
  },
  mounted() {
    this.fetchPost()
  },
  methods: {
    async fetchPost() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        this.post = response.data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>

</style>