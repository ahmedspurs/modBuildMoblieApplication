<script setup>
  import { defineProps } from "vue";

  defineProps(["label", "placeholder","message" , "data"]);
</script>

<template>

              <div>
  <label for="error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">{{label}}</label>
  <input type="text" id="error" class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" :placeholder="placeholder">
  <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium"></span> {{ message }} </p>
</div>
</template>
