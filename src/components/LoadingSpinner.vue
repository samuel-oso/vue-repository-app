<template>
  <div class="loading-spinner">
    <div class="loading-spinner__dot1"></div>
    <div class="loading-spinner__dot2"></div>
  </div>
</template>

<style>
.loading-spinner {
  width: 40px;
  height: 40px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner__dot1,
.loading-spinner__dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;
  animation: sk-bounce 2s infinite ease-in-out;
}

.loading-spinner__dot2 {
  top: auto;
  bottom: 0;
  animation-delay: -1s;
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>
