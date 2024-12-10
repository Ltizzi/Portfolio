<template lang="">
  <div
    class="bg-gradient-to-br from-base-100 to-base-300 bg-opacity-100 w-full h-auto overflow-x-clip"
    v-if="isLoaded"
  >
    <div>
      <Landing id="landing" />
      <AboutMe></AboutMe>
      <SkillsList></SkillsList>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted } from "vue";
  import Landing from "../components/Landing.vue";
  import Footer from "../components/Footer.vue";
  import Projects from "../components/Projects.vue";
  import AboutMe from "../components/AboutMe.vue";
  import SkillsList from "../components/SkillsList.vue";

  const isLoaded = ref(false);
  onMounted(() => {
    setTimeout(() => {
      isLoaded.value = true;
    }, 2000);
  });
</script>
<style lang=""></style>
