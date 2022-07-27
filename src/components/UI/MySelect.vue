<template>
  <select :style="cssVars" @change="updateInput" :value="modelValue">
    <option value="" disabled>Select sorting field:</option>
    <option v-for="option in selectOptions" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    selectOptions: {
      type: Array,
      required: true
    },
    modelValue: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
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

<style lang="scss" scoped>
select {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color);
  color: var(--color);
  border-radius: 3px;
  padding: 5px 10px;
}
</style>