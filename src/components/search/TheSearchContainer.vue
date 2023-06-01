<script setup>
  import { computed, defineEmits } from "vue";
  import { useSearch } from "@/store/search";

  const searchStore = useSearch();
  const loading = computed(() => searchStore.getLoading);
  const data = computed(() => searchStore.getSearchData);

  const emit = defineEmits(["onClear"]);

  const closeSearchContainer = () => {
    searchStore.searchTerm = "";
    searchStore.loading = true;
    searchStore.searchData = [];
    emit("onClear");
  };
</script>

<template>
  <div class="search-wrapper absolute shadow-md">
    <!-- remove icon -->
    <span class="close-icon" @click="closeSearchContainer">X</span>

    <!-- loading component -->
    <div v-if="loading" style="min-height: 300px">
      <!-- <add-to-cart-loader></add-to-cart-loader> -->
      Loading...
    </div>
    <!-- data component -->
    <div style="min-height: 300px" v-else-if="!loading && data.length > 0">
      Data...

      <!-- <add-to-cart
        v-for="(item, index) in data"
        :key="index"
        :item="item"
        :is-added-to-cart="isAddedToCart(item.product)"
        class="q-mt-md"
        @on-toggle="(colors) => toggleSelectedColors(colors, item.id)"
        @add-to-cart="addProductToCart(item)"
        :loading="adding"
      ></add-to-cart> -->
    </div>
    <!-- empty cart components -->
    <div style="min-height: 300px" v-else>
      NoData...
      <!-- <data-empty
        style="color: #d7dadc"
        message="searchEmpty"
        :min-height="350"
        :show-btn="false"
        :img-w-h="100"
      ></data-empty> -->
    </div>
  </div>
</template>

<style>
  .search-wrapper {
    right: 50%;
    transform: translateX(50%);
    position: fixed;
    top: 158px;
    padding: 2rem 1rem;
    width: 84%;
    max-width: 650px;
    max-height: 480px;
    background-color: #edf0f5;
    z-index: 100;
    border-radius: var(--radius);
    box-shadow: var(--box-shadow-3);
    overflow-y: scroll;
  }
  .close-icon {
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 0.25rem;
    color: rgb(255, 28, 70);
    font-weight: bolder;
    font-size: 1.25rem;
  }
</style>
