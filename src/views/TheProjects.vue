<template lang="">
  <div
    class="2xl:p-12 p-5 lg:px-0 pt-16 bg-gradient-to-br h-full from-neutral-50 to-violet-300 2xl:h-screen flex flex-col justify-center"
  >
    <h3
      class="font-extrabold 2xl:text-6xl text-4xl text-center pb-20 text-purple-950"
      v-motion
      :initial="{ scale: 0, y: -100, rotate: 45, opacity: 0 }"
      :visible="{ scale: 1, y: 0, rotate: 0, opacity: 1 }"
      :delay="500"
    >
      Projects
    </h3>
    <ProjectList />
  </div>
</template>
<script setup>
  import ProjectList from "../components/Project/ProjectList.vue";
</script>
<style lang=""></style>
