<template>
  <div
    class="relative min-h-screen r bg-gradient-to-b from-base-300 to-95% to-violet-950 overflow-hidden"
  >
    <div
      class="src mask-bg-radial absolute w-full h-full flex items-center justify-center"
    >
      <div class="absolute inset-0">
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
        <div class="relative w-60 h-60 md:w-80 md:h-80">
          <img
            src="@assets/profile.jfif   "
            alt="Tu Foto"
            class="w-full h-full object-cover rounded-full neon-shadow shadow-lg hover:scale-105 transition transform duration-300 opacity-85"
          />
          <div
            class="absolute inset-0 rounded-full border border-dashed border-violet-400 animate-pulse"
          ></div>
        </div>

        <div class="flex-1 text-center md:text-left font-roboto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 neon-title">
            Welcome!
          </h1>
          <p class="text-lg md:text-xl leading-relaxed text-violet-200">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Orci iaculis
            quis tempor neque sodales, est scelerisque. Natoque placerat dolor
            sed consequat elit. Nibh finibus elementum ac imperdiet mattis
            lacinia maecenas. Gravida aliquet hendrerit sit metus ridiculus!
            Ridiculus purus arcu varius, nisi egestas litora.
          </p>
          <p class="mt-4 text-md md:text-lg text-violet-300 leading-relaxed">
            Dignissim urna est ultrices habitasse tortor, sollicitudin
            consectetur. Eget vulputate hac convallis varius, venenatis nullam.
            Felis est at potenti adipiscing in ex platea. Aenean eget tempus
            ligula ridiculus, suspendisse sollicitudin.
          </p>
          <p class="mt-4 text-sm md:text-base opacity-70 text-violet-400">
            Tincidunt et rutrum dignissim ante elementum quam, litora duis
            porttitor? Commodo curabitur ad lectus id molestie eget eget. Elit
            nulla pellentesque lobortis suscipit laoreet taciti dictumst.
          </p>
        </div>
      </div>
    </div>

    <!-- </div> -->
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const images = ref([
    {
      src: new URL("@assets/workstation.jpeg", import.meta.url).href,
      top: "-5%",
      left: "40%",
      size: "300px",
      rounded: false,
      opacity: 0.4,
      hovering: false,
    },
    {
      src: new URL("@assets/workstation2.jpeg", import.meta.url).href,
      top: "25%",
      left: "100%",
      size: "300px",
      rounded: true,
      opacity: 0.4,
      hovering: false,
    },
    {
      src: new URL("@assets/workstation3.webp", import.meta.url).href,
      top: "55%",
      left: "65%",
      size: "400px",
      rounded: false,
      opacity: 0.4,
      hovering: false,
    },
    {
      src: new URL("@assets/workstation_retro.webp", import.meta.url).href,
      top: "30%",
      left: "135%",
      size: "420px",
      rounded: false,
      opacity: 0.4,
      hovering: false,
    },
    {
      src: new URL("@assets/workstation_neon.webp", import.meta.url).href,
      top: "45%",
      left: "175%",
      size: "380px",
      rounded: true,
      opacity: 0.4,
      hovering: false,
    },
    {
      src: new URL("@assets/hackerlair.jpeg", import.meta.url).href,
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

  .container-shadow {
    box-shadow: 0 0 250px 15px #bd66ff, 0 0 15px 5px #ff32ff91,
      0 0 100px 30px #32ff4adc, 0 0 50px 10px #33dffaee;
  }

  .neon-shadow {
    box-shadow: 0px 0px 20px 10px #ff0bc2af, 0px 0px 20px #ff0bc2b3,
      0px 0px 25px #ff0bc2dd, 0px 0px 30px #ff0bc2be;
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

  .neon-title {
    color: #f8e5f3;
    text-shadow: 0 0 5px #ff48c5, 0 0 10px #ff48c5, 0 0 15px #ff48c5,
      0 0 20px #ff48c5;
  }
</style>
