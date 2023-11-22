<template lang="">
  <slot>
    <div
      class="bg-yellow-50 pt-4 pb-6 h-96 w-52 -ml-0.5 flex flex-col rounded-2xl justify-evenly"
    >
      <img
        :src="`./assets/img/${foto}`"
        :title="fotoTxt"
        class="w-11/12 h-40 my-0 mx-auto object-fill pb-4"
      />
      <div>
        <h4 class="text-3xl font-bold text-indigo-400 text-center pb-2">
          {{ title }}
        </h4>
        <h5
          class="text-base font-bold text-indigo-400 text-center mx-1 pb-1 leading-4"
        >
          {{ about }}
        </h5>
      </div>

      <ul
        class="list-none flex flex-row flex-wrap justify-stretch ml-2 gap-2 w-full my-2"
      >
        <li
          class="text-2xl text-white hover:cursor-pointer"
          v-for="tech in techs"
          :key="tech"
          :title="tech.text"
          v-motion
          :initial="{ scale: 0, opacity: 0 }"
          :visible="{ scale: 1, opacity: 1 }"
          :hovered="{
            scale: 1.5,
          }"
          :delay="200"
        >
          <font-awesome-icon
            :icon="`${tech.icon}`"
            :class="`${tech.class}`"
            v-if="tech.icon != false"
          />
          <p v-else :class="`${tech.class}`"></p>
        </li>
      </ul>
      <ul class="flex flex-row justify-center ml-1">
        <button
          class="w-24 from-orange-300 bg-gradient-to-br via-pink-400 to-purple-400 p-1 rounded-xl border-0 mt-1 mr-1 hover:animate-bounce"
        >
          <font-awesome-icon
            icon="fa-brands fa-github"
            class="text-3xl font-bold text-white text-center"
          />
          <!-- <a :href="github" target="_blank" rel="noopener noreferrer"> </a> -->
        </button>
        <button
          class="w-24 from-orange-300 bg-gradient-to-br via-pink-400 to-purple-400 p-1 rounded-lg border-0 mt-1 mr-1 hover:animate-bounce"
        >
          <a
            :href="`${demo}`"
            class="text-lg font-bold text-white text-center no-underline"
            target="_blank"
            rel="noopener noreferrer"
            >Demo</a
          >
        </button>
      </ul>
    </div>
  </slot>
</template>
<script setup>
  import { onMounted } from "vue";

  //      <!--    -->

  const props = defineProps({
    foto: String,
    fotoTxt: String,
    title: String,
    about: String,
    techs: Array,
  });
</script>
