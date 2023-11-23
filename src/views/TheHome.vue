<template>
  <NavBar />
  <div class="overflow-y-hidden">
    <Landing id="landing" />
    <div v-show="loadingFinished">
      <TheSkills id="skills" />
      <TheProjects id="projects" />
      <TheEdu id="edu" />
    </div>
  </div>
</template>
<script setup>
  import Landing from "../components/Landing.vue";
  import NavBar from "../components/NavBar.vue";
  import TheEdu from "./TheEdu.vue";
  import TheProjects from "./TheProjects.vue";
  import TheSkills from "./TheSkills.vue";
  import EventBus from "../common/EventBus";
  import { ref, onMounted } from "vue";

  const loadingFinished = ref(false);

  EventBus.on("navLoaded", () => {
    loadingFinished.value = true;
  });

  onMounted(() => {
    window.addEventListener("resize", handleWindowSize);
    const width = window.innerWidth;
    if (width < 768) EventBus.emit("mobile");
    else EventBus.emit("notMobile");
  });

  function handleWindowSize() {
    if (window.innerWidth < 768) EventBus.emit("mobile");
    else EventBus.emit("notMobile");
  }
</script>
