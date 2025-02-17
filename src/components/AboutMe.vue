<template>
  <div
    class="relative min-h-screen r bg-gradient-to-b from-base-300 to-95% to-violet-950 overflow-hidden"
    id="about"
  >
    <div
      class="mask-bg-radial absolute w-full h-full flex items-center justify-center"
      v-if="props.isVisible"
    >
      <div class="absolute inset-0" v-if="!isMobile">
        <div
          v-for="(image, index) in images"
          :class="[
            'absolute src animate-floating',
            image.hovering ? 'elements' : '',
          ]"
          :style="{
            top: image.top,
            left: image.left,
            width: image.size,
            height: image.size,
            borderRadius: `${image.rounded ? '9999px' : '30px'}`,
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
          @mouseover="handleHover(index, true)"
          @mouseleave="handleHover(index, false)"
        ></div>
      </div>
      <!-- <div
            class="min-h-screen flex items-center justify-center bg-gradient-to-b from-base-300 via-purple-800 to-indigo-900 p-6"
          > -->
      <div
        class="max-w-6xl bg-opacity-85 bg-indigo-950 text-green-400 rounded-xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-10 border border-green-500 relative z-0 container-shadow"
      >
        <div class="relative w-40 h-40 lg:w-80 lg:h-80">
          <img
            src="/profile.webp   "
            alt="Tu Foto"
            class="w-full h-full object-cover rounded-full neon-shadow lg:shadow-lg hover:scale-105 transition transform duration-300 opacity-85"
          />
          <div
            class="absolute inset-0 rounded-full border border-dashed border-violet-400 animate-pulse"
          ></div>
        </div>

        <div class="flex-1 text-center md:text-left font-roboto">
          <h1 class="text-3xl md:text-6xl font-bold mb-6 neon-title">
            Welcome!
          </h1>
          <p class="text-base md:text-xl leading-relaxed text-violet-200">
            <!-- Soy un desarrollador web freelance con una gran pasión por la tecnología. Aprendí a programar de manera autodidacta durante la pandemia de COVID-19, un momento que aproveché para adquirir nuevas habilidades y reinventarme profesionalmente. Antes de dedicarme al desarrollo web, tuve experiencias laborales diversas: desde atención al público hasta ser profesor de guitarra y sonidista en eventos y bandas en vivo. Estos roles me enseñaron a adaptarme a diferentes desafíos y a trabajar bajo presión, habilidades que ahora aplico en mi trabajo como desarrollador. -->

            I am a freelance web developer with a deep passion for technology. I
            taught myself how to code during the COVID-19 pandemic, a time I
            used to acquire new skills and reinvent myself professionally.
            Before diving into web development, I had diverse work experiences:
            from customer service to working as a guitar teacher and sound
            engineer for live events and bands. These roles taught me how to
            adapt to different challenges and work under pressure, skills I now
            apply in my work as a developer.
          </p>
          <p class="mt-4 text-sm md:text-lg text-violet-300 leading-relaxed">
            <!-- Mi enfoque principal está en el uso de tecnologías como JavaScript, TypeScript, Vue, Angular, Node.js y Express.js. Tengo experiencia en la creación de páginas estáticas (como portfolios profesionales y e-commerce con funcionalidades básicas), así como en el desarrollo de APIs para la gestión de stocks, ventas, y sistemas de registro, logueo y administración de usuarios. Además, he trabajado con bases de datos como MySQL, PostgreSQL y MongoDB. -->
            My primary focus is on technologies like
            <b> JavaScript, TypeScript, Vue, Angular, Node.js, and Express.js</b
            >. I have experience building static websites (such as professional
            portfolios and e-commerce sites with basic functionalities), as well
            as developing APIs for stock management, sales, and user
            registration, login, and administration systems. Additionally, I
            have worked with databases like
            <b> MySQL, PostgreSQL, and MongoDB</b>.
          </p>
          <p class="mt-4 text-xs md:text-base opacity-70 text-violet-400">
            <!-- 
            Más allá de la programación, soy un apasionado de la música: toco la
            guitarra, el piano y canto, aunque últimamente dedico menos tiempo a
            estas actividades. También disfruto mucho de la lectura,
            especialmente de géneros como la fantasía y la ciencia ficción,
            aunque también me interesan libros de no ficción sobre historia,
            comunicación y tecnología. -->
            Beyond programming, I am passionate about music: I play the guitar,
            piano, and sing, although I’ve had less time for these activities
            lately. I also enjoy reading, especially fantasy and science
            fiction, but I’m equally interested in non-fiction books about
            history, communication, and technology.
          </p>
          <div
            class="flex flex-row size-7 text-yellow-50 gap-5 mx-auto w-full justify-center mt-5"
          >
            <a href="https://github.com/Ltizzi" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'github']"
                class="size-10 hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:text-yellow-100"
            /></a>
            <a href="https://www.linkedin.com/in/lterlizzi/" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'linkedin']"
                class="size-10 hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:text-yellow-100"
            /></a>

            <a href="https://x.com/ltizzi83" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'square-x-twitter']"
                class="size-10 hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:text-yellow-100"
            /></a>

            <a
              href="mailto:ltizzi83@gmail.com
