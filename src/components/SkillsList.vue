<template>
  <div
    class="xl:h-screen h-auto xl:pb-0 pb-24 w-screen overflow-hidden bg-indigo-950 sticky"
  >
    <img
      src="@assets/circuit-board.svg"
      :class="['h-full w-full', props.isVisible ? 'repeat-svg' : '']"
      alt=""
    />

    <div
      class="absolute inset-0 xl:top-20 top-16 justify-center items-center xl:-ml-40 ml-14 xl:flex"
      v-if="props.isVisible"
    >
      <div
        class="bg-gradient-to-r from-base-300 to-success/30 bg-opacity-100 w-[82%] lg:w-[72%] lg:left-24 h-48 xl:w-[60%] xl:left-0 xl:h-[70%] rounded-lg shadow-xl border-4 border-gray-500 flex justify-center items-center mask-blur-radial crt relative"
      >
        <img
          src="/server_racks.webp"
          class="top-0 object-cover w-full h-full z-0 opacity-90 motion-duration-[0.6s]/opacity motion-opacity-loop-60/mirror motion-duration-[3s] motion-translate-x-loop-[0.2%] motion-translate-y-loop-[0.2%] motion-ease-in-out-quad motion-ease-spring-bouncier/opacity motion-delay-300/blur motion-blur-loop-md absolute"
          alt=""
        />
        <h1
          class="text-5xl text-center xl:text-7xl font-extrabold tracking-widest absolute xl:top-64 xl:left-96 xl:-ml-10 leading-relax text-opacity-5 font-zendots text-success bg-blue-100 bg-opacity-35 rounded-md px-1.5 py-0.5"
        >
          Tech Skills
        </h1>
      </div>
    </div>

    <div
      class="absolute xl:top-28 top-72 xl:right-8 right-12 lg:right-40 w-72 lg:w-[70%] h-[50%] xl:w-[19%] xl:h-[75%] rounded-lg shadow-lg border-4 border-gray-500 flex justify-center items-center bg-gradient-to-r from-base-300 to-success/30 bg-opacity-100 crt"
      ref="sideScreen"
    >
      <img
        src="/server_racks.webp"
        class="top-0 object-cover w-full h-full z-0 opacity-95 motion-duration-[0.6s]/opacity motion-opacity-loop-90/mirror motion-duration-[3s] motion-translate-x-loop-[0.2%] motion-translate-y-loop-[0.2%] motion-ease-in-out-quad motion-ease-spring-bouncier/opacity motion-delay-300/blur motion-blur-loop-md absolute"
        alt=""
        v-if="props.isVisible"
      />

      <div
        class="relative scroll-container overflow-hidden leading-relax text-opacity-85 font-extralight font-zendots tracking-tight w-full lg:px-64 h-full text-center px-0 xl:px-6 text-2xl xl:text-3xl flex py-16 flex-col gap-10 opacity-100 z-40"
      >
        <div
          class="w-full top-0 left-0 mx-auto mask-blur fixed h-1/3 z-40"
        ></div>
        <ul
          class="flex flex-col gap-7 text-xl xl:text-4xl text-start h-full animated-scroll"
          ref="scrollList"
        >
          <!-- visible_items.includes(index) 
           @animationend="removeFromList(index)"-->
          <li
            v-for="(tech, index) in wordsToScroll"
            :class="[
              'text-opacity-95 text-success z-30 ml-6 lg:ml-0',
              tech_index == index ? `animTech  text-opacity-100` : 'crt',
            ]"
            ref="techItem"
          >
            {{ tech }}
          </li>
        </ul>
        <div
          class="w-full mx-auto mask-blur fixed h-1/3 z-40 bottom-0 left-0 -rotate-180"
        ></div>
      </div>
    </div>
  </div>
  <!-- visible_items.includes(index) ? 'duration-[1s] ease-in-out delay-50
          transition-colors text-success motion-duration-300
          motion-translate-y-loop-[0.01%] motion-translate-x-loop-[0.01%]
          -motion-translate-x-in-25 motion-scale-in-0' : '-translate-x-2/4
          scale-50 opacity-0', -->
</template>

