<template>
  <div class="post__list">
    <TransitionGroup name="post-list">
      <post-item :key="post.id" @delete="deletePost" :post="post" v-for="post in posts"></post-item>
    </TransitionGroup>
  </div>
</template>

<script>
import PostItem from '@/components/post/PostItem'

export default {
  name: 'PostList',
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
    deletePost(post) {
      this.$emit('delete', post)
    }
  }
}
</script>

<style scoped>
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(120px);
}

.post-list-move {
  transition: transform 0.8s ease;
}
</style>