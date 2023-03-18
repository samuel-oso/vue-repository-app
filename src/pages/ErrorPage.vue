<template>
  <div class="main">
    <div class="singleRepo error">
      <img src="../assets/ErrorImage.svg" alt="error" />
      <h1>Page not found</h1>
    </div>
    <router-link to="/">
      <div class="homePage_Route">Back to home page <span></span></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>
