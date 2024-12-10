<template lang="">
  <div class="h-screen flex flex-col bg-base-200">
    <!-- Barra de Navegación -->
    <div class="navbar bg-base-300 shadow-lg">
      <div class="flex gap-4 mx-auto">
        <button
          v-for="(project, index) in projects"
          :key="index"
          @click="selectProject(index)"
          class="btn btn-ghost btn-sm text-base-content flex flex-col items-center"
          :class="{ 'btn-active': selectedProject === index }"
        >
          <img :src="getUrlAddress(project.icon)" alt="" class="w-8 h-8 mb-1" />
          <span class="text-sm">{{ project.title }}</span>
        </button>
      </div>
    </div>

    <div class="flex-1 grid grid-cols-4 gap-4 p-6 bg-control">
      <div
        class="col-span-1 bg-base-300 p-4 rounded-lg shadow-md flex flex-col justify-between bg-opacity-80"
      >
        <h2 class="text-2xl font-bold mb-4">
          {{ projects[selectedProject].title }}
        </h2>
        <p class="text-base-content flex-1">
          {{ projects[selectedProject].description }}
        </p>
        <a
          :href="projects[selectedProject].link"
          target="_blank"
          class="btn btn-primary mt-4"
        >
          Ver Proyecto
        </a>
      </div>

      <div class="col-span-3 grid grid-cols-3 gap-4 row-auto">
        <div
          v-for="(media, index) in projects[selectedProject].media"
          :key="index"
          :class="[
            'bg-black rounded-lg overflow-hidden shadow-lg aspect-video   smpte',
            media.video
              ? 'col-span-2 row-span-2 crt mask-bg-radial '
              : getClass(),
          ]"
        >
          <img
            v-if="!media.video"
            :src="getUrlAddress(media.url)"
            alt=""
            :class="[
              'w-full h-full object-cover ',
              `motion-opacity-loop-0
          motion-ease-in-out`,
            ]"
            :style="{ animationDuration: getDuration() }"
          />
          <video
            v-else
            :src="getUrlAddress(media.url)"
            autoplay
            loop
            muted
            class="h-full object-cover mask-bg-radial crt"
            ref="video"
            @loadedmetadata="setPlaybackRate(index, selectedProject)"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref, useTemplateRef } from "vue";

  const videosTemplate = useTemplateRef("video");

  const projects = ref([
    {
      title: "Yo quiero saber, ¿Y vos?",
      description:
        "Web para el canal infantil argentino estatal Paka-Paka sobre ESI",
      icon: "@assets/pakapaka/home_logo.png", // Icono para la barra
      link: "https://esi.pakapaka.gob.ar/",
      media: [
        { url: "@assets/videos/pakapaka.mp4", video: true },
        { url: "@assets/pakapaka/1.png", video: false },
        { url: "@assets/pakapaka/2.png", video: false },
        { url: "@assets/pakapaka/3.png", video: false },
        { url: "@assets/pakapaka/4.png", video: false },
        { url: "@assets/pakapaka/5.png", video: false },
        // { url: "@assets/pakapaka/6.png", video: false },
      ],
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2.",
      icon: "https://via.placeholder.com/50",
      link: "#",
      media: [
        { url: "https://via.placeholder.com/400x300", video: false },
        { url: "https://via.placeholder.com/400x300", video: false },
      ],
    },
    // Más proyectos...
  ]);

  const selectedProject = ref(0);

  function selectProject(index) {
    selectedProject.value = index;
  }

  function getUrlAddress(url) {
    return new URL(url.replace("@assets", "/src/assets"), import.meta.url).href;
  }

  function setPlaybackRate(index, selectedProj) {
    const video = videosTemplate.value[index];
    if (video) {
      video.playbackRate = 3.2;
    }
  }

  function getDuration() {
    const duration = 10 * Math.random() + 2;
    return duration + "s";
  }

  function getClass() {
    const chances = Math.random();
    return chances < 0.35 ? "smpte" : "whitenoise";
  }
</script>

<style>
  .smpte {
    background-image: url("@assets/smpte.gif");
  }

  .whitenoise {
    background-image: url("@assets/whitenoise.gif");
  }

  .bg-control {
    background-image: url("@assets/bg-control.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(24, 24, 24, 0.596);
    background-blend-mode: darken;
  }
</style>
