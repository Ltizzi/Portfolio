<template lang="">
  <div
    class="bg-gradient-to-br from-cyan-50 to-sky-600 flex flex-col justify-center h-screen"
  >
    <div class="mx-auto text-center">
      <h1 class="text-6xl bold py-5 font-extrabold text-white">Skills</h1>
      <SkillsList />
    </div>
  </div>
</template>
<script setup>
  import SkillsList from "../components/Skills/SkillsList.vue";
</script>
