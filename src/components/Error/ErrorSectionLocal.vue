<script setup>
  import { defineProps, defineEmits, ref } from "vue";

  defineProps(["height", "showText"]);
  const emit = defineEmits(["onReload"]);

  const disabled = ref(false);

  const reload = () => {
    disabled.value = true;
    setTimeout(() => (disabled.value = false), 5000);
    emit("onReload");
  };
</script>

<template>
  <div
    clickable
    @click="reload"
    :style="{ height: `${height}px` }"
    class="flex flex-col justify-center items-center text-center"
  >
    <img
      height="36"
      width="36"
      src="/assets/icon/reload-outline.svg"
      alt="reload-icon"
      class="block mb-2"
    />
    <p v-if="showText" class="text-slate-600 text-sm">إعادة تحميل</p>
  </div>
</template>
