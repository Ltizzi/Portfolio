<template>
  <ul class="flex flex-row flex-wrap justify-evenly p-4">
    <li
      class="proyect__item pt-4 px-2 pb-10 w-56 object-contain bg-no-repeat leading-6 flex flex-col justify-center duration-500 mb-10 mr-12"
      v-for="project in projects"
      :key="project"
    >
      <!--  :data="project" -->
      <base-project-card
        :foto="project.foto"
        :fotoTxt="project.fotoTxt"
        :title="project.title"
        :github="project.github"
        :demo="project.demo"
        :about="project.about"
        :techs="project.techs"
      >
      </base-project-card>
    </li>
  </ul>
</template>
<script setup>
  import { reactive } from "vue";
  import BaseProjectCard from "./BaseProjectCard.vue";

  const projects = reactive([
    {
      title: "Craze",
      foto: "craze.png",
      fotoTxt: "Ver Imagen",
      github: "https://github.com/Ltizzi/Craze",
      demo: "https://craze-test.web.app/",
      about: "Red social de memes. Inspirada en twitter, con creador de memes.",
      techs: [
        { icon: "fa-vuejs", text: "Vue", class: "" },
        { icon: "fa-node", text: "Express", class: "" },
        { icon: "fa-database", text: "MongoDB", class: "" },
      ],
    },
    {
      title: "Portfolio",
      foto: "portfolio.png",
      fotoTxt: "Ver Imagen",
      github: "https://github.com/Ltizzi/Portfolio-frontend",
      demo: "https://ltizzi-portfolio.web.app/",
      about:
        "Fullstack web application. Proyecto integrador de Argentina Programa. CRUD, auntenticación con JWT. ",
      techs: [
        {
          icon: "fa-brands fa-angular ",
          text: "Angular",
          class: "angular-icon",
        },
        {
          icon: "fa-solid fa-leaf  ",
          text: "Spring",
          class: "spring-icon",
        },
        {
          icon: "fa-brands fa-java",
          text: "Java",
          class: "java-icon",
        },
        {
          icon: "fa-solid fa-database",
          text: "MySQL",
          class: "mysql-icon",
        },
      ],
    },
    {
      title: "E-Shop",
      foto: "2.png",
      fotoTxt: "Ver imagen",
      github: "https://github.com/Ltizzi/e-shop-front",
      demo: "https://e-shop-ltizzi.web.app/",
      about:
        "E-commerce con registro, autenticación, carrito, filtro de productos, registro de compras y manejo de stocks. ",
      techs: [
        {
          icon: "fa-brands fa-angular",
          text: "Angular",
          class: "angular-icon",
        },
        {
          icon: "fa-solid fa-leaf",
          text: "Spring",
          class: "spring-icon",
        },
        {
          icon: "fa-brands fa-java",
          text: "Java",
          class: "java-icon",
        },
        {
          icon: "fa-solid fa-database ",
          text: "MySQL",
          class: "mysql-icon",
        },
      ],
    },
    {
      title: "Encriptador",
      foto: "encriptador.png",
      fotoTxt: "Ver imagen",
      github: "https://github.com/Ltizzi/Alura-Challenge-N-1",
      demo: "https://ltizzi.github.io/Alura-Challenge-N-1/",
      about:
        "Encriptador realizado para el primer Challenge de Alura Latam. Hecho con HTML, CSS y JavaScript plano",
      techs: [
        {
          icon: "fa-brands fa-html5 ",
          text: "HTML",
          class: "html-icon",
        },
        {
          icon: "fa-brands fa-css3-alt ",
          text: "CSS",
          class: "css-icon",
        },
        {
          icon: "fa-brands fa-js ",
          text: "JavaScript",
          class: "js-icon",
        },
      ],
    },
    {
      title: "Ahorcado",
      foto: "ahorcado.png",
      fotoTxt: "Ver imagen",
      github: "https://github.com/Ltizzi/Alura-Challenge-N-2",
      demo: "https://ltizzi.github.io/Alura-Challenge-N-2/",
      about:
        "Simple juego de ahorcado realizado para el segundo desafío de Alura Latam. Uso de canvas y manipulación de dom dinámica",
      techs: [
        {
          icon: "fa-brands fa-html5 ",
          text: "HTML",
          class: "html-icon",
        },
        {
          icon: "fa-brands fa-css3-alt ",
          text: "CSS",
          class: "css-icon",
        },
        {
          icon: "fa-brands fa-js ",
          text: "JavaScript",
          class: "js-icon",
        },
      ],
    },
    {
      title: "Alura Geek",
      foto: "alurageek.png",
      fotoTxt: "Ver imagen",
      github: "https://github.com/Ltizzi/Alura-Challenge-E-commerce",
      demo: "https://ltizzi.github.io/Alura-Challenge-E-commerce/",
      about:
        "Página de e-commerce realizada para el tercer desafío de Alura Latam.",
      techs: [
        {
          icon: "fa-brands fa-html5 ",
          text: "HTML",
          class: "html-icon",
        },
        {
          icon: "fa-brands fa-css3-alt ",
          text: "CSS",
          class: "css-icon",
        },
        {
          icon: "fa-brands fa-js ",
          text: "JavaScript",
          class: "js-icon",
        },
        {
          icon: "fa-solid fa-leaf ",
          text: "Spring",
          class: "spring-icon",
        },
        {
          icon: "fa-brands fa-java ",
          text: "Java",
          class: "java-icon",
        },
        {
          icon: "fa-solid fa-database ",
          text: "MySQL",
          class: "mysql-icon",
        },
      ],
    },
  ]);
</script>
