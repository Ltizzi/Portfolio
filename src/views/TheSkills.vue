<template lang="">
  <div
    class="bg-gradient-to-br from-cyan-50 to-sky-600 flex flex-col justify-center 2xl:h-screen"
  >
    <div class="mx-auto text-center">
      <h1
        class="text-6xl bold py-5 font-extrabold text-white"
        v-motion
        :initial="{ opacity: 0, y: -200, x: -50, scale: 0.1 }"
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
