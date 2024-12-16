<template lang="">
  <div
    class="h-screen flex flex-col bg-gradient-to-br from-base-300 to-primary"
  >
    <!-- Barra de Navegación -->
    <div class="navbar shadow-lg">
      <div class="flex gap-4 mx-auto">
        <button
          v-for="(project, index) in projects"
          :key="index"
          @click="selectProject(index)"
          class="btn btn-info bg-opacity-80 btn-outline btn-sm text-base-content flex flex-col items-center py-1 align-middle justify-center rounded-lg hover:bg-sky-400"
          :class="[
            selectedProject === index ? 'btn-active neon-shadow-lil' : '',
          ]"
        >
          <img :src="getUrlAddress(project.icon)" alt="" class="size-8" />
          <span
            :class="[
              'text-lg font-orbitron  motion-duration-500 motion-ease-in-cubic motion-translate-x-loop-[0.5px] hover:motion-translate-y-in-0 hover:text-yellow-50 transition-all duration-150',
              selectedProject == index
                ? 'text-yellow-50 text-opacity-85'
                : 'text-sky-700',
            ]"
            >{{ project.title }}</span
          >
        </button>
      </div>
    </div>

    <div class="flex-1 grid grid-cols-4 gap-4 p-6 bg-control font-orbitron">
      <div
        :class="[
          'col-span-1 bg-base-300 p-4 rounded-lg shadow-md flex flex-col justify-between bg-opacity-80 text-lime-200 text-opacity-95 mask-bg-radial ',
          showMedia
            ? 'translate-x-0  transition-all duration-500'
            : 'opacity-0 bg-opacity-0 text-opacity-0 -ml-20 -translate-x-full overflow-clip transition-all duration-500',
        ]"
      >
        <div class="flex flex-col justify-between crt">
          <h2 class="text-3xl font-bold mb-4">
            {{ projects[selectedProject].title }}
          </h2>
          <!-- -->
          <p
            class="flex-1 text-lg mt-5 text-start leading-9"
            v-html="projects[selectedProject].renderedDescription"
          ></p>
        </div>

        <div class="flex flex-col gap-5">
          <a
            :href="projects[selectedProject].link"
            target="_blank"
            class="btn btn-outline btn-accent text-white font-orbitron text-xl mt-4 rounded-xl"
          >
            Ver Proyecto
          </a>
          <a
            :href="projects[selectedProject].repoLink"
            target="_blank"
            class="btn btn-outline btn-accent font-orbitron text-xl mt-4 rounded-xl"
          >
            <font-awesome-icon :icon="['fab', 'github']" class="size-7" />
          </a>
        </div>
      </div>

      <div
        :class="[
          'col-span-3 grid grid-cols-3 gap-4 row-auto ',
          showMedia
            ? 'motion-scale-in-0 motion-opacity-in-0 motion-duration-500 '
            : 'motion-scale-out-0 motion-opacity-out-0 motion-duration-500 ',
        ]"
      >
        <div
          v-for="(media, index) in projects[selectedProject].media"
          :key="index"
          :class="[
            'bg-black rounded-lg overflow-hidden shadow-lg aspect-video',
            media.video
              ? 'col-span-2 row-span-2 crt mask-bg-radial '
              : `${media.classes + ' crt mark-bg-linear'}`,
          ]"
        >
          <img
            :src="getUrlAddress(media.url)"
            v-if="!media.video"
            alt=""
            :class="[
              'w-full h-full object-cover',
              media.hovering
                ? 'motion-opacity-in-100'
                : 'motion-opacity-loop-0',
            ]"
            :style="{
              animationDuration: media.duration,
            }"
            @mouseenter="hoverImg(index, true)"
            @mouseleave="hoverImg(index, false)"
          />

          <video
            v-else
            :src="getUrlAddress(media.url)"
            autoplay
            loop
            muted
            class="h-full object-cover mask-bg-radial crt"
            ref="video"
            poster="@assets/whitenoise.gif"
            @loadedmetadata="setPlaybackRate(index, selectedProject)"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref, useTemplateRef, onMounted, watch, onBeforeMount } from "vue";

  const videosTemplate = useTemplateRef("video");

  const projects = ref([
    {
      title: "Yo quiero saber, ¿Y vos?",
      renderedDescription: "",
      description:
        "&emsp;&emsp;Web para el canal infantil argentino estatal Paka-Paka sobre ESI (Educación Sexual Integral). <br><br>&emsp;&emsp;Con el arte y el diseño provisto, la web fue realizada con puro Javascript, HTML y CSS y PixieJs para las animaciones.<br><br>&emsp;&emsp;",
      icon: "@assets/pakapaka/home_logo.png", // Icono para la barra
      link: "https://esi.pakapaka.gob.ar/",
      repoLink: "https://github.com/anavaira/pakapaka_esi",
      media: [
        { url: "@assets/videos/pakapaka.mp4", video: true },
        {
          url: "@assets/pakapaka/1.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "@assets/pakapaka/2.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "@assets/pakapaka/3.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "@assets/pakapaka/4.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "@assets/pakapaka/5.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        // { url: "@assets/pakapaka/6.png", video: false },
      ],
      hovering: false,
    },
    {
      title: "Proyecto 2",
      renderedDescription: "",
      description: "Descripción del proyecto 2.",
      icon: "https://via.placeholder.com/50",
      link: "#",
      repoLink: "",
      media: [
        {
          url: "https://via.placeholder.com/400x300",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "https://via.placeholder.com/400x300",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
      ],
    },
    // Más proyectos...
  ]);

  const selectedProject = ref(0);

  const showMedia = ref(false);

  function selectProject(index) {
    showMedia.value = false;
    setTimeout(() => {
      selectedProject.value = index;
      showMedia.value = true;
    }, 100);
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

  function hoverImg(index, condition) {
    projects.value[selectedProject.value].media[index].hovering = condition;
    if (!condition) {
      projects.value[selectedProject.value].media[index].duration =
        getDuration();
      projects.value[selectedProject.value].media[index].classes = getClass();
    }
  }

  function getDuration() {
    const duration = 10 * Math.random() + 2;
    return duration + "s";
  }

  function getClass() {
    const chances = Math.random();
    return chances < 0.51 ? "smpte" : "whitenoise";
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function recalcClassAndDurations() {
    const medias = projects.value[selectedProject.value].media;
    console.log(medias);
    for (const media of medias) {
      if (!media.video) {
        console.log(media);
        media.duration = getDuration();
        media.classes = getClass();
      }
    }
    projects.value[selectedProject.value].media = medias;
  }

  async function showLetters(index) {
    projects.value[index].renderedDescription = "";
    setTimeout(async () => {
      const description = projects.value[index].description;

      for (let i = 0; i < description.length; i++) {
        const char = description[i];

        if (char === "&") {
          let entity = char;
          let j = i + 1;

          while (j < description.length && description[j] !== ";") {
            entity += description[j];
            j++;
          }

          entity += ";";

          if (entity === "&emsp;") {
            projects.value[index].renderedDescription += entity;
            i = j;
            continue;
          }
        }

        projects.value[index].renderedDescription += char;
        await delay(1);
      }
    }, 500);

    // for (let i = 0; i < projects.value[index].description.length; i++) {
    //   console.log(projects.value[index].description[i]);
    //   setTimeout(() => {
    //     projects.value[index].renderedDescription +=
    //       projects.value[index].description[i];
    //   }, i * 30);
    // }
  }

  watch(
    () => selectedProject.value,
    async (newValue, oldValue) => {
      if (newValue != oldValue) {
        await showLetters(newValue);
        recalcClassAndDurations();
      }
    }
  );

  setInterval(() => {
    recalcClassAndDurations();
  }, 12000);

  onBeforeMount(() => {
    recalcClassAndDurations();
  });

  onMounted(async () => {
    setTimeout(async () => {
      showMedia.value = true;
      await showLetters(selectedProject.value);
    }, 500);
  });
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
    background-repeat: round;
    background-size: contain;
    background-color: rgba(24, 24, 24, 0.596);
    background-blend-mode: darken;
  }
</style>
