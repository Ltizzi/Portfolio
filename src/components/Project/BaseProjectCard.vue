<template lang="">
  <slot>
    <div
      class="bg-yellow-50 pt-4 pb-6 h-96 w-52 -ml-0.5 flex flex-col rounded-2xl justify-evenly"
    >
      <img
        :src="`./assets/img/${foto}`"
        :title="fotoTxt"
        class="w-11/12 h-40 my-0 mx-auto object-fill pb-4"
      />
      <div>
        <h4 class="text-3xl font-bold text-indigo-400 text-center pb-2">
          {{ title }}
        </h4>
        <h5
          class="text-base font-bold text-indigo-400 text-center mx-1 pb-1 leading-4"
        >
          {{ about }}
        </h5>
      </div>

      <ul
        class="list-none flex flex-row flex-wrap justify-stretch ml-2 gap-2 w-full my-2"
      >
        <li
          class="text-2xl text-white hover:cursor-pointer"
          v-for="tech in techs"
          :key="tech"
          :title="tech.text"
        >
          <font-awesome-icon :icon="`${tech.icon}`" :class="`${tech.class}`" />
        </li>
      </ul>
      <ul class="flex flex-row justify-center ml-1">
        <button
          class="w-24 from-orange-300 bg-gradient-to-br via-pink-400 to-purple-400 p-1 rounded-xl border-0 mt-1 mr-1"
        >
          <font-awesome-icon
            icon="fa-brands fa-github"
            class="text-3xl font-bold text-white text-center"
          />
          <!-- <a :href="github" target="_blank" rel="noopener noreferrer"> </a> -->
        </button>
        <button
          class="w-24 from-orange-300 bg-gradient-to-br via-pink-400 to-purple-400 p-1 rounded-lg border-0 mt-1 mr-1"
        >
          <a
            :href="`${demo}`"
            class="text-lg font-bold text-white text-center no-underline"
            target="_blank"
            rel="noopener noreferrer"
            >Demo</a
          >
        </button>
      </ul>
    </div>
  </slot>
</template>
<script setup>
  import { onMounted } from "vue";

  //      <!--    -->

  const props = defineProps({
    foto: String,
    fotoTxt: String,
    title: String,
    about: String,
    techs: Array,
  });
</script>
<style>
  .angular-icon {
    background: #a6120d;
    padding: 0.6rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .spring-icon {
    background: #83c77b;
    padding: 0.6rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .java-icon {
    background: #5382a1;
    padding: 0.6rem 0.8rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .mysql-icon {
    background: #00758f;
    padding: 0.6rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }

  .database-icon {
    background: #00758f;
    padding: 0.6rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .html-icon {
    background: #e34c26;
    padding: 0.6rem 0.8rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .css-icon {
    background: #264de4;
    padding: 0.6rem 0.8rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
  .js-icon {
    background: #f0db4f;
    color: #323330;
    padding: 0.6rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }

  .node-icon {
    background: #68a063;
    color: #fff;
    padding: 0.6rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }

  .vue-icon {
    background: #42b883;
    color: #fff;
    padding: 0.6rem;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #474844;
  }
</style>
