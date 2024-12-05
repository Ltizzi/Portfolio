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
      <!-- <Example2 id="example2" />
      <Example id="example" /> -->
    </div>
  </div>
</template>
<script setup>
  import Landing from "./components/Landing.vue";
  // import Example from "./components/Example.vue";
  // import Example2 from "./components/Example2.vue";
  import Projects from "./components/Projects.vue";
  import AboutMe from "./components/AboutMe.vue";
  import SkillsList from "./components/SkillsList.vue";

  import { ref, onMounted } from "vue";

  const isLoaded = ref(false);

  // const sections = ref([]);

  // function onScroll(event) {
  //   const scrollTop = event.target.scrollTop;
  //   const containerHeight = event.target.clientHeight;

  //   sections.value.forEach((section, index) => {
  //     const rect = section.getBoundingClientRect();

  //     if (rect.top >= 0 && rect.top <= containerHeight) {
  //       if (scrollTop > rect.top) {
  //         scrollToNextComponent(index + 1);
  //       } else if (scrollTop < rect.top) {
  //         scrollToPreviousComponent(index - 1);
  //       }
  //     }
  //   });
  // }

  // function scrollToNextComponent(index) {
  //   if (index < sections.value.length) {
  //     container.value.scrollTo({
  //       top: sections.value[index].offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  // function scrollToPreviousComponent(index) {
  //   if (index >= 0) {
  //     container.value.scrollTo({
  //       top: sections.value[index].offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  onMounted(() => {
    // landing.value = document.getElementById("landing");
    // example.value = document.getElementById("example");
    // example2.value = document.getElementById("example2");
    // sections.value = [landing.value, example2.value, example.value];
    setTimeout(() => {
      isLoaded.value = true;
    }, 2000);
  });
</script>
<style></style>
