<template>
  <ul
    class="flex flex-row 2xl:ml-0 ml-12 lg:ml-0 lg:justify-evenly lg:-mt-10 lg:gap-0 flex-wrap 2xl:justify-evenly justify-center 2xl:p-4"
  >
    <li
      class="proyect__item pt-4 px-2 pb-10 w-56 h-fit bg-no-repeat leading-6 flex flex-col justify-center duration-500 mb-10 mr-12 lg:mr-0"
      v-for="project in projects"
      v-show="!isMobile"
      v-motion
      :initial="{ scale: 0, opacity: 0 }"
      :visible="{ scale: 1, opacity: 1 }"
      :hovered="{
        scale: 1.2,
        transition: {
          repeat: 1,
          repeatType: 'mirror',
        },
      }"
      :delay="delayTime"
      :transition="{
        onComplete: moarTime(),
      }"
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
    <!-- <li v-for="project in projects" v-show="isMobile">

    </li> -->
  </ul>
  <ul
    class="flex flex-row 2xl:ml-0 ml-12 flex-wrap 2xl:justify-evenly justify-center 2xl:p-4"
    v-show="isMobile"
  >
    <li
      class="proyect__item pt-4 px-2 pb-10 w-56 h-fit bg-no-repeat leading-6 flex flex-col justify-center duration-500 mb-10 mr-12"
      v-for="project in projects"
    >
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
  import { reactive, ref } from "vue";
  import BaseProjectCard from "./BaseProjectCard.vue";
  import EventBus from "../../common/EventBus";

  const isMobile = ref(false);
  const delayTime = ref(1000);

  function moarTime() {
    if (!isMobile.value) delayTime.value += 200;
  }

  const projects = reactive([
    {
      title: "Craze",

      foto: "craze.png",
      fotoTxt: "Ver Imagen",
      github: "https://github.com/Ltizzi/Craze",
      demo: "https://craze-test.web.app/",
      about:
        "Meme-based social network inspired by Twitter, featuring a meme creator.",
      techs: [
        { icon: "fa-brands fa-vuejs", text: "Vue", class: "vue-icon" },
        { icon: "fa-brands fa-node", text: "Node", class: "node-icon" },
        { icon: false, text: "Express", class: "express-icon-lil" },
        { icon: false, text: "MongoDB", class: "mongo-icon-lil" },
      ],
    },
    {
      title: "AngularCalc",

      foto: "calc.png",
      fotoTxt: "Ver imagen",
      github: "https://github.com/Ltizzi/AngularCalc",
      demo: "",
      about: "Simple calculator made in Angular and TailwindCss",
      techs: [
        {
          icon: "fa-brands fa-angular",
          text: "Angular",
          class: "angular-icon",
        },
      ],
    },
    // {
    //   title: "Portfolio",
    //   foto: "portfolio.png",
    //   fotoTxt: "Ver Imagen",
    //   github: "https://github.com/Ltizzi/Portfolio-frontend",
    //   demo: "https://ltizzi-portfolio.web.app/",
    //   about:
    //     "Full-stack web application. Integrative project for the Argentina Program. CRUD operations, authentication with JWT.",
    //   techs: [
    //     {
    //       icon: "fa-brands fa-angular ",
    //       text: "Angular",
    //       class: "angular-icon",
    //     },
    //     {
    //       icon: "fa-solid fa-leaf  ",
    //       text: "Spring",
    //       class: "spring-icon",
    //     },
    //     {
    //       icon: "fa-brands fa-java",
    //       text: "Java",
    //       class: "java-icon",
    //     },
    //     {
    //       icon: false,
    //       text: "MySQL",
    //       class: "mysql-icon-lil",
    //     },
    //   ],
    // },
    {
      title: "E-Commerce",

      foto: "e-commerce.png",
      fotoTxt: "Ver imagen",
      github: "https://github.com/Ltizzi/e-shop-front",
      demo: "https://e-shop-ltizzi.web.app/",
      about:
        "Modern e-commerce with oauth2 with google, api, client, admin dashboard",
      techs: [
        {
          icon: false,
          text: "TypeScript",
          class: "ts-icon-lil",
        },
        {
          icon: "fa-brands fa-angular",
          text: "Angular",
          class: "angular-icon",
        },
        {
          icon: false,
          text: "TailwindCSS",
          class: "tailwind-icon-lil",
        },
        {
          icon: false,
          text: "ExpressJS",
          class: "express-icon-lil",
        },

        {
          icon: false,
          text: "PostgreSQL",
          class: "postgresql-icon-lil",
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
        "E-commerce with user registration, authentication, shopping cart, product filtering, purchase history, and inventory management.",
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
          icon: false,
          text: "MySQL",
          class: "mysql-icon-lil",
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
        "Encryptor created for the first Alura Latam Challenge. Developed using HTML, CSS, and plain JavaScript.",
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
        "Simple hangman game created for the second Alura Latam Challenge. Utilizes canvas and dynamic DOM manipulation.",
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
      about: "E-commerce website created for the third Alura Latam Challenge.",
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
          icon: false,
          text: "MySQL",
          class: "mysql-icon-lil",
        },
      ],
    },
  ]);

  EventBus.on("mobile", () => {
    isMobile.value = true;
  });

  EventBus.on("notMobile", () => {
    isMobile.value = false;
  });
</script>
