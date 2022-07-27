<template>
  <input :style="cssVars" :value="modelValue" @input="updateInput" type="text" class="post__form">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    color: {
      type: String,
      default: '#fff'
    },
    modelValue: [String, Number]
  },
  computed: {
    cssVars() {
      return {
        '--color': this.color
      }
    }
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
input {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color);
  color: var(--color);
  border-radius: 3px;
  padding: 5px 10px;
}
</style>