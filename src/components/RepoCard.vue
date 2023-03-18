<template>
  <div class="repoCard">
    <h4 class="repoCard__title">My Repositories</h4>
    <div v-if="loading" class="loader"><LoadingSpinner /></div>
    <div v-else class="repoCard__content">
      <router-link
        :to="'/repository/' + repo.name"
        class="repoCard__container"
        v-for="repo in paginatedRepos"
        :key="repo.id"
      >
        <div class="repoCard__details">
          <h4>{{ repo.name }}</h4>
          <div>
            <p class="repo-description" v-if="repo.description">
              {{ repo.description }}
            </p>
            <p class="repo-description" v-else>
              Project showcases problem-solving skills and software development
              expertise with clean code.
            </p>
          </div>
          <h5>{{ repo.size }}KB</h5>
        </div>
      </router-link>
    </div>

    <ul v-if="pageCount > 1" class="pagination">
      <li
        v-for="n in pageCount"
        :key="n"
        :class="{ active: pagination.currentPage === n }"
      >
        <router-link
          :to="{ name: 'HomePage', query: { page: n } }"
          @click="updateCurrentPage(n)"
        >
          {{ n }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import LoadingSpinner from "./LoadingSpinner.vue";
export default {
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      repository: [],
      pagination: {
        perPage: 6,
        currentPage: 1,
      },
      loading: true,
    };
  },
  async mounted() {
    this.loading = true;
    await this.getRepositories();
  },
  methods: {
    async getRepositories() {
      const response = await fetch(
        `https://api.github.com/users/samuel-oso/repos`
      );
      const data = await response.json();
      this.repository = data;
      setTimeout(() => {
        this.loading = false; // hide the loader after 10 seconds
      }, 500);
    },

    updateCurrentPage(page) {
      this.pagination.currentPage = page;
      this.loading = true;
      this.getRepositories();
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.repository.length / this.pagination.perPage);
    },
    paginatedRepos() {
      const startIndex =
        (this.pagination.currentPage - 1) * this.pagination.perPage;
      const endIndex = startIndex + this.pagination.perPage;
      return this.repository.slice(startIndex, endIndex);
    },
  },
};
</script>
