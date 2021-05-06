<template>
  <div class="player flex flex-col justify-center items-center mt-2">
    <div class="sm-block flex items-center mt-4 mb-8">
      <span class="mx-2 p-2">00:00</span>
      <div class="track w-full overflow-hidden h-4 relative rounded-2xl">
        <input
          class="w-full appearance-none bg-transparent cursor-pointer"
          type="range"
          min="0"
          max="100"
          value="currentTime"
        />
        <div
          :style="styleObject"
          class="animate-track bg-indigo-200 w-full h-full absolute top-0 left-0"
        ></div>
      </div>
      <span class="mx-2 p-2">2:36</span>
    </div>
    <div class="flex items-center">
      <font-awesome-icon
        class="cursor-pointer"
        :icon="['fas', 'step-backward']"
        size="2x"
      />
      <font-awesome-icon
        v-if="!isPlaying"
        @click="$emit(playSong)"
        class="ml-12 mr-10 cursor-pointer"
        :icon="['fas', 'play']"
        size="3x"
      />
      <font-awesome-icon
        v-else
        class="mx-8"
        :icon="['fas', 'pause']"
        size="3x"
      />
      <font-awesome-icon
        class="cursor-pointer"
        :icon="['fas', 'step-forward']"
        size="2x"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  computed: {
    styleObject() {
      return `transform: translateX(${this.songInfo.animationPercentage}%)`;
    },
  },
  props: {
    isPlaying: Boolean,
    songInfo: Object,
  },
  methods: {
    // if (isPlaying) {
    // }
  },
  mounted() {
    console.log(this.songInfo.animationPercentage);
  },
};
</script>

<style scoped>
.player {
  min-height: 20vh;
}
.sm-block {
  width: 50%;
}
input[type="range"] {
  width: 100%;
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 16px;
  width: 16px;
}
input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
}
.track {
  pointer-events: none;
  background: linear-gradient(
    -45deg,
    #3730a3,
    #92400e,
    #047857,
    #5b21b6,
    #3b82f6
  );
  background-size: 400% 400%;
  animation: colorAnimation 15s infinite;
}
.animate-track {
  transform: translateX(0%);
}
@keyframes colorAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@media screen and (max-width: 568px) {
  .sm-block {
    width: 70%;
  }
}
</style>
