<template>
  <div
    :class="{ 'library-active': isLibraryOpen }"
    class="bg-gray-800 min-h-screen text-gray-50 z-0 transition-all duration-500"
  >
    <div class="container mx-auto min-h-screen flex flex-col">
      <Nav @toggleLibrary="toggleLibrary" />
      <Song :currentSong="currentSong" />
      <Player
        :songInfo="songInfo"
        :isPlaying="isPlaying"
        @playSong="playSong1"
      />
      <Library :isLibraryOpen="isLibraryOpen" :songs="songs" />
      <audio :src="currentSong.audio"></audio>
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
      isLibraryOpen: false,
      currentSong: null,
      isPlaying: false,
      songInfo: {
        currentTime: 0,
        duration: 0,
        animationPercentage: 20,
      },
    };
  },
  beforeMount() {
    this.songs = data();
    this.currentSong = this.songs[0];
  },
  mounted() {
    // console.log(this.currentSong);
    // this.currentSong.audio.play();
  },
  methods: {
    toggleLibrary() {
      this.isLibraryOpen = !this.isLibraryOpen;
    },
    playSong1() {
      console.log(this.currentSong);
      // if (this.isPlaying) {
      //   this.currentSong.play();
      // }
    },
    // timeUpdate(e) {
    //   const current = e.target.currentTime;
    //   const duration = e.target.duration;
    //   // Calculate percentage
    //   const roundedCurrent = Math.round(current);
    //   const roundedDuration = Math.round(duration);
    //   const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    //   this.songInfo = { roundedCurrent, roundedDuration, animation };
    // },
  },
  components: {
    Nav,
    Song,
    Player,
    Library,
  },
};
</script>

<style>
.library-active {
  margin-left: 30%;
}
</style>
