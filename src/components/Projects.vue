<template lang="">
  <div
    class="h-auto flex flex-col bg-gradient-to-r from-indigo-900 from-10% mask-bg-radial via-90% via-indigo-950 to-100%% to-black"
  >
    <!-- Barra de Navegación -->
    <div class="h-screen min-h-screen">
      <div class="navbar shadow-lg h-fit">
        <div class="flex gap-4 mx-auto justify-center">
          <button
            v-for="(project, index) in projects"
            :key="index"
            @click="selectProject(index)"
            class="btn border-x-indigo-400 bg-opacity-80 btn-outline btn-sm text-base-content flex flex-col items-center py-1 gap-2 align-middle justify-evenly rounded-lg hover:bg-indigo-400 transition-all duration-100 ease-in-out z-50 w-auto px-10"
            :class="[
              selectedProject === index
                ? 'bg-indigo-700 border-indigo-700 neon-shadow-lil'
                : '',
            ]"
          >
            <img
              :src="getUrlAddress(project.icon)"
              alt=""
              class="size-6 -ml-4"
            />
            <span
              :class="[
                'text-xs font-orbitron  motion-duration-500 motion-ease-in-cubic motion-translate-x-loop-[0.5px] hover:motion-translate-y-in-0  hover:text-yellow-50 transition-all duration-150',
                selectedProject == index
                  ? 'text-yellow-50 text-opacity-85'
                  : 'text-indigo-300',
              ]"
              >{{ project.title }}</span
            >
          </button>
        </div>
      </div>

      <div
        class="flex-1 grid grid-cols-4 gap-4 p-6 bg-control h-fit font-orbitron container-shadow-lil rounded-lg"
      >
        <div
          :class="[
            'col-span-1 bg-opacity-85 bg-indigo-950 p-4 rounded-xl  shadow-md flex flex-col justify-between   text-sky-300  ',
            showMedia
              ? 'translate-x-0  transition-all duration-500'
              : 'opacity-0 bg-opacity-0 text-opacity-0 -ml-20 -translate-x-full overflow-clip transition-all duration-500',
          ]"
        >
          <div class="flex flex-col justify-between py-1">
            <h2 class="text-3xl font-bold mb-4 neon-title text-center">
              {{ projects[selectedProject].title }}
            </h2>
            <!-- -->
            <p
              class="flex-1 text-lg mt-8 text-start leading-10 tracking-widest mx-8"
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
      title: "DevCards",
      renderedDescription: "",
      description:
        "&emsp;&emsp;Dev tool para manejo de proyectos, tareas, sprint y usuarios. Pensado principalmente como herramineta para SCRUM.<br><br>&emsp;&emsp;Realizada en Vue, Tailwind, Java/Spring(API) y PostgreSQL.<br><br>&emsp;&emsp; ",
      icon: "@assets/DevCards/card.png",
      link: "#",
      repoLink: "https://github.com/Ltizzi/dev-cards",
      media: [
        {
          url: "@assets/DevCards/devcards1.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "@assets/DevCards/devcards2.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "@assets/DevCards/devcards3.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "@assets/DevCards/devcards4.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "@assets/DevCards/devcards5.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "@assets/DevCards/devcards6.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },

        {
          url: "@assets/DevCards/devcards7.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "@assets/DevCards/devcards8.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "@assets/DevCards/devcards9.png",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
      ],
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
        {
          url: "https://via.placeholder.com/400x300",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
      ],
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
    }, 500);
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
        await delay(0);
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
