<template>
  <div class="player flex flex-col justify-center items-center mt-2">
    <div class="sm-block flex items-center mt-4 mb-6">
      <span class="mx-2">00:00</span>
      <input
        class="w-full"
        type="range"
        min="0"
        max="100"
        value="currentTime"
      />
      <span class="mx-2">2:36</span>
    </div>
    <div class="sm- flex items-center">
      <font-awesome-icon
        class="cursor-pointer"
        :icon="['fas', 'step-backward']"
        size="2x"
      />
      <font-awesome-icon
        class="ml-8 mr-6 cursor-pointer"
        :icon="['fas', 'play']"
        size="3x"
      />
      <!-- <font-awesome-icon class="mx-8" :icon="['fas', 'pause']" size="3x" /> -->
      <font-awesome-icon
        class="cursor-pointer"
        :icon="['fas', 'step-forward']"
        size="2x"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.player {
  min-height: 20vh;
}
.sm-block {
  width: 50%;
}

@media screen and (max-width: 568px) {
  .sm-block {
    width: 70%;
  }
}
</style>
