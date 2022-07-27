<template>
  <div class="posts">
    <my-modal :show="modalOpen" @close="closeModal">
      <post-form @close="closeModal" @create="createPost"/>
    </my-modal>
    <h1>Posts</h1>
    <my-input v-focus style="margin-bottom: 0.5em;" v-model="searchQuery" class="form__input" placeholder="Search"/>
    <div class="posts__actions">
      <my-select color="deepskyblue" :selectOptions="sortOptions" v-model="selectedSort"/>
      <my-button color="lime" @click="openModal">Create post
      </my-button>
    </div>
    <div v-if="!isLoading">
      <post-list @delete="deletePost" :posts="sortedAndFilteredPosts"/>
      <div class="pagination">
        <div class="pagination__page" v-for="postPage in totalPages">
          <my-button @click="changePage(postPage)" :color="page === postPage ? 'lime' : 'white'"
                     :disabled="page === postPage">
            {{ postPage }}
          </my-button>
        </div>
      </div>
    </div>
    <h2 v-else>Loading posts...</h2>
  </div>
</template>

<script>
import PostList from '@/components/post/PostList'
import PostForm from '@/components/post/PostForm'
import axios from 'axios'

export default {
  name: 'PostsPage',
  components: {PostForm, PostList},
  data() {
    return {
      posts: [],
      modalOpen: false,
      searchQuery: '',
      sortOptions: [
        {value: 'title', label: 'Title'},
        {value: 'body', label: 'Body'},
        {value: 'id', label: 'ID'}
      ],
      selectedSort: '',
      isLoading: true,
      limit: 10,
      page: 1,
      totalPages: 1,
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
    createPost(post) {
      this.posts.push(post)
    },
    deletePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    openModal() {
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
    },
    changePage(page) {
      this.page = page
      this.fetchPosts()
    }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) => {
        if (this.selectedSort === 'title') {
          return a.title.localeCompare(b.title)
        } else if (this.selectedSort === 'body') {
          return a.body.localeCompare(b.body)
        } else {
          return a.id - b.id
        }
      })
    },
    sortedAndFilteredPosts() {
      return this.sortedPosts.filter(p => p.body.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.posts__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.5rem;
  margin-bottom: 8px;
}

.pagination {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}
</style>
