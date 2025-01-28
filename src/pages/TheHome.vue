<template lang="">
  <div
    class="bg-gradient-to-br from-base-100 to-base-300 bg-opacity-100 w-full h-auto overflow-x-clip"
  >
    <div ref="elements">
      <Landing id="landing" :isVisible="visibilityState.landing || true" />
      <AboutMe id="about" :isVisible="visibilityState.about || false" />
      <SkillsList id="skills" :isVisible="visibilityState.skills || false" />
      <Projects
        id="projects"
        class="lg:pt-64 bg-opacity-40 lg:pb-64 pt-8"
        :isVisible="visibilityState.projects || false"
      />
      <Footer id="footer" :isVisible="visibilityState.footer || true" />
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted, onUnmounted, useTemplateRef } from "vue";
  import Landing from "../components/Landing.vue";
  import Footer from "../components/Footer.vue";
  import Projects from "../components/Projects.vue";
  import AboutMe from "../components/AboutMe.vue";
  import SkillsList from "../components/SkillsList.vue";

  const elements = ref(null);

  const isLoaded = ref(false);

  const visibilityState = ref({});
  //[true, false, false, false, false]
  // {
  //   landing: false,
  //   about: false,
  //   skills: false,
  //   projects: false,
  //   foooter: false,
  // }

  let observer = null;

  const updateVisibility = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      if (id) {
        visibilityState.value[id] = entry.isIntersecting;
      }
    });
  };

  onMounted(() => {
    isLoaded.value = true;
    console.log(elements.value);
    observer = new IntersectionObserver(updateVisibility, {
      root: null,
      threshold: 0.15,
      rootMargin: "1px",
    });
    if (elements.value) {
      const children = elements.value.querySelectorAll("[id]");
      children.forEach((child) => {
        observer.observe(child);
      });
    }
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });
</script>
<style lang=""></style>
