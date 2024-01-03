<template lang="">
  <div
    class="bg-gradient-to-br from-cyan-50 to-sky-600 flex flex-col justify-center 2xl:h-screen 2xl:pt-0 pt-20 lg:h-screen"
  >
    <div class="mx-auto text-center">
      <h1
        class="text-6xl lg:text-5xl lg:-mt-10 bold py-4 font-extrabold text-white"
        v-motion
        :initial="{ opacity: 0, y: -75, x: -50, scale: 0.1 }"
        :visible="{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: '100', delay: 100 },
        }"
        :delay="500"
      >
        Skills
      </h1>
      <SkillsList />
    </div>
  </div>
</template>
<script setup>
  import SkillsList from "../components/Skills/SkillsList.vue";
</script>
