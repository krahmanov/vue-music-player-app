<template>
  <div
    :class="{ 'active-library': isLibraryOpen }"
    class="library fixed top-0 left-0 w-80 h-full bg-gray-900 shadow-md overflow-y-scroll"
  >
    <h2 class="p-8 text-2xl">Library</h2>
    <div v-for="song in songs" :key="song.id">
      <LibrarySong :songs="songs" :song="song" />
    </div>
  </div>
</template>

<script>
import LibrarySong from "./LibrarySong";
export default {
  name: "Library",
  props: {
    songs: Array,
    isLibraryOpen: Boolean,
  },
  components: {
    LibrarySong,
  },
};
</script>

<style scoped>
.library {
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
}
.library::-webkit-scrollbar {
  width: 6px; /* width of the entire scrollbar */
}
.library::-webkit-scrollbar-track {
  background: #3b82f680; /* color of the tracking area */
}
.library::-webkit-scrollbar-thumb {
  background-color: #ccc; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 0.5px solid #b6b6b680; /* creates padding around scroll thumb */
}
.active-library {
  transform: translateX(0);
  opacity: 1;
}
</style>
