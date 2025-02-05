<template lang="">
  <div
    class="bg-gradient-to-r from-base-300 to-success/30 bg-opacity-100 py-6 overflow-hidden"
  >
    <div
      class="flex h-screen inset-0 overflow-y-scroll crt mask-bg-radial sticky py-20"
    >
      <img
        src="@assets/server_racks.jpeg"
        class="top-0 object-cover w-full h-full -z-40 opacity-60 motion-duration-[0.6s]/opacity motion-opacity-loop-60/mirror motion-duration-[3s] motion-translate-x-loop-[0.2%] motion-translate-y-loop-[0.2%] motion-ease-in-out-quad motion-ease-spring-bouncier/opacity motion-delay-300/blur motion-blur-loop-md absolute"
        alt=""
      />
      <h1
        class="text-7xl 2xl:text-6xl font-extrabold tracking-widest mt-5 absolute top-10 left-2/4 -ml-44 leading-relax text-opacity-45 font-zendots text-success"
      >
        Tech Skills
      </h1>
      <div
        class="w-full h-full text-center text-yellow-50 px-6 2xl:px-20 text-2xl lg:text-3xl flex pb-32 flex-col gap-10 bg-opacity-0 sticky z-10 leading-relax text-opacity-85 font-extralight font-zendots tracking-tight"
      >
        <ul
          class="flex flex-col gap-3 text-4xl text-end mt-20 text-neutral overflow-y-auto w-full h-full"
        >
          <li
            v-for="(tech, index) in techs"
            ref="techItem"
            :class="[
              'motion-duration-200 text-opacity-95',
              visible_items.includes(index)
                ? 'duration-[1s] ease-in-out delay-50 transition-colors text-success motion-duration-300 motion-translate-y-loop-[0.01%] motion-translate-x-loop-[0.01%]  -motion-translate-x-in-25 motion-scale-in-0'
                : '-translate-x-2/4 scale-50 opacity-0',
            ]"
          >
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref, useTemplateRef, onMounted, onUnmounted } from "vue";

  const techs_list = useTemplateRef("techItem");

  const visible_items = ref([]);

  let observer;

  const techs = ref([
    "Java",
    "Javascript",
    "Typescript",
    "Spring",
    // "Hibernate",
    // "JPA",
    "Node",
    "ExpressJS",
    // "TypeORM",
    "Angular",
    "VueJS",
    "TailwindCSS",
    "Bootstrap",
    "MySQL",
    "Postgresql",
    "MongoDB",
    "GIT",
    "Docker",
    "Postman",
  ]);

  onMounted(() => {
    console.log(techs_list);
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = techs_list.value.indexOf(entry.target);
          if (entry.isIntersecting) {
            if (!visible_items.value.includes(index)) {
              visible_items.value.push(index);
            }
          } else {
            visible_items.value = visible_items.value.filter(
              (i) => i !== index
            );
          }
        });
      },
      { root: null, threshold: 0.5, rootMargin: "0px 0px -20% 0px" }
    );
    techs_list.value.forEach((tech) => observer.observe(tech));
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });
</script>
<style lang=""></style>
