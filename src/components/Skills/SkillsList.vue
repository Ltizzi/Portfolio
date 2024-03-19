<template>
  <div>
    <div
      class="flex flex-col justify-center items-center text-center gap-2 w-full"
    >
      <h1
        class="text-4xl font-bold text-yellow-50 lg:text-3xl lg:-mt-2"
        v-motion
        :initial="{ opacity: 0, x: 200, scale: 0.2 }"
        :visible="{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { type: 'bounce', stiffness: '100', delay: 100 },
        }"
        :delay="500"
      >
        {{ list.mainTitle }}
      </h1>
      <div
        class="flex 2xl:flex-row 2xl:flex-wrap lg:flex-row lg:flex-wrap lg:-mt-2 flex-col gap-5 justify-center my-5z"
      >
        <!-- v-for="skill in list.skills" -->
        <div
          class="2xl:w-2/5 lg:w-2/5"
          v-show="!isMobile"
          v-for="skill in list.skills"
        >
          <SkillsSubList
            :title="skill.title"
            :techs="skill.techs"
            v-motion
            :initial="{ opacity: 0, x: -300, scale: 0.2 }"
            :visible="{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                type: 'bounce',
                stiffness: '50',
              },
            }"
            :delay="skill.delay"
            :transition="{ onComplete: skill.delay }"
          />
        </div>

        <div v-for="skill in list.skills" class="2xl:w-2/5" v-show="isMobile">
          <SkillsSubList :title="skill.title" :techs="skill.techs" />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center text-center gap-2 w-full"
    >
      <h1
        class="text-4xl font-bold text-yellow-50 lg:text-3xl lg:-mb-5"
        v-motion
        :initial="{ opacity: 0, x: 200, scale: 0.2 }"
        :visible="{
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { type: 'bounce', stiffness: '100', delay: 100 },
        }"
        :delay="3500"
      >
        {{ softList.mainTitle }}
      </h1>
      <div
        class="flex 2xl:flex-row 2xl:flex-wrap flex-col gap-5 justify-center my-5"
      >
        <div
          v-for="skill in softList.skills"
          :key="skill"
          class="2xl:w-full"
          v-show="!isMobile"
        >
          <SoftSkillsList
            :techs="skill.techs"
            v-motion
            :initial="{ opacity: 0, x: -500, scale: 0.2 }"
            :visible="{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: {
                type: 'bounce',
                stiffness: '50',
              },
            }"
            :delay="softList.delay"
            :transition="{ onComplete: skill.delay }"
          />
        </div>
        <div
          v-for="skill in softList.skills"
          :key="skill"
          class="2xl:w-full mx-10"
          v-show="isMobile"
        >
          <SoftSkillsList :techs="skill.techs" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { computed, ref } from "vue";
  import SkillsSubList from "./SkillsSubList.vue";
  import SoftSkillsList from "./SoftSkillsList.vue";
  import EventBus from "../../common/EventBus";

  const isMobile = ref(false);

  const delayTime = ref(1000);

  const moarTime = computed(() => {
    delayTime.value += 500;
    return delayTime.value + 500;
  });

  // function moarTime() {
  //   delayTime.value += 500;
  // }

  const list = {
    mainTitle: "Hard Skills",
    skills: [
      {
        title: "Languages",
        delay: 500,
        techs: [
          {
            class: "html-icon",
            icon: "fa-brands fa-html5",
            text: "HTML",
          },
          {
            class: "css-icon",
            icon: "fa-brands fa-css3-alt",
            text: "CSS",
          },
          { class: "js-icon", icon: "fa-brands fa-js", text: "Javascript" },
          { class: "ts-icon", icon: false, text: "Typecript" },
          {
            class: "java-icon",
            icon: "fa-brands fa-java",
            text: "Java",
          },
        ],
      },
      {
        title: "Frontend Frameworks",
        delay: 1000,
        techs: [
          {
            class: "angular-icon",
            icon: "fa-brands fa-angular",
            text: "Angular",
          },
          { class: "vue-icon", icon: "fa-brands fa-vuejs", text: "VueJs" },
          {
            class: "tailwind-icon",
            icon: false,
            text: "TailwindCss",
          },
          {
            class: "bootstrap-icon",
            icon: false,
            text: "Bootstrap",
          },
        ],
      },
      {
        title: "Backend Frameworks",
        delay: 1500,
        techs: [
          { class: "node-icon", icon: "fa-brands fa-node", text: "NodeJs" },
          { class: "express-icon", icon: false, text: "ExpressJS" },
          {
            class: "spring-icon",
            icon: "fa-solid fa-leaf",
            text: "Spring",
          },
        ],
      },
      {
        title: "Databases",
        delay: 2000,
        techs: [
          {
            class: "mysql-icon",
            icon: false,
            text: "Mysql",
          },
          {
            class: "mongo-icon",
            icon: false,
            text: "MongoDB",
          },
          {
            class: "postgresql-icon",
            icon: false,
            text: "PostgreSQL",
          },
        ],
      },
    ],
  };
  const softList = {
    mainTitle: "Soft Skills",
    delay: 2500,
    skills: [
      {
        techs: [
          {
            class: "skills__icon",
            icon: "fa-solid fa-image-portrait",
            text: "Selftaught",
            isSoft: true,
            bgcolor: "#f472b6",
          },
          {
            class: "skills__icon",
            icon: "fa-solid fa-palette",
            text: "Creative",
            isSoft: true,
            bgcolor: "#ec4899",
          },
          {
            class: "skills__icon",
            icon: "fa-solid fa-comment",
            text: "Communication",
            isSoft: true,
            bgcolor: "#db2777",
          },
          {
            class: "skills__icon",
            icon: "fa-solid fa-hand-holding-hand",
            text: "Team work",
            isSoft: true,
            bgcolor: "#be185d",
          },
          {
            class: "skills__icon",
            icon: "fa-solid fa-lightbulb",
            text: "Decisive",
            isSoft: true,
            bgcolor: "#9d174d",
          },
        ],
      },
    ],
  };
  EventBus.on("mobile", () => {
    isMobile.value = true;
  });

  EventBus.on("notMobile", () => {
    isMobile.value = false;
  });
</script>
