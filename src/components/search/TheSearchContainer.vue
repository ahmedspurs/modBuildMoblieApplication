<script setup>
  import { computed, defineEmits } from "vue";
  import { useSearch } from "@/store/search";
  import { useRoute } from "vue-router";
  import FilteredVendorCard from "@/components/cards/FilteredVendorCard.vue";
  import FilteredCategoryCard from "@/components/cards/FilteredCategoryCard.vue";
  import FilteredProductCard from "@/components/cards/FilteredProductCard.vue";

  const route = useRoute();
  const searchStore = useSearch();
  const loading = computed(() => searchStore.getLoading);
  const data = computed(() => searchStore.getSearchData);

  const emit = defineEmits(["onClear"]);

  const closeSearchContainer = () => {
    searchStore.searchQuery = "";
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
    <div
      v-if="loading"
      style="min-height: 140px"
      class="flex justify-center items-center"
    >
      <!-- <add-to-cart-loader></add-to-cart-loader> -->
      Loading...
    </div>
    <!-- data component -->
    <div
      style="min-height: 140px"
      v-else-if="!loading && data?.length > 0 && searchStore.getQueryStatus"
      class="mt-6"
    >
      <!-- vendors data -->
      <div
        class="flex flex-col items-center"
        v-if="route.path == '/tabs/stores'"
      >
        <FilteredVendorCard
          v-for="(item, i) in data"
          :key="i"
          :item="item"
        ></FilteredVendorCard>
      </div>
      <!-- categories data -->
      <div
        class="flex flex-col items-center"
        v-else-if="route.path == '/tabs/categories'"
      >
        <FilteredCategoryCard
          v-for="(item, i) in data"
          :key="i"
          :item="item"
        ></FilteredCategoryCard>
      </div>
      <!-- products data -->
      <div
        class="flex flex-col items-center"
        v-else-if="
          route.path == '/tabs/products-listing' || route.path == '/tabs/home'
        "
      >
        <FilteredProductCard
          v-for="(item, i) in data"
          :key="i"
          :item="item"
        ></FilteredProductCard>
      </div>
    </div>
    <!-- empty data components -->
    <div
      style="min-height: 140px"
      v-else-if="!loading && data?.length == 0 && searchStore.getQueryStatus"
      class="flex flex-col justify-center items-center"
    >
      <img
        src="/assets/images/empty-folder.png"
        alt="empty-folder"
        loading="lazy"
        class="w-24 h-24"
      />
      <p class="text-slate-500 text-base mt-1">لا توجد نتائج</p>
    </div>
    <!-- error search component -->
    <div
      style="min-height: 140px"
      v-else
      class="flex flex-col justify-center items-center"
    >
      <p class="text-slate-600 text-lg">حدث خطأ ما</p>
      <p class="text-slate-400 text-sm mb-4">
        راجع إتصالك بالشبكة ثم حاول مجددا
      </p>
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
