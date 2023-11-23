<template>
  <NavBar />
  <Landing id="landing" />
  <TheSkills id="skills" />
  <TheProjects id="projects" />
  <TheEdu id="edu" />
</template>
<script setup>
  import Landing from "../components/Landing.vue";
  import NavBar from "../components/NavBar.vue";
  import TheEdu from "./TheEdu.vue";
  import TheProjects from "./TheProjects.vue";
  import TheSkills from "./TheSkills.vue";
</script>
