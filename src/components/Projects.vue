<template lang="">
  <div
    class="h-auto flex flex-col bg-gradient-to-r from-indigo-900 from-10% mask-bg-radial via-90% via-indigo-950 to-100%% to-black"
  >
    <!-- Barra de Navegación -->
    <div class="lg:h-screen lg:min-h-screen">
      <div class="navbar shadow-lg h-fit lg:h-[7%] pb-4 lg:pb-4">
        <div
          class="flex gap-1 lg:flex-nowrap flex-wrap lg:gap-4 mx-auto justify-center"
        >
          <button
            v-for="(project, index) in projects"
            :key="index"
            @click="selectProject(index)"
            class="btn border-x-indigo-800 bg-opacity-80 btn-outline btn-xs lg:btn-sm xl:px-10 text-base-content flex flex-col items-center py-1 gap-2 align-middle justify-evenly rounded-lg hover:bg-indigo-400 transition-all duration-100 ease-in-out z-50 w-auto px-10"
            :class="[
              selectedProject === index
                ? 'bg-indigo-700 border-indigo-700 neon-shadow-lil'
                : '',
            ]"
          >
            <img :src="project.icon" alt="" class="size-4 lg:size-6 -ml-4" />
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
        class="flex-1 h-auto lg:h-[92%] bg-control font-orbitron container-shadow-lil rounded-lg"
        v-if="props.isVisible"
      >
        <!-- h-svh -->
        <div
          class="h-svh lg:h-full lg:grid lg:grid-cols-4 gap-4 p-6 mb-40 lg:mb-0"
        >
          <div
            :class="[
              'col-span-1 h-4/6 lg:h-auto bg-opacity-85 bg-indigo-950 p-4 rounded-xl  shadow-md flex flex-col lg:justify-between   text-sky-300 ',
              showMedia
                ? 'translate-x-0  transition-all duration-500'
                : 'opacity-0 bg-opacity-0 text-opacity-0 -ml-20 -translate-x-full overflow-clip transition-all duration-500',
            ]"
          >
            <div class="flex flex-col justify-between py-1 h-full">
              <h2 class="text-3xl font-bold mb-4 neon-title text-center">
                {{ projects[selectedProject].title }}
              </h2>
              <!-- -->
              <p
                class="flex-1 text-xs lg:text-lg lg:mt-8 text-start leading-6 lg:leading-8 tracking-widest mx-8"
                v-html="projects[selectedProject].renderedDescription"
              ></p>
            </div>

            <div class="flex lg:flex-col lg:gap-5 justify-around mx-2.5 gap-2">
              <a
                :href="projects[selectedProject].link"
                target="_blank"
                class="btn btn-outline btn-accent text-xs text-white font-orbitron lg:text-xl mt-4 rounded-xl lg:w-full w-1/2"
              >
                Ver Proyecto
              </a>
              <a
                :href="projects[selectedProject].repoLink"
                target="_blank"
                class="btn btn-outline btn-accent font-orbitron lg:text-xl mt-4 rounded-xl lg:w-full w-1/2"
              >
                <font-awesome-icon
                  :icon="['fab', 'github']"
                  class="lg:size-7 size-5"
                />
              </a>
            </div>
          </div>

          <div
            :class="[
              'col-span-3 grid grid-cols-3 gap-4 row-auto lg:mt-0 mt-10 ',
              showMedia
                ? 'motion-scale-in-0 motion-opacity-in-0 motion-duration-500 '
                : 'motion-scale-out-0 motion-opacity-out-0 motion-duration-500 ',
            ]"
          >
            <!-- 
          clases de la ternaria del div
          mask-bg-radial
           mark-bg-linear
           crt
          -->
            <div
              v-for="(media, index) in projects[selectedProject].media"
              :key="index"
              :class="[
                'bg-black rounded-lg overflow-hidden shadow-lg aspect-video',
                media.video ? 'col-span-2 row-span-2' : `${media.classes + ''}`,
              ]"
            >
              <img
                :src="media.url"
                v-if="!media.video"
                alt=""
                :class="[
                  'w-full h-full object-cover opacity-85',
                  media.hovering
                    ? 'motion-opacity-in-100'
                    : media.classes.length > 0
                    ? 'motion-opacity-loop-0'
                    : '',
                ]"
                :style="{
                  animationDuration: media.duration,
                }"
                @mouseenter="hoverImg(index, true)"
                @mouseleave="hoverImg(index, false)"
              />

              <!-- crt -->
              <video
                v-else
                :src="media.url"
                autoplay
                muted
                class="h-full object-cover mask-bg-radial opacity-85"
                ref="video"
                poster="/whitenoise.gif"
                @loadedmetadata="setPlaybackRate(index, selectedProject)"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref, useTemplateRef, onMounted, watch, onBeforeMount } from "vue";

  const props = defineProps(["isVisible"]);

  const videosTemplate = useTemplateRef("video");

  const projects = ref([
    {
      title: "Yo quiero saber, ¿Y vos?",
      renderedDescription: "",
      description:
        "&emsp;&emsp;Web para el canal infantil argentino estatal Paka-Paka sobre ESI (Educación Sexual Integral). <br><br>&emsp;&emsp;Con el arte y el diseño provisto, la web fue realizada con puro Javascript, HTML y CSS y PixieJs para las animaciones.<br><br>&emsp;&emsp;",
      icon: "/pakapaka/home_logo.webp", // Icono para la barra
      link: "https://esi.pakapaka.gob.ar/",
      repoLink: "https://github.com/anavaira/pakapaka_esi",
      media: [
        { url: "/pakapaka/pakapaka.mp4", video: true },
        {
          url: "/pakapaka/1.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/pakapaka/2.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/pakapaka/3.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/pakapaka/4.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/pakapaka/5.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        // { url: "/pakapaka/6.webp", video: false },
      ],
      hovering: false,
    },
    {
      title: "VCM",
      renderedDescription: "",
      description:
        "&emsp;&emsp;Página personal para ofrecer servicios de personal de salud mental. Es una página principalmente estática pero con un formulario de contacto para enviar mensajes al mail.<br><br>&emsp;&emsp;Hecha en Vue con Tailwind y Node/ExpressJS para el envío de mensajes a un e-mail.",
      icon: "/vcm/vcmlogo.webp",
      link: "https://licvanesacarlottomiranda.com.ar/",
      repoLink: "",
      media: [
        {
          url: "/vcm/vcm.mp4",
          video: true,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/vcm/vcm1.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/vcm/vcm2.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/vcm/vcm3.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/vcm/vcm4.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/vcm/vcm5.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
      ],
    },
    {
      title: "DevCards",
      renderedDescription: "",
      description:
        "&emsp;&emsp;Dev tool para manejo de proyectos, tareas, sprint y usuarios. Pensado principalmente como herramineta para SCRUM.<br><br>&emsp;&emsp;Realizada en Vue, Tailwind, Java/Spring(API) y PostgreSQL.<br><br>&emsp;&emsp; ",
      icon: "/DevCards/card.webp",
      link: "#",
      repoLink: "https://github.com/Ltizzi/dev-cards",
      media: [
        {
          url: "/DevCards/devcards1.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/DevCards/devcards2.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/DevCards/devcards3.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/DevCards/devcards4.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/DevCards/devcards5.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/DevCards/devcards6.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },

        {
          url: "/DevCards/devcards7.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/DevCards/devcards8.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/DevCards/devcards9.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
      ],
    },
    {
      title: "E-commerce",
      renderedDescription: "",
      description:
        "&emsp;&emsp;Template de E-commerce con autenticación (Google Oauth2), administración de stocks (entradas, salidas, ventas, etc), perfil de usuarios, reviews de usuarios, wishlists, catálogo, buscador de productos, edición de productos, sistema de ofertas por tiempo, etc.<br><br>&emsp;&emsp;Hecho en Angular con Tailwind, Node/ExpressJS (con Typescript) y una base de datos PostgreSQL ",
      icon: "/Eshop/ecommerce.ico",
      link: "#",
      repoLink: "https://github.com/Ltizzi/E-Commerce",
      media: [
        {
          url: "/Eshop/eshop1.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/Eshop/eshop2.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/Eshop/eshop3.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/Eshop/eshop4.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/Eshop/eshop5.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/Eshop/eshop6.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/Eshop/eshop7.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/Eshop/eshop8.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/Eshop/eshop9.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
      ],
    },
    {
      title: "Craze",
      renderedDescription: "",
      description:
        "&emsp;&emsp;Craze es una red social de memes en la que los usuarios sólo pueden interactuar a través de memes, incluso en las respuestas. Con generador de memes incorporado y tags(base o personalizados) a modo de hashtags de twitter.<br><br>&emsp;&emsp;Realizada en Vue con Tailwind, Node/ExpressJS con MongoDB.",
      icon: "/craze/logo.webp",
      link: "https://craze-test.web.app/",
      repoLink: "https://github.com/Ltizzi/Craze",
      media: [
        {
          url: "/craze/craze.mp4",
          video: true,
        },
        {
          url: "/craze/craze1.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/craze/craze2.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/craze/craze3.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/craze/craze4.webp",
          video: false,
          hovering: false,
          duration: "",
          classes: "",
        },
        {
          url: "/craze/craze5.webp",
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
    selectedProject.value = index;
    setTimeout(() => {
      showMedia.value = true;
    }, 200);
  }

  function getUrlAddress(url) {
    return new URL(url.replace("", "/src/assets"), import.meta.url).href;
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
    return chances < 0.4 ? (chances < 0.51 ? "smpte" : "whitenoise") : "";
  }

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function recalcClassAndDurations() {
    const medias = projects.value[selectedProject.value].media;
    //console.log(medias);
    for (const media of medias) {
      if (!media.video) {
        // console.log(media);
        media.classes = getClass();
        if (media.classes.length > 0) media.duration = getDuration();
        else media.duration = "0s";
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
    }, 5);

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
    background-image: url("/smpte.gif");
  }

  .whitenoise {
    background-image: url("/whitenoise.gif");
  }

  .bg-control {
    background-image: url("/bg-control.jpg");
    background-repeat: round;
    background-size: contain;
    background-color: rgba(24, 24, 24, 0.596);
    background-blend-mode: darken;
  }
</style>
