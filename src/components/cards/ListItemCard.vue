<script setup>
  import { defineProps } from "vue";

  defineProps(["item", "itemType"]);
</script>

<template>
  <div
    :style="{
      backgroundImage: `url(${
        itemType == 'stores' ? item?.vendor_shop_logo : item?.image?.src
      })`,
    }"
    class="list-item-container"
  >
    <div class="h-3/4"></div>
    <div class="list-item-body flex justify-center items-center">
      <h4 class="text-sm font-semibold text-white m-0 p-2">
        {{ itemType == "stores" ? item?.vendor_shop_name : item?.name }}
      </h4>
    </div>
  </div>
</template>

<style scoped>
  .list-item-container {
    width: 100%;
    aspect-ratio: 1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: var(--radius);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }

  .list-item-body {
    height: 25%;
    background: #090f1590;
  }
</style>
