<template>
  <div
    class="flex hover:bg-blue-800 cursor-pointer items-center py-4 px-8 transition-all duration-500"
  >
    <img :src="song.cover" :alt="song.name" />
    <div class="pl-4">
      <h3>{{ song.name }}</h3>
      <h4 class="text-sm">{{ song.artist }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "LibrarySong",
  props: {
    song: Object,
    songs: Array,
  },
};
</script>

<style scoped>
img {
  width: 30%;
}
.selected {
  background-color: #4f46e5;
}
</style>
