<template>
  <div class="mt-10 flex justify-center flex-col items-center">
    <div class="song-img relative z-0">
      <img
        class="song-img rounded-full h-64 w-64 z-10"
        :src="currentSong.cover"
        alt=""
      />
    </div>
    <h2 class="mt-10 mb-3 text-3xl">{{ currentSong.name }}</h2>
    <h3 class="text-lg text-gray-400">{{ currentSong.artist }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    currentSong: Object,
  },
};
</script>

<style scoped>
.song-img::before {
  content: "";
  position: absolute;
  top: -5%;
  left: -5%;
  height: 110%;
  width: 110%;
  background-color: #fefefe;
  border-radius: 9999px;
  animation: colorAnimation 25s infinite;
  z-index: -1;
  backdrop-filter: blur(4px);
}
@keyframes colorAnimation {
  0% {
    background-color: #f9fafb;
  }
  45% {
    background-color: #047857;
  }
  75% {
    background-color: #4338ca;
  }
  100% {
    background-color: #f9fafb;
  }
}
</style>
