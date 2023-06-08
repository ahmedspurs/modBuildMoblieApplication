<script setup>
  import { defineProps } from "vue";
  import ListItemCard from "@/components/cards/ListItemCard.vue";

  defineProps(["categories"]);
</script>

<template>
  <div
    v-if="categories && categories.length > 0"
    class="categories-list-container"
  >
    <div v-for="item in categories" :key="item?.id">
      <router-link
        :to="`/tabs/products-listing?type=categories&id=${item?.id}`"
      >
        <list-item-card :item="item"></list-item-card>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .categories-list-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  @media only screen and (min-width: 350px) {
    .categories-list-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (min-width: 450px) {
    .categories-list-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
