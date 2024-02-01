<template lang="">
  <div class="h-screen backCode">
    <Presence>
      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 100 }"
        :transition="{ duration: 2, easing: 'ease-in-out' }"
        @motioncomplete="animFinished(1)"
        v-show="startAnim"
      >
        <div
          class="h-screen w-full bg-gradient-to-br from-slate-900 to-purple-400 py-20 flex items-center justify-center"
        >
          <div
            class="mx-auto 2xl:w-2/3 2xl:px-16 2xl:py-14 py-5 w-full bg-opacity-75 bg-slate-50 align-middle shadow-2xl shadow-gray-950 flex flex-col justify-around rounded-3xl"
            v-show="anims.first"
          >
            <div class="flex flex-row gap-5">
              <div class="2xl:mx-10 mx-5 2xl:w-2/3 w-2/4 text-start">
                <Motion
                  :initial="{ x: -2000 }"
                  :animate="{ x: 0 }"
                  :transition="{ duration: 1, easing: 'ease-in-out' }"
                  @motioncomplete="animFinished(3)"
                  v-if="anims.second"
                >
                  <h1
                    class="font-extrabold text-violet-950 2xl:text-5xl 2xl:w-full w-80 text-4xl"
                  >
                    Hello, my name is Leonardo Terlizzi, and I am a Web
                    Developer.
                  </h1>
                </Motion>

                <Motion
                  :initial="{ y: 2000 }"
                  :animate="{ y: 0 }"
                  :transition="{ duration: 1, easing: 'ease-in-out' }"
                  @motioncomplete="animFinished(4)"
                  v-if="anims.third"
                >
                  <p class="2xl:text-2xl 2xl:w-full w-72 2xl:my-10 my-5">
                    I learned to code primarily through self-teaching and
                    various courses (Argentina Programa, Oracle Next Education,
                    Free Code Camp, etc.). Currently, I'm working as a freelance
                    programmer.
                  </p>
                </Motion>
              </div>
              <Motion
                :initial="{ x: 200, y: 50, scale: 0 }"
                :animate="{ x: 0, y: 0, scale: 1 }"
                :transition="{ duration: 1, easing: 'ease-in-out' }"
                @motioncomplete="animFinished(2)"
                v-if="anims.first"
              >
                <img
                  src="../assets/img/fotoperfil.jpg"
                  class="2xl:w-80 2xl:mt-0 rounded-full 2xl:h-80 object-cover w-40 h-80 mt-1 2xl:ml-0 ml-9"
                  alt=""
                />
              </Motion>
            </div>
            <div class="h-14">
              <Motion
                :initial="{ y: 100, opacity: 0, scale: 0 }"
                :animate="{ opacity: 1, y: 0, scale: 1 }"
                :transition="{ duration: 1, easing: 'ease-in-out' }"
                @motioncomplete="animFinished(5)"
                v-if="anims.four"
              >
                <div class="flex flex-row justify-around gap-5 text-4xl w-3/5">
                  <a
                    class="w-10 h-10"
                    href="https://github.com/Ltizzi"
                    target="_blank"
                    v-motion
                    :initial="{ scale: 1 }"
                    :hovered="{
                      scale: 1.5,
                      transition: {
                        repeat: 1,
                        repeatType: 'mirror',
                      },
                    }"
                    :delay="2000"
                  >
                    <font-awesome-icon icon="fa-brands fa-github" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lterlizzi/"
                    target="_blank"
                    v-motion
                    :initial="{ scale: 1 }"
                    :hovered="{
                      scale: 1.5,
                      transition: {
                        repeat: 1,
                        repeatType: 'mirror',
                      },
                    }"
                    :delay="2000"
                  >
                    <font-awesome-icon icon="fa-brands fa-linkedin" /> </a
                  ><a
                    href="mailto:terlizzileonardo@gmail.com"
                    target="_blank"
                    v-motion
                    :initial="{ scale: 1 }"
                    :hovered="{
                      scale: 1.5,
                      transition: {
                        repeat: 1,
                        repeatType: 'mirror',
                      },
                    }"
                    :delay="2000"
                  >
                    <font-awesome-icon icon="fa-solid fa-envelope" /> </a
                  ><a
                    href="./assets/Terlizzi Leonardo CV.pdf"
                    target="_blank"
                    v-motion
                    :initial="{ scale: 1 }"
                    :hovered="{
                      scale: 1.5,
                      transition: {
                        repeat: 1,
                        repeatType: 'mirror',
                      },
                    }"
                    :delay="2000"
                  >
                    <font-awesome-icon icon="fa-solid fa-file-pdf" />
                  </a>
                </div>
              </Motion>
            </div>
          </div>
        </div>
      </Motion>
    </Presence>
  </div>
</template>
<script setup>
  import { Motion, Presence } from "motion/vue";
  import { reactive, onMounted, ref } from "vue";
  import EventBus from "../common/EventBus";

  const startAnim = ref(false);

  let anims = reactive({
    first: false,
    second: false,
    third: false,
    four: false,
    five: false,
  });

  function animFinished(num) {
    if (num == 1) anims.first = true;
    if (num == 2) anims.second = true;
    if (num == 3) anims.third = true;
    if (num == 4) anims.four = true;
    if (num == 5) {
      anims.five = true;
      EventBus.emit("loadingFinished");
    }
  }

  onMounted(() => {
    setTimeout(() => {
      startAnim.value = true;
    }, 1500);
  });
</script>

<style></style>
