<template lang="">
  <div
    class="bg-secondary-content w-full motion-duration-500 motion-blur-in-3xl motion-opacity-in-0 motion-ease-in-quart"
  >
    <div
      class="carousel carousel-center rounded-box w-screen h-auto opacity-75 relative crt overflow-x-hidden"
    >
      <div
        :class="[
          'carousel-item w-full h-full  video-container overflow-y-hidden overflow-x-hidden object-contain',
          currentIndex == 0 ? 'block' : 'hidden',
        ]"
      >
        <video
          id="video1"
          :class="[
            'w-screen  object-cover object-left  lg:object-center h-screen motion-ease-in-out  motion-duration-300 ',
            currentIndex == 0 && !changing
              ? 'motion-translate-x-in-150'
              : '-motion-translate-x-out-150',
          ]"
          muted
          playsinline
          poster="@assets/whitenoise.gif"
          @ended="handleVideoEnd(0)"
        >
          <source src="@/assets/videos/console.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento <code>video</code>.
        </video>
      </div>
      <div
        v-for="(img, index) in images"
        :class="[
          'carousel-item w-full video-container',
          currentIndex === index + 1 ? 'block' : 'hidden',
        ]"
      >
        <img
          :src="img.route"
          alt=""
          :class="[
            'w-screen object-cover object-center h-screen motion-ease-in-out  motion-duration-300 ',
            currentIndex == index + 1 && changing
              ? 'motion-translate-x-in-150'
              : '-motion-translate-x-out-150',
          ]"
        />
      </div>
      <!-- <div
        :class="[
          'carousel-item w-full video-container',
          currentIndex === 1 ? 'block' : 'hidden',
        ]"
      >
        <video
          id="video2"
          :class="[
            'w-screen object-cover object-center h-screen motion-ease-in-out  motion-duration-300 ',
            currentIndex == 1 && !changing
              ? 'motion-translate-x-in-150'
              : '-motion-translate-x-out-150',
          ]"
          muted
          playsinline
          poster="@assets/whitenoise.gif"
          @ended="handleVideoEnd(1)"
        >
          <source src="@/assets/videos/api.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento <code>video</code>.
        </video>
      </div>
      <div
        :class="[
          'carousel-item w-full video-container',
          currentIndex === 2 ? 'block' : 'hidden',
        ]"
      >
        <video
          id="video3"
          :class="[
            'w-screen object-cover object-center h-screen motion-ease-in-out  motion-duration-300 ',
            currentIndex == 2 && !changing
              ? 'motion-translate-x-in-150'
              : '-motion-translate-x-out-150',
          ]"
          muted
          playsinline
          poster="@assets/whitenoise.gif"
          @ended="handleVideoEnd(2)"
        >
          <source src="@/assets/videos/client.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento <code>video</code>.
        </video>
      </div> -->
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted, watch } from "vue";

  const props = defineProps(["isVisible"]);

  const emit = defineEmits(["carousel_init"]);

  const currentIndex = ref(0);
  const changing = ref(false);

  const video1 = ref();
  // const video2 = ref();
  // const video3 = ref();

  //const videos = ref([video2, video3]);

  const images = ref([
    { route: "/carousel1.webp" },
    { route: "/carousel2.webp" },
    { route: "/carousel3.webp" },
    { route: "/carousel4.webp" },
  ]);

  function handleVideoEnd(index) {
    changing.value = true;

    setTimeout(() => {
      currentIndex.value = index === 4 || index > 4 ? 0 : index + 1;
      if (index === 4) {
        video1.value.playbackRate = 1.5;
        video1.value.play();
      }
      // if (index === 0) {
      //   video2.value.playbackRate = 4;
      //   video2.value.play();
      // }
      // if (index === 1) {
      //   video3.value.playbackRate = 4;
      //   video3.value.play();
      // }

      changing.value = false;
    }, 250);
  }

  watch(
    () => currentIndex.value,
    async (newValue, oldValue) => {
      if (newValue > 0 && props.isVisible) {
        changing.value = true;
        setTimeout(() => {
          currentIndex.value += 1;
          changing.value = false;
          if (currentIndex.value == 4) {
            setTimeout(() => {
              handleVideoEnd(4);
            }, 3000);
          }
        }, 3000);
      }
    }
  );

  onMounted(() => {
    setTimeout(() => {
      console.log("init");
      emit("carousel_init");
    }, 1000);

    video1.value = document.getElementById("video1");
    // video2.value = document.getElementById("video2");
    // video3.value = document.getElementById("video3");

    video1.value.playbackRate = 1.5;

    video1.value.play();
  });
</script>
<style></style>
