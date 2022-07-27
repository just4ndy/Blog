<template>
  <div class="post__list__item">
    <div class="post__list__item__content">
      <h4 class="post__list__item__title">{{ post.title }}</h4>
      <p class="post__list__item__body">{{ post.body }}</p>
    </div>
    <div class="post__list__item__actions" v-if="!disableButtons">
      <my-button :color="'lightskyblue'" class="post__list__item__actions__edit"
                 @click="this.$router.push(`/posts/${post.id}`)">Detail
      </my-button>
      <my-button :color="'red'" class="post__list__item__actions__delete" @click="deletePost">Delete</my-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true
    },
    disableButtons: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    deletePost() {
      this.$emit('delete', this.post)
    }
  }
}
</script>

<style scoped>
.post__list__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border: 1px solid #ccc;
  margin-bottom: 1em;
}

.post__list__item__actions > button {
  margin-left: 0.2rem;
}
</style>