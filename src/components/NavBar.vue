import { Presence } from 'motion/vue';
<template>
  <Presence>
    <Motion
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 100 }"
      :transition="{ duration: 1, easing: 'ease-in-out' }"
    >
      <div
        class="flex flex-row 2xl:justify-between justify-around bg-stone-900 text-gray-50 fixed w-full py-4 z-50"
      >
        <div class="2xl:w-3/4 w-1/4">
          <h1 class="font-bold 2xl:ml-10 ml-0 2xl:text-xl">Portfolio</h1>
        </div>
        <div class="2xl:w-1/4 2xl:text-lg font-semibold w-3/4 -ml-10">
          <ul class="flex flex-row gap-10 2xl:mr-28 justify-end">
            <li>Skills</li>
            <li>Certifications</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
    </Motion>
  </Presence>
</template>
<script setup>
  import { Motion, Presence } from "motion/vue";
</script>
<style lang=""></style>
