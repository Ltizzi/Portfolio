<template>
  <div class="bg-yellow-50">
    <div
      class="flex flex-col justify-between py-8 px-12 my-12 mx-auto w-4/5 h-auto bg-gray-50 shadow-xl shadow-gray-700"
      v-for="edu in edus"
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

  const edus = ref([
    {
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
  ]);
</script>
<style lang=""></style>
