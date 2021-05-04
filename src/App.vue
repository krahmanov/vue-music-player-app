<template>
  <div class="bg-gray-800 min-h-screen text-gray-50 z-0">
    <div class="container mx-auto">
      <Nav />
      <Song :currentSong="currentSong" />
      <Player />
      <Library :songs="songs" />
    </div>
  </div>
</template>

<script>
// Components
import Nav from "./components/Nav";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
// Importing Music Data
import data from "./data/songs";

export default {
  name: "App",
  data() {
    return {
      songs: [],
      currentSong: null,
    };
  },
  beforeMount() {
    this.songs = data();
    this.currentSong = this.songs[0];
  },
  components: {
    Nav,
    Song,
    Player,
    Library,
  },
};
</script>

<style></style>
