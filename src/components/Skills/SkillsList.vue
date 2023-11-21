<template lang="">
  <div>
    <div
      v-for="item in list"
      :key="list"
      class="flex flex-col justify-center items-center text-center gap-2 w-full"
    >
      <h1 class="text-4xl font-bold text-yellow-50">{{ item.mainTitle }}</h1>
      <div class="flex flex-row flex-wrap gap-5 justify-center my-5">
        <div v-for="skill in item.skills" :key="skill" class="w-2/5">
          <SkillsSubList :title="skill.title" :techs="skill.techs" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { reactive } from "vue";
  import SkillsSubList from "./SkillsSubList.vue";

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
</script>
