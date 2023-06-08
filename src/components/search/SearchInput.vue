<script setup>
  import { computed, ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import { useSearch } from "@/store/search";

  const route = useRoute();

  const placeholderText = computed(() => {
    if (route.fullPath == "/tabs/home") return "إبحث عن منتج";
    else if (route.fullPath == "/tabs/stores") return "إبحث عن مغلق";
    else if (route.path == "/tabs/products-listing") return "إبحث عن منتج";
    else if (route.fullPath == "/tabs/categories") return "إبحث عن قسم أو صنف";
    else return "بحث";
  });

  // handle search
  const searchStore = useSearch();
  const inputIsFocused = ref(false);
  const searchQuery = ref("");
  const searchTimer = ref();
  // watching search term
  watch(
    () => searchQuery.value,
    (newVal) => {
      searchStore.searchQuery = newVal;
    }
  );
  // watching focus status
  watch(
    () => inputIsFocused.value,
    (newVal) => {
      searchStore.inputIsFocused = newVal;
    }
  );
  // two way data binding
  watch(
    () => searchStore.searchQuery,
    (newVal) => {
      searchQuery.value = newVal;
    }
  );

  const fetchData = () => {
    searchStore.loading = true;
    if (searchQuery.value == "") return;
    else clearTimeout(searchTimer.value);
    searchTimer.value = setTimeout(async () => {
      // search for stores
      if (route.fullPath == "/tabs/stores") {
        const res = await searchStore.fetchVendorsBySearchQuery(
          searchQuery.value
        );
        searchStore.searchData = res;
      }
      // search for categories
      if (route.fullPath == "/tabs/categories") {
        const res = await searchStore.fetchCategoriesBySearchQuery(
          searchQuery.value
        );
        searchStore.searchData = res;
      }
      // search for products
      if (
        route.path == "/tabs/products-listing" ||
        route.path == "/tabs/home"
      ) {
        const res = await searchStore.fetchProductsBySearchQuery(
          searchQuery.value
        );
        searchStore.searchData = res;
      }
      searchStore.loading = false;
    }, 800);
  };
</script>

<template>
  <!-- search -->
  <div class="flex justify-center items-center -mt-4">
    <div style="width: 84%; height: 32px" class="flex relative" dir="rtl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8 text-blue-600 bg-transparent p-2 absolute right-2 rounded-r-2xl"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        class="rounded-2xl w-full outline-none shadow-md text-sm pl-2 pr-12"
        :placeholder="placeholderText"
        v-model="searchQuery"
        @focus="inputIsFocused = true"
        @keyup="fetchData"
      />
    </div>
  </div>
</template>
