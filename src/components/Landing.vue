<template lang="">
  <div
    class="h-screen w-screen overflow-hidden relative flex justify-center items-center"
  >
    <BackgroundCarousel class="absolute top-0" @carousel_init="init()" />
    <div
      class="mask-bg-linear w-full flex flex-col justify-center items-center 2xl:items-end"
      v-if="state.start"
    >
      <div
        :class="[
          ' py-5 2xl:py-14 2xl:px-8 2xl:pr-20 items-center w-4/5 2xl:w-1/3  z-10 relative 2xl:h-screen motion-duration-700 motion-scale-y-in-105 motion-scale-x-in-0  motion-ease-spring-bouncy -motion-translate-x-in-[250%] motion-opacity-in-0 motion-bg-in-transparent motion-duration-[1.1s]/bg   motion-duration-[1.5s]/opacity  motion-opacity-loop-60 bg-opacity-70',
          `bg-gradient-to-br from-pink-300/10 from-15% via-pink-300/40 via-50% to-85% to-pink-300/10 
          motion-bg-loop-indigo-950`,
        ]"
      >
        <div
          :class="[
            'flex flex-col gap-10 justify-center items-center  text-landing opacity-95 motion-duration-500 motion-ease-spring-snappy motion-duration-150/scale motion-duration-150/blur ',
            state.animateText && !state.hoverText1 && !state.hoverText2
              ? 'motion-preset-shake  motion-blur-loop-sm  motion-scale-loop-95'
              : '',
            !state.hoverText1 && !state.hoverText2 ? ' ' : '',
          ]"
          v-if="state.firstAnimationEnded"
        >
          <h1
            :class="[
              'landing-text 2xl:text-end font-bold font-roboto leading-3 mx-auto -tracking-wider motion-ease-in-out-quad  ',
              state.showText1
                ? 'motion-duration-200  motion-translate-x-in-[150%] motion-preset-fade'
                : 'opacity-0',
              !state.hoverText1
                ? 'motion-duration-1000  motion-scale-loop-[99.5%] motion-blur-loop-sm motion-duration-2000/blur -motion-translate-x-loop-[1.2%] motion-duration-2000/translate motion-translate-y-loop-[1.5%] motion-text-loop-accent motion-duration-/text motion-translate-x-out-0 motion-translate-out-in-0'
                : 'neon-title',
            ]"
            @mouseenter="handleHover(1, true)"
            @mouseleave="handleHover(1, false)"
          >
            Hey! <br />
            I'm Leonardo <br />
            Terlizzi
          </h1>
          <h1
            :class="[
              'landing-text 2xl:text-end font-bold font-roboto -tracking-wider w-full  motion-ease-in-out-quad  ',
              state.showText2
                ? 'motion-duration-200  motion-translate-y-in-[150%]  motion-preset-fade'
                : 'opacity-0',
              !state.hoverText2
                ? 'motion-duration-1000 motion-scale-loop-[100.5%] motion-blur-loop-sm motion-duration-1500/blur -motion-translate-x-loop-[1.2%] motion-duration-2000/translate motion-translate-y-loop-[1.5%] motion-text-loop-accent motion-duration-/text motion-translate-x-out-0 motion-translate-out-in-0'
                : 'neon-title',
            ]"
            @mouseenter="handleHover(2, true)"
            @mouseleave="handleHover(2, false)"
          >
            & I'm<br />
            a web <br />developer.
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import BackgroundCarousel from "./BackgroundCarousel.vue";
  import { onMounted, reactive } from "vue";

  const state = reactive({
    start: false,
    firstAnimationEnded: false,
    showText1: false,
    showText2: false,
    animateText: false,
    hoverText1: false,
    hoverText2: false,
    bgColor: "indigo",
    colors: [
      "indigo",
      "fuchsia",
      "teal",
      "red",
      "pink",
      "amber",
      "blue",
      "violet",
    ],
  });

  function handleHover(num, condition) {
    if (num === 1) {
      state.hoverText1 = condition;
    } else state.hoverText2 = condition;
  }

  function getRandomColor() {
    let rng = Math.floor(Math.random() * 7);
    return state.colors[rng];
  }

  // setInterval(() => {
  //   state.bgColor = getRandomColor();
  // }, 3000);

  function init() {
    state.start = true;
    setTimeout(() => {
      state.firstAnimationEnded = true;
      state.showText1 = true;
      setTimeout(() => {
        state.showText2 = true;
      }, 300);
    }, 1000);
    setInterval(() => {
      state.animateText = true;
      setTimeout(() => {
        state.animateText = false;
      }, 1000);
    }, 4000 + Math.random() * 2000);
  }

  onMounted(() => {});
</script>
<style scoped>
  .neon-title {
    color: #fff;
    text-shadow: 0 0 5px #efdf96, 0 0 10px #efdf96, 0 0 20px #efdf96,
      0 0 30px #efdf96;
  }

  /* Efecto neon en el texto */
  .neon-text {
    text-shadow: 0 0 2px #8a2be2, 0 0 4px #8a2be2, 0 0 8px #8a2be2;
  }
  .hover-container {
    position: relative;
    overflow: hidden;
  }

  .hover-effect {
    color: white; /* Texto inicial */
    background-color: black; /* Fondo inicial */
    position: relative;
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
    transition: color 0.2s ease-in-out;
  }

  .hover-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 150px; /* Tamaño del efecto */
    height: 150px;
    background: white;
    border-radius: 50%; /* Forma circular */
    transform: translate(-50%, -50%);
    pointer-events: none; /* Ignora clics */
    z-index: 1;
    mix-blend-mode: difference; /* Efecto de mezcla */
    transition: background 0.2s ease-in-out;
    opacity: 0; /* Oculto inicialmente */
  }

  .hover-container:hover::before {
    opacity: 1; /* Mostrar al hacer hover */
  }

  .hover-container:hover .hover-effect {
    color: black; /* Cambiar color del texto */
    transition: color 0.2s ease-in-out;
  }
</style>
