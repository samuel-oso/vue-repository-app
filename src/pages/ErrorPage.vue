<template>
  <div class="main">
    <div class="singleRepo error">
      <img src="../assets/ErrorImage.svg" alt="error" />
      <h1>Page not found</h1>
    </div>
    <router-link to="/">
      <div class="homePage_Route">
        <div>
          <img src="../assets/BackArrow.png" alt="back-arrow" />
          <p>Back to home page</p>
        </div>

        <span></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>
