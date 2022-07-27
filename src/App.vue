<template>
  <my-navbar></my-navbar>
  <div class="content">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background: #304250;
  color: #fff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
}
</style>
<script>
import MyNavbar from '@/components/MyNavbar'

export default {
  components: {MyNavbar},
}
</script>