"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fas', 'square-envelope']"
                class="size-10 hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-500 hover:text-yellow-100"
            /></a>
          </div>
        </div>
      </div>
    </div>

    <!-- </div> -->
  </div>
</template>

<script setup>
  import { onBeforeMount, ref } from "vue";

  const props = defineProps(["isVisible"]);

  const isMobile = ref(false);

  const images = ref([
    // {
    //   src: new URL("/workstation.webp", import.meta.url).href,
    //   top: "-5%",
    //   left: "40%",
    //   size: "300px",
    //   rounded: false,
    //   opacity: 0.4,
    //   hovering: false,
    // },
    {
      src: new URL("/workstation2.webp", import.meta.url).href,
      top: "25%",
      left: "100%",
      size: "300px",
      rounded: true,
      opacity: 0.4,
      hovering: false,
    },
    {
      src: new URL("/workstation3.webp", import.meta.url).href,
      top: "55%",
      left: "65%",
      size: "400px",
      rounded: false,
      opacity: 0.4,
      hovering: false,
    },
    {
      src: new URL("/workstation_retro.webp", import.meta.url).href,
      top: "30%",
      left: "135%",
      size: "420px",
      rounded: false,
      opacity: 0.4,
      hovering: false,
    },
    // {
    //   src: new URL("/workstation_neon.webp", import.meta.url).href,
    //   top: "45%",
    //   left: "175%",
    //   size: "380px",
    //   rounded: true,
    //   opacity: 0.4,
    //   hovering: false,
    // },
    {
      src: new URL("/hackerlair.webp", import.meta.url).href,
      top: "20%",
      left: "215%",
      size: "320px",
      rounded: false,
      opacity: 0.4,
      hovering: false,
    },
  ]);

  function handleHover(index, condition) {
    images.value[index].hovering = condition;
  }

  onBeforeMount(() => {
    isMobile.value = window.innerWidth <= 768;
  });
</script>

<style scoped>
  @keyframes float {
    0% {
      transform: translateX(0vw);
      transform: scale(0.9);
      box-shadow: 0 5px 15px #efdf96, 5px 0 20px #efdf96, 0 2px 25px #efdf96,
        1px 1px 35px #efdf96;
      filter: hue-rotate(0deg);
      filter: drop-shadow(1px 1px 1px #35f2ffc0);
    }

    100% {
      transform: scale(1.5);
      transform: translateX(-200vw);
      box-shadow: 0 0 25px #ff48c5, 0 0 15px #ff48c5, 0 0 15px #ff48c5,
        0 0 40px #ff48c5;
      filter: hue-rotate(100deg);
      filter: drop-shadow(5px 25px 50px #35f2ffb6);
    }
  }

  .elements {
    z-index: inherit;
    transition: transform 0.3s ease-in-out, z-index 0.3s ease-in-out,
      opacity 0.3s ease-in-out;
    box-shadow: 10px 10px 45px #32ff4a, 10px 10px 35px #32ff4a,
      5px 3px 45px #32ff4a, 7px 3px 55px #32ff4a;
  }

  .animate-floating {
    z-index: 0;
    opacity: 0.2;
    animation: float 15.5s linear infinite;
    animation-direction: alternate-reverse;
    filter: blur(3px);
  }

  .elements:hover {
    box-shadow: 10px 10px 45px #32ff4a, 10px 10px 35px #32ff4a,
      5px 3px 45px #32ff4a, 7px 3px 55px #32ff4a;
    animation-play-state: paused;
    transform: scale(2);
    z-index: 20;
    opacity: 1;
    filter: blur(0px);
  }
</style>
