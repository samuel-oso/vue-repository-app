<template>
  <div class="home__container">
    <div class="home__profile">
      <div class="home__profile__name">
        <img :src="data.avatar_url" alt="profile-picture" class="avatar" />
        <div>
          <h1>{{ data.name }}</h1>
          <h2>{{ data.login }}</h2>
        </div>
      </div>
      <div class="home__profile__bio">
        <p>
          I'm a Software Engineer and Community Engineer who is passionate about
          sharing knowledge, documentation, web engineering, technical writing
          and others. I create technical content on my Blog, build useful
          open-source projects, build technical communities...
        </p>
      </div>
    </div>
    <RepoCard />
  </div>
</template>

<script type="text/javascript">
import RepoCard from "@/components/RepoCard.vue";

export default {
  name: "HomePage",
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    fetch("https://api.github.com/users/samuel-oso", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
      });
  },
  components: { RepoCard },
};
</script>
