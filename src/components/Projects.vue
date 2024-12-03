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
          <img :src="project.icon" alt="" class="w-8 h-8 mb-1" />
          <span class="text-sm">{{ project.title }}</span>
        </button>
      </div>
    </div>

    <!-- Área de Proyectos -->
    <div class="flex-1 grid grid-cols-4 gap-4 p-6">
      <!-- Información del Proyecto -->
      <div
        class="col-span-1 bg-base-100 p-4 rounded-lg shadow-md flex flex-col justify-between"
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

      <!-- Visualización Estilo Monitores -->
      <div class="col-span-3 grid grid-cols-3 gap-4">
        <div
          v-for="(media, index) in projects[selectedProject].media"
          :key="index"
          class="bg-black rounded-lg overflow-hidden shadow-lg aspect-video"
        >
          <img
            v-if="!media.video"
            :src="media.url"
            alt=""
            class="w-full h-full object-cover"
          />
          <video
            v-else
            :src="media.url"
            autoplay
            loop
            muted
            class="w-full h-full object-cover"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from "vue";

  const projects = ref([
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1.",
      icon: "https://via.placeholder.com/50", // Icono para la barra
      link: "#",
      media: [
        { url: "https://via.placeholder.com/400x300", video: false },
        { url: "https://via.placeholder.com/400x300", video: false },
        { url: "https://via.placeholder.com/400x300", video: false },
        { url: "https://via.placeholder.com/400x300", video: false },
        { url: "https://via.placeholder.com/400x300", video: false },
        { url: "https://via.placeholder.com/400x300", video: false },
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

  const selectProject = (index) => {
    selectedProject.value = index;
  };
</script>
