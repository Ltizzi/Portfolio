<template lang="">
  <div class="my-1 bg-white py-5 px-10 rounded-3xl w-full flex flex-col gap-3">
    <h1 class="text-2xl text-cyan-800 font-bold">{{ title }}</h1>
    <ul
      class="flex flex-row text-white text-2xl gap-5 justify-center text-center"
    >
      <li
        v-for="tech in techs"
        class="text-3xl text-white hover:cursor-pointer py-2"
        :title="tech.text"
        v-motion
        :initial="{ scale: 1 }"
        :visible="{ scale: 1 }"
        :hovered="{
          scale: 1.5,
        }"
        :delay="700"
      >
        <font-awesome-icon
          :icon="`${tech.icon}`"
          :class="`${tech.class}`"
          v-if="tech.icon != false"
        />
        <p v-else :class="`${tech.class}`"></p>
      </li>
    </ul>
  </div>
</template>
<script setup>
  const props = defineProps({
    title: String,
    techs: Array,
  });
</script>
