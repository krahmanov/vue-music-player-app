<template>
  <nav class="px-4 flex justify-between items-center h-20">
    <div class="text-4xl">Groove</div>
    <button
      @click="$emit('toggleLibrary')"
      class="bg-indigo-600 py-3 px-6 rounded-md focus:outline-none hover:bg-indigo-700"
    >
      Library <font-awesome-icon icon="music" />
    </button>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>
