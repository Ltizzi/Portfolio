<template lang="">
  <div>
    <div
      v-for="item in list"
      :key="list"
      class="flex flex-col justify-center items-center text-center gap-2 w-full"
    >
      <h1
        class="text-4xl font-bold text-yellow-50"
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
        {{ item.mainTitle }}
      </h1>
      <div
        class="flex 2xl:flex-row 2xl:flex-wrap flex-col gap-5 justify-center my-5"
      >
        <div v-for="skill in item.skills" :key="skill" class="2xl:w-2/5">
          <SkillsSubList
            :title="skill.title"
            :techs="skill.techs"
            v-show="!isMobile"
            v-motion
            :initial="{ opacity: 0, x: -500, scale: 0.2 }"
            :visible="{
              opacity: 1,
              x: 0,
              scale: 1,
              transition: { type: 'bounce', stiffness: '50', delay: 100 },
            }"
            :delay="1000"
          />
          <SkillsSubList
            :title="skill.title"
            :techs="skill.techs"
            v-show="isMobile"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { reactive, ref } from "vue";
  import SkillsSubList from "./SkillsSubList.vue";
  import EventBus from "../../common/EventBus";

  const isMobile = ref(false);

  const list = reactive([
    {
      mainTitle: "Hard Skills",
      skills: [
        {
          title: "Languages",
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
    },
    {
      mainTitle: "Soft Skills",
      skills: [],
    },
  ]);

  EventBus.on("mobile", () => {
    isMobile.value = true;
  });

  EventBus.on("notMobile", () => {
    isMobile.value = false;
  });
</script>
