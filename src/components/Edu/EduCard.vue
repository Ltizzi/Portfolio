<template>
  <div class="flex flex-row justify-around text-gray-700">
    <div class="2xl:w-4/6 w-full p-4 my-auto mx-0 font-lato">
      <h5
        class="text-indigo-300 2xl:text-4xl text-xl font-bold pb-2 text-justify"
      >
        {{ title }}
      </h5>
      <h5 class="2xl:text-2xl text-base font-bold my-6 mx-0">
        {{ institucion }}
      </h5>
      <p class="font-medium 2xl:text-xl">{{ rangeTime }}</p>
      <p class="edufont-medium 2xl:text-xl my-2 text-base">
        {{ about }}
      </p>
      <ul
        class="w-full text-center 2xl:ml-0 ml-9 flex flex-row justify-start list-none p-0"
      >
        <li class="cursor-pointer"></li>
        <li
          class="p-4 bg-gradient-to-r from-violet-400 to-sky-300 w-80 my-2 mx-4 text-center rounded-2xl"
        >
          <a
            :href="link1"
            class="block my-auto mx-0 py-0 px-8 font-extrabold text-yellow-50"
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
            class="block my-auto mx-0 py-0 px-8 font-extrabold text-yellow-50"
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
      class="2xl:w-72 2xl:h-72 2xl:mt-0 2xl:mr-0 mt-3 mr-3 h-24 w-24 object-fill"
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
