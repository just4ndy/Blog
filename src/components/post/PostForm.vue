<template>
  <div class="post__form--wrapper">
    <h1 class="post__form__heading">Create Post</h1>
    <form @submit.prevent="createPost" class="post__form__form">
      <my-input v-focus v-model="title" class="form__input" placeholder="Title"/>
      <my-input v-model="body" class="form__input" placeholder="Body"/>
      <my-button :color="'lime'" class="form__submit">Create</my-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      this.$emit('create', {
        title: this.title,
        body: this.body
      })
      this.title = ''
      this.body = ''
      this.$emit('close')
    },
  }
}
</script>

<style lang="scss" scoped>
.post__form--wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 30%;
  }
}
</style>