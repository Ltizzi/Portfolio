<template>
  <div class="flex flex-row justify-around text-gray-700">
    <div class="w-4/6 p-4 my-auto mx-0 font-lato">
      <h5 class="text-indigo-300 text-4xl font-bold pb-2 text-justify">
        {{ title }}
      </h5>
      <h5 class="text-2xl font-bold my-6 mx-0">{{ institucion }}</h5>
      <p class="font-medium text-xl">{{ rangeTime }}</p>
      <p class="edufont-medium text-xl">{{ about }}</p>
      <ul class="w-full text-center flex flex-row justify-start list-none p-0">
        <li class="cursor-pointer"></li>
        <li
          class="p-4 bg-gradient-to-r from-violet-400 to-sky-300 w-80 my-2 mx-4 text-center rounded-2xl"
        >
          <a
            :href="link1"
            class="block my-auto mx-0 py-0 px-8 text-yellow-50"
            target="_blank"
            rel="noopener noreferrer"
            >Temario
          </a>
        </li>
        <li
          class="p-4 bg-gradient-to-r from-violet-400 to-sky-300 w-80 my-2 mx-4 text-center rounded-2xl"
        >
          <a
            :href="link2"
            class="block my-auto mx-0 py-0 px-8 text-yellow-50"
            target="_blank"
            rel="noopener noreferrer"
            >Website</a
          >
        </li>
      </ul>
    </div>

    <img
      :src="`/assets/img/${imagen}`"
      :alt="imgAlt"
      class="w-1/4 object-fill"
    />
  </div>
</template>
<script setup>
  import { defineProps } from "vue";

  defineProps({
    title: String,
    institucion: String,
    link1: String,
    link2: String,
    imagen: String,
    imgAlt: String,
    about: String,
    rangeTime: String,
  });
</script>
<style lang=""></style>
