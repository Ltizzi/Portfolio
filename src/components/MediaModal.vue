<template lang="">
  <teleport to="body">
    <div
      class="lg:items-center fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center"
      v-if="props.modalShow"
    >
      <div
        class="fixed left-0 top-0 z-20 h-full w-full backdrop-blur-lg"
        @click="close()"
      ></div>
      <div
        class="container fixed z-50 w-full rounded-lg p-1 bg-opacity-40 bg-white shadow-xl"
      >
        <img
          :src="props.route"
          alt=""
          v-if="!props.isVideo"
          class="h-full w-full object-cover"
          @click.self="close()"
        />
        <video
          class="h-full w-full object-cover"
          :src="props.route"
          autoplay
          muted
          loop
          poster="/whitenoise.gif"
          v-if="props.isVideo"
          @click.self="close()"
        ></video>
      </div>
    </div>
  </teleport>
</template>
<script setup>
  import { ref, watch } from "vue";

  const isActive = ref(false);

  const props = defineProps({
    modalShow: Boolean,
    isVideo: Boolean,
    route: String,
  });
  const emit = defineEmits(["close"]);

  function close() {
    isActive.value = false;
    emit("close");
  }

  watch(
    () => props.route,
    (newValue, oldValue) => {
      isActive.value = props.show;
      console.log("SHOW: " + props.route);
    }
  );
</script>
