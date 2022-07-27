<template>
  <div class="navbar">
    <div class="navbar__brand">
      <router-link to="/">
        <img
            src="https://www.vuejs.org/images/logo.png"
            alt="Vue logo"
            height="32"
            width="32"
        />
      </router-link>
    </div>
    <nav class="navbar__nav">
      <div class="navbar__nav__links">
        <router-link class="navbar__nav__links__link" to="/about">
          About
        </router-link>
        <router-link class="navbar__nav__links__link" to="/posts">
          Posts
        </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'MyNavbar'
}
</script>

<style scoped lang="scss">
.navbar {
  background: #222f3a;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}

.navbar__brand {
  margin-left: 8px;

  & > img {
    height: 32px;
    width: 32px;
  }
}

.navbar__nav {
  width: calc(100% / 6);
  display: flex;
  align-items: center;
}

.navbar__nav__links {
  width: 100%;
  display: flex;
  align-items: center;
}

.navbar__nav__links__link {
  margin-left: 8px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
