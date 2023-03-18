<template>
  <div class="main">
    <div class="singleRepo">
      <div class="singleRepo__title">
        <h1>{{ repository.name }}</h1>
        <span>{{ repository.visibility }}</span>
      </div>
      <p class="repo__description">
        {{
          repository.description
            ? repository.description
            : "Project showcases problem-solving skills and software development expertise with clean code."
        }}
      </p>
      <div class="repo__lang">
        <h4>Languages</h4>
        <p>{{ repository.language }}</p>
      </div>
      <div class="singleRepo__footer">
        <div class="singleRepo__footerDates">
          <p>
            Created: <span>{{ formatDate(repository.created_at) }}</span>
          </p>
          <p>
            Updated: <span>{{ formatDate(repository.updated_at) }}</span>
          </p>
        </div>
        <h5 class="singleRepo__footerSize">{{ repository.size }}KB</h5>
      </div>
    </div>
    <router-link to="/">
      <div class="homePage_Route">Back to home page <span></span></div>
    </router-link>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "SingleRepoPage",
  data() {
    return {
      repository: {},
    };
  },
  created() {
    const repositoryName = this.$route.params.name;
    fetch(`https://api.github.com/repos/samuel-oso/${repositoryName}`)
      .then((response) => response.json())
      .then((data) => {
        this.repository = data;
      });
  },
  methods: {
    formatDate(dateStr) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      return new Date(dateStr).toLocaleString("en-US", options);
    },
  },
};
</script>
