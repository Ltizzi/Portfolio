<template>
  <div class="bg-gradient-to-br from-sky-500 to-teal-200 h-full pb-10 pt-16">
    <h1 class="text-6xl font-extrabold text-center pb-10 text-teal-50">
      Certifications
    </h1>
    <div
      class="flex flex-col justify-between py-8 px-12 mb-10 mx-auto 2xl:w-4/5 w-11/12 h-auto bg-gray-50 shadow-xl shadow-gray-700 rounded-3xl"
      v-for="edu in edus"
      v-show="!isMobile"
      v-motion
      :initial="{ scale: 0.5, x: -500, opacity: 0 }"
      :visibleOnce="{ scale: 1, x: 0, opacity: 1 }"
      :delay="1000"
    >
      <EduCard
        :title="edu.title"
        :institucion="edu.institucion"
        :link1="edu.link1"
        :link2="edu.link2"
        :imagen="edu.imagen"
        :imgAlt="edu.imgAlt"
        :about="edu.about"
        :rangeTime="edu.rangeTime"
      />
    </div>
    <div
      class="flex flex-col justify-between py-8 px-12 mb-10 mx-auto 2xl:w-4/5 w-11/12 h-auto bg-gray-50 shadow-xl shadow-gray-700 rounded-3xl"
      v-for="edu in edus"
      v-show="isMobile"
    >
      <EduCard
        :title="edu.title"
        :institucion="edu.institucion"
        :link1="edu.link1"
        :link2="edu.link2"
        :imagen="edu.imagen"
        :imgAlt="edu.imgAlt"
        :about="edu.about"
        :rangeTime="edu.rangeTime"
      />
    </div>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import EduCard from "../components/Edu/EduCard.vue";
  import EventBus from "../common/EventBus";

  const isMobile = ref(false);

  /*  {
            title: "Programador Fullstack Jr",
            institucion: "Argentina Programa",
            link1: "",
            link2: "https://argentinaprograma.inti.gob.ar/",
            imagen: "argprog.jpg",
            imgAlt: "logo argentina programa",
            about:
              "Programa del gobierno Argentino enfocado en la educación de programadores full stack junior. HTML, CSS, Typescript, Angular, MYSQL, Java, Spring Boot, POO, patrones de diseño, uso de Github, SCRUM. Principios de seguridad informática y DevOps.",
            rangeTime: "2021-2022",
          },
          {
            title: "Curso de Introducción al Desarrollo Web: HTML y CSS",
            institucion: "Google Activate",
            link1: "",
            link2:
              "https://learndigital.withgoogle.com/activate/course/web-development-I",
            imagen: "googleActivate.jpg",
            imgAlt: "Carátula del curso",
            about:
              "Curso introductorio a las tecnologías detrás de la web y al lenguaje de marcado HTML",
            rangeTime: "2021",
          },
          {
            title: "Responsive Web Design",
            institucion: "FreeCodeCamp",
            link1: "",
            link2: "https://www.freecodecamp.org/",
            imagen: "freecodecamp.png",
            imgAlt: "Logo de FreeCodeCamp",
            about: "Introducción a HTML y CSS.",
            rangeTime: "2022",
          },
          {
            title: "JavaScript Algorithms and Data",
            institucion: "FreeCodeCamp",
            link1: "",
            link2: "https://www.freecodecamp.org/",
            imagen: "freecodecamp.png",
            imgAlt: "logo de FreeCodeCamp",
            about:
              "Curso online de Javascript, desde lo básico al desarrollo de algoritmos de dificultad intermedia.",
            rangeTime: "2022",
          },
          {
            title: "Oracle ONE Next Education",
            institucion: "Alura Latam",
            link1: "",
            link2: "https://www.aluracursos.com/",
            imagen: "oracleonealura.jpg",
            imgAlt: "Logos de Oracle y Alura",
            about:
              " Ruta de principios de lógica de programación, Desarrollador Frontend (HTML, CSS, JS), Desarrollador Backend (Java). También se introduce a GIT y metodologías ágiles.",
            rangeTime: "2022 - en curso",
          },
      */
  const edus = ref([
    {
      title: "Oracle ONE Next Education",
      institucion: "Alura Latam",
      link1: "",
      link2: "https://www.aluracursos.com/",
      imagen: "oracleonealura.jpg",
      imgAlt: "Logos de Oracle y Alura",
      about:
        "Path of programming logic principles, Frontend Developer (HTML, CSS, JS), Backend Developer (Java). Also introduces GIT and agile methodologies.",
      rangeTime: "2022 - 2023",
    },
    {
      title: "Responsive Web Design",
      institucion: "FreeCodeCamp",
      link1: "",
      link2: "https://www.freecodecamp.org/",
      imagen: "freecodecamp.png",
      imgAlt: "Logo de FreeCodeCamp",
      about: "Introduction to HTML and CSS.",
      rangeTime: "2022",
    },
    {
      title: "JavaScript Algorithms and Data",
      institucion: "FreeCodeCamp",
      link1: "",
      link2: "https://www.freecodecamp.org/",
      imagen: "freecodecamp.png",
      imgAlt: "logo de FreeCodeCamp",
      about:
        "Online course on JavaScript, covering the basics to the development of intermediate-level algorithms.",
      rangeTime: "2022",
    },
    {
      title: "Fullstack Developer Jr",
      institucion: "Argentina Programa",
      link1: "",
      link2: "https://argentinaprograma.inti.gob.ar/",
      imagen: "argprog.jpg",
      imgAlt: "logo argentina programa",
      about:
        "Government program in Argentina focused on the education of junior full-stack programmers. HTML, CSS, Typescript, Angular, MYSQL, Java, Spring Boot, Object-Oriented Programming (OOP), design patterns, use of Github, SCRUM. Principles of computer security and DevOps.",
      rangeTime: "2021-2022",
    },
    {
      title: "Introduction to Web Development Course: HTML and CSS.",
      institucion: "Google Activate",
      link1: "",
      link2:
        "https://learndigital.withgoogle.com/activate/course/web-development-I",
      imagen: "googleActivate.jpg",
      imgAlt: "Carátula del curso",
      about:
        "Introductory course to the technologies behind the web and the markup language HTML.",
      rangeTime: "2021",
    },
  ]);

  EventBus.on("mobile", () => {
    isMobile.value = true;
  });

  EventBus.on("notMobile", () => {
    isMobile.value = false;
  });
</script>
<style lang=""></style>
