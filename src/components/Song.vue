<template>
  <div class="song-container flex justify-center flex-col items-center">
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
.song-container {
  min-height: 60vh;
}
.song-img::before {
  content: "";
  position: absolute;
  top: -5%;
  left: -5%;
  height: 110%;
  width: 110%;
  background-color: #fefefe;
  border-radius: 9999px;
  background: linear-gradient(
    -45deg,
    #f9fafb,
    #3730a3,
    #92400e,
    #047857,
    #5b21b6,
    #3b82f6
  );
  background-size: 400% 400%;
  animation: colorAnimation 15s infinite;
  z-index: -1;
  backdrop-filter: blur(4px);
}
@keyframes colorAnimation {
  0% {
    background-position: 0% 50%;
    transform: rotate(0deg);
  }
  50% {
    background-position: 100% 50%;
    transform: rotate(180deg);
  }
  100% {
    background-position: 0% 50%;
    transform: rotate(360deg);
  }
}
</style>
