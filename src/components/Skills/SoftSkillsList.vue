<template lang="">
  <div class="my-1 bg-white py-5 px-10 rounded-3xl w-full flex flex-col gap-3">
    <ul
      class="flex 2xl:flex-row flex-wrap text-white text-2xl gap-10 justify-center text-center"
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
          :class="`object-center text-white py-4 px-4 rounded-full shadow-lg shadow-rose-950 `"
          :style="{ background: tech.bgcolor }"
          v-show="tech.isSoft"
        />
        <p
          v-show="tech.isSoft"
          class="text-lg text-gray-950 font-semibold pt-2"
        >
          {{ tech.text }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script setup>
  const props = defineProps({
    techs: Array,
  });
</script>
