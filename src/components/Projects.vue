<template lang="">
  <div
    class="h-auto flex flex-col bg-gradient-to-r from-indigo-900 from-10% mask-bg-radial via-90% via-indigo-950 to-100%% to-black"
    id="projects"
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
                :class="[
                  'btn btn-outline btn-accent text-xs text-white font-orbitron lg:text-xl mt-4 rounded-xl lg:w-full w-1/2',
                  !projects[selectedProject].link ? 'btn-disabled' : '',
                ]"
              >
                Open Project
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
                  'w-full h-full object-cover opacity-85 hover:cursor-pointer',
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
                @click="showModal(false, media.url)"
              />

              <!-- crt -->
              <video
                v-else
                :src="media.url"
                autoplay
                muted
                class="h-full object-cover mask-bg-radial opacity-85 hover:cursor-pointer"
                ref="video"
                poster="/whitenoise.gif"
                @loadedmetadata="setPlaybackRate(index, selectedProject)"
                @click="showModal(true, media.url)"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MediaModal
      v-if="state.modalShow"
      :modalShow="state.modalShow"
      :route="state.route"
      :isVideo="state.isVideo"
      @close="closeModal()"
    />
  </div>
</template>
<script setup>
  import {
    ref,
    useTemplateRef,
    onMounted,
    watch,
    onBeforeMount,
    reactive,
  } from "vue";
  import MediaModal from "./MediaModal.vue";

  const state = reactive({
    modalShow: false,
    route: "",
    isVideo: false,
  });

  const props = defineProps(["isVisible"]);

  const videosTemplate = useTemplateRef("video");

  const projects = ref([
    {
      title: "Yo quiero saber, ¿Y vos?",
      renderedDescription: "",
      description:
        // "&emsp;&emsp;Web para el canal infantil argentino estatal Paka-Paka sobre ESI (Educación Sexual Integral).<br><br>&emsp;&emsp;Con el arte y el diseño provisto, la web fue desarrollada con JavaScript, HTML y CSS, utilizando PixiJS para animaciones interactivas. Es una página 100% estática, diseñada para niños de 3 a 9 años, con contenidos educativos avalados por el Estado argentino.",
        "&emsp;&emsp;Website for the Argentine state-owned children's channel Paka-Paka about Comprehensive Sexual Education (ESI).<br><br>&emsp;&emsp;Using provided art and design, the site was built with JavaScript, HTML, and CSS, with PixiJS for interactive animations. It is a 100% static page, designed for children aged 3 to 9, featuring educational content endorsed by the Argentine government.",
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
        // "&emsp;&emsp;Página personal para ofrecer servicios de salud mental. Es una página principalmente estática, pero incluye un formulario de contacto que envía mensajes directamente al correo electrónico.<br><br>&emsp;&emsp;Desarrollada en Vue con Tailwind para el frontend y Node/ExpressJS para el backend, permitiendo el envío de mensajes a una casilla de correo específica.",
        "&emsp;&emsp;Personal website for mental health services. It is primarily a static page but includes a contact form that sends messages directly to an email inbox.<br><br>  &emsp;&emsp;Built with Vue and Tailwind for the frontend, and Node/ExpressJS for the backend, enabling message delivery to a specific email address.",
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
        //  "&emsp;&emsp;Herramienta para desarrolladores enfocada en la gestión de proyectos, tareas, sprints y usuarios. Diseñada principalmente para equipos que utilizan metodologías SCRUM.<br><br>&emsp;&emsp;Desarrollada en Vue con Tailwind para el frontend, Java/Spring para la API y PostgreSQL para la base de datos. Incluye autenticación de usuarios con JWT, OAuth2 (Google), y paneles de administración con roles diferenciados (usuarios, moderadores, administradores).",
        "&emsp;&emsp;Developer tool focused on project, task, sprint, and user management. Designed primarily for teams using SCRUM methodologies.<br><br>&emsp;&emsp;Built with Vue and Tailwind for the frontend, Java/Spring for the API, and PostgreSQL for the database. Features user authentication with JWT, OAuth2 (Google), and admin panels with differentiated roles (users, moderators, administrators).",
      icon: "/DevCards/card.webp",
      link: "",
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
        // "&emsp;&emsp;Template de E-commerce con autenticación (Google OAuth2), administración de stocks (entradas, salidas, ventas), perfiles de usuarios, reseñas, wishlists, catálogo, buscador de productos, edición de productos y sistema de ofertas por tiempo limitado.<br><br>&emsp;&emsp;Desarrollado en Angular con Tailwind para el frontend, Node/ExpressJS (TypeScript) para el backend y PostgreSQL para la base de datos.",
        "&emsp;&emsp;E-commerce template featuring authentication (Google OAuth2), stock management (inventory, sales), user profiles, reviews, wishlists, product catalog, product search, product editing, and time-limited offers.<br><br>  &emsp;&emsp;Built with Angular and Tailwind for the frontend, Node/ExpressJS (TypeScript) for the backend, and PostgreSQL for the database.",
      icon: "/Eshop/ecommerce.ico",
      link: "",
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
        // "&emsp;&emsp;Craze es una red social de memes donde los usuarios interactúan exclusivamente a través de memes, incluso en las respuestas. Incluye un generador de memes integrado y etiquetas (base o personalizadas) similares a los hashtags de Twitter.<br><br>&emsp;&emsp;Desarrollada en Vue con Tailwind para el frontend, Node/ExpressJS para el backend y MongoDB para la base de datos. Cuenta con autenticación de usuarios mediante cookies, OAuth2 (Google), y paneles de administración y moderación de contenido con roles diferenciados.",
        "&emsp;&emsp;Craze is a meme-based social network where users interact exclusively through memes, even in replies. It includes a built-in meme generator and tags (default or custom) similar to Twitter hashtags.<br><br>&emsp;&emsp;Built with Vue and Tailwind for the frontend, Node/ExpressJS for the backend, and MongoDB for the database. Features user authentication via cookies, OAuth2 (Google), and admin/moderation panels with differentiated roles.",
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

  function showModal(isVideo, route) {
    state.modalShow = true;
    state.isVideo = isVideo;
    state.route = route;
    console.log(state);
  }

  function closeModal() {
    state.modalShow = false;
    state.isVideo = false;
    state.route = "";
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
