<template>
  <button :style="cssVars">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
  props: {
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    cssVars() {
      return {
        '--color': this.color
      }
    }
  }
}
</script>

<style scoped lang="scss">
button {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color);
  color: var(--color);
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>