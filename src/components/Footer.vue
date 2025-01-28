<template lang="">
  <footer
    class="footer footer-center bg-gradient-to-b from-neutral to-base-300 text-base-content rounded p-10 mask-bg-radial"
    v-show="props.isVisible"
  >
    <nav class="grid grid-flow-col gap-4">
      <a class="link link-hover" href="#landing">Home</a>
      <a class="link link-hover" href="#about">About me</a>
      <a class="link link-hover" href="#skills">Skills</a>
      <a class="link link-hover" href="#projects">Projects</a>
    </nav>
    <nav>
      <div class="grid grid-flow-col gap-4">
        <a href="https://github.com/Ltizzi" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'github']"
            class="size-8 hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:text-yellow-100"
        /></a>
        <a href="https://www.linkedin.com/in/lterlizzi/" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'linkedin']"
            class="size-8 hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:text-yellow-100"
        /></a>

        <a href="https://x.com/ltizzi83" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'square-x-twitter']"
            class="size-8 hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:text-yellow-100"
        /></a>

        <a href="mailto:terlizzileonardo@gmail.com" target="_blank">
          <font-awesome-icon
            :icon="['fas', 'square-envelope']"
            class="size-8 hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:text-yellow-100"
        /></a>
      </div>
    </nav>
    <aside>
      <p>
        Copyright © {{ new Date().getFullYear() }} - All right reserved by
        Leonardo Terlizzi
      </p>
    </aside>
  </footer>
</template>
<script setup>
  const props = defineProps(["isVisible"]);
</script>
<style lang=""></style>
