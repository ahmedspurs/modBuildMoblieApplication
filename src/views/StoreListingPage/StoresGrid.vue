<script setup>
  import { defineProps } from "vue";
  import ListItemCard from "@/components/cards/ListItemCard.vue";

  defineProps(["stores"]);
</script>

<template>
  <div v-if="stores && stores.length > 0" class="items-list-container">
    <div v-for="item in stores" :key="item?.id">
      <router-link :to="`/tabs/products-listing?type=stores&id=${item?.id}`">
        <list-item-card :item="item" :item-type="'stores'"></list-item-card>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .items-list-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  @media only screen and (min-width: 350px) {
    .items-list-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (min-width: 450px) {
    .items-list-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