<script setup>
  import { ref, onMounted, useTemplateRef, onUnmounted } from "vue";

  const props = defineProps(["isVisible"]);

  const tech_item = useTemplateRef("techItem");
  const side_screen = useTemplateRef("sideScreen");
  const secondList = ref(false);

  let observer;

  const techs = ref([
    "Java",
    "Javascript",
    "Typescript",
    "Spring",
    // "Hibernate",
    // "JPA",
    "Node",
    "ExpressJS",
    // "TypeORM",
    "Angular",
    "VueJS",
    "TailwindCSS",
    "Bootstrap",
    "MySQL",
    "Postgresql",
    "MongoDB",
    "GIT",
    "Docker",
    "Postman",
  ]);
  const scrollList = useTemplateRef("scrollList");
  const wordsToScroll = ref([...techs.value, ...techs.value]);
  const listHeight = ref();
  const tech_index = ref(0);

  // function removeFromList(index) {
  //   setTimeout(() => {
  //     //      tech_item.value[index].className += "crt  text-opacity-95";
  //     visible_items.value = visible_items.value.filter((i) => i !== index);
  //   }, 3100);
  // }

  onMounted(() => {
    const list = scrollList.value;
    listHeight.value = list.scrollHeight;

    //startScrolling();
    let isMobile = window.innerWidth <= 768;
    list.style.animationDuration = !isMobile
      ? `${listHeight.value / 100}s`
      : "20s";
    let percent = isMobile ? "-20% 0px -30% 0px" : "-20% 0px -50% 0px";
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = tech_item.value.indexOf(entry.target);
          if (entry.isIntersecting) {
            // if (!visible_items.value.includes(index)) {
            tech_index.value = index;
            //  visible_items.value.push(index);

            //TODO: pushear la id a otro arr y con un watcher cuando ese arr tenga 4 elementos se borran esos 4 de la lista de "vistos" o buscas una forma q no se cague
            //FIXME: tratar de q quede flawless la marquesina web 1.0
            //  }
            // else {
            //   visible_items.value = visible_items.value.filter(
            //     (i) => i !== index
            //   );
            // }
          }
        });
      },
      {
        root: side_screen.value,
        threshold: 0.005,
        rootMargin: percent,
      }
    );
    tech_item.value.forEach((tech) => observer.observe(tech));
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });
</script>

<style scoped>
  @keyframes glow {
    0% {
      background-color: rgb(20 83 45);
    }

    50% {
      background-color: rgb(54, 242, 129);
      transform: translateX(-3px) translateY(3px) scale(101%);

      opacity: 0.5;
    }
    100% {
      background-color: rgb(20 83 45);
      filter: blur(20rem) hue-rotate(300deg) saturate(10) invert(0);
    }
  }

  .repeat-svg {
    width: 100vw;
    height: 100vh;
    animation: glow 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
    -webkit-mask-image: url("/assets/circuit-board.svg");
    -webkit-mask-repeat: repeat;
    -webkit-mask-size: 200px 200px; /* Tamaño de repetición del SVG */
    mask-image: url("@/assets/circuit-board.svg");
    mask-repeat: repeat;
    mask-size: 200px 200px; /* Ajustar tamaño */
  }

  @keyframes move-background {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-20px, -20px);
    }
  }

  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-195%);
    }
  }

  .animated-scroll {
    animation: scroll linear infinite;
  }

  @keyframes techGlow {
    0% {
      opacity: 1;
      text-shadow: 0 0 5px #e37eff, 0 0 5px #e37eff, 0 0 5px #e37eff,
        0 0 5px 5px #e37eff;
      color: #fefce8;
    }
    1% {
      text-shadow: 0 0 10px #e37eff, 0 0 10px #e37eff, 0 0 10px #e37eff,
        0 0 10px #e37eff;
    } /*
      20% {
        transform: translateX(-2px);
        text-shadow: 0 0 15px #e37eff, 0 0 15px #e37eff, 0 0 15px #e37eff,
          0 0 15px #e37eff;
      }
      30% {
        transform: translateX(2px);
        text-shadow: 0 0 10px #e37eff, 0 0 10px #e37eff, 0 0 10px #e37eff,
          0 0 10px #e37eff;
      }
          */
    40% {
      text-shadow: 0 0 20px #e37eff, 0 0 20px #e37eff, 0 0 20px #e37eff,
        0 0 20px #e37eff;
    }
    /*  50% {
        transform: translateX(2px);
        text-shadow: 0 0 15px #e37eff, 0 0 15px #e37eff, 0 0 15px #e37eff,
          0 0 15px #e37eff;
      }
      60% {
        transform: translateX(-2px);
        text-shadow: 0 0 20px #e37eff, 0 0 20px #e37eff, 0 0 20px #e37eff,
          0 0 20px #e37eff;
      }
      70% {
        transform: translateX(2px);
        text-shadow: 0 0 10px #e37eff, 0 0 10px #e37eff, 0 0 10px #e37eff,
          0 0 10px #e37eff;
      }
      80% {
        transform: translateX(-2px);
        text-shadow: 0 0 20px #e37eff, 0 0 20px #e37eff, 0 0 20px #e37eff,
          0 0 20px #e37eff;

      90% {
        transform: translateX(2px);
        text-shadow: 0 0 15px #e37eff, 0 0 15px #e37eff, 0 0 15px #e37eff,
          0 0 15px #e37eff;
      }
  */
    95% {
      text-shadow: 0 0 20px #de99f17d, 0 0 20px #e37eff, 0 0 20px #e37eff,
        0 0 20px #e37eff;
    }

    100% {
      text-shadow: none;
      color: #fefce8;
    }
  }

  .animTech {
    animation: techGlow 1.5s reverse;
  }
</style>
