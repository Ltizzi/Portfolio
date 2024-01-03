<template>
  <div
    class="flex flex-row 2xl:justify-between justify-around bg-opacity-80 bg-stone-900 text-gray-50 fixed w-full py-4 z-50 lg:py-3"
    v-motion
    :initial="{ opacity: 0.2, y: -100 }"
    :enter="{ opacity: 1, y: 0 }"
    :delay="1000"
    v-if="loadFinished"
  >
    <div class="2xl:w-3/4 w-2/4">
      <h1
        class="font-bold 2xl:ml-10 ml-0 2xl:text-xl hover:bg-neutral-600 w-32 text-center rounded-2xl px-5 py-0.5 hover:cursor-pointer"
        @click="scrollTo('landing')"
      >
        Portfolio
      </h1>
    </div>
    <div class="2xl:w-1/4 2xl:text-lg font-semibold w-2/4">
      <ul class="flex flex-row 2xl:gap-10 gap-2 2xl:mr-28 justify-end">
        <li
          @click="scrollTo('skills')"
          class="hover:bg-neutral-600 w-32 text-center rounded-2xl px-5 py-0.5 hover:cursor-pointer"
        >
          Skills
        </li>
        <li
          @click="scrollTo('projects')"
          class="hover:bg-neutral-600 w-32 text-center rounded-2xl px-5 py-0.5 hover:cursor-pointer"
        >
          Projects
        </li>
        <li
          @click="scrollTo('edu')"
          class="hover:bg-neutral-600 w-36 text-center rounded-2xl px-5 py-0.5 hover:cursor-pointer"
        >
          Certifications
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  import EventBus from "../common/EventBus";
  import { ref } from "vue";

  const loadFinished = ref(false);

  EventBus.on("loadingFinished", () => {
    loadFinished.value = true;
    EventBus.emit("navLoaded");
  });

  function scrollTo(sectionId) {
    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
      window.scrollTo({
        top: sectionEl.offsetTop,
        behavior: "smooth",
      });
    }
  }
</script>
<style lang=""></style>
