<template lang="">
  <div class="h-screen backCode">
    <Presence>
      <Motion
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 100 }"
        :transition="{ duration: 4, easing: 'ease-in-out' }"
        @motioncomplete="animFinished(1)"
        v-show="startAnim"
      >
        <div
          class="h-screen w-full bg-gradient-to-br from-purple-500 to-purple-300 py-20 flex items-center justify-center"
        >
          <div
            class="mx-auto w-2/3 px-16 py-14 bg-opacity-75 bg-slate-50 align-middle shadow-2xl shadow-gray-950 flex flex-row justify-around rounded-3xl"
            v-show="anims.first"
          >
            <div class="mx-10 w-2/3 text-start">
              <Motion
                :initial="{ x: -2000 }"
                :animate="{ x: 0 }"
                :transition="{ duration: 1, easing: 'ease-in-out' }"
                @motioncomplete="animFinished(3)"
                v-if="anims.second"
              >
                <h1 class="font-extrabold text-violet-950 text-5xl">
                  Hello, my name is Leonardo Terlizzi, and I am a Web Developer.
                </h1>
              </Motion>

              <Motion
                :initial="{ y: 2000 }"
                :animate="{ y: 0 }"
                :transition="{ duration: 1, easing: 'ease-in-out' }"
                @motioncomplete="animFinished(4)"
                v-if="anims.third"
              >
                <p class="text-2xl my-10">
                  I learned to code primarily through self-teaching and various
                  courses (Argentina Programa, Oracle Next Education, Free Code
                  Camp, etc.). Currently, I'm working as a freelance programmer.
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
                class="w-80 rounded-full h-80 object-cover"
                alt=""
              />
            </Motion>
          </div>
        </div>
      </Motion>
    </Presence>
  </div>
</template>
<script setup>
  import { Motion, Presence } from "motion/vue";
  import { reactive, onMounted, ref } from "vue";

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
    if (num == 5) anims.five = true;
  }

  onMounted(() => {
    setTimeout(() => {
      startAnim.value = true;
    }, 1000);
  });
</script>

<style></style>
