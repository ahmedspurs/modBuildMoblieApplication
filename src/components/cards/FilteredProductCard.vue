<script setup>
  import { defineProps } from "vue";
  import { useRouter } from "vue-router";
  import { useSearch } from "@/store/search";

  defineProps(["item"]);

  const searchStore = useSearch();
  const router = useRouter();

  const navigate = (id) => {
    searchStore.searchQuery = "";
    searchStore.loading = true;
    searchStore.searchData = [];
    router.push(`/tabs/products-listing/${id}`);
  };
</script>

<template>
  <div
    clickable
    @click="navigate(item?.id)"
    class="p-2 mb-4 flex items-center justify-between shadow-lg border border-gray-300 w-full"
  >
    <div class="w-3/4">
      <img
        class="w-24 h-24 bg-white"
        :src="item?.images && item.images.length > 0 ? item.images[0].src : ''"
        loading="lazy"
      />
    </div>
    <div class="w-full">
      <h4 class="m-0 mb-4">{{ item?.name }}</h4>
      <div class="flex justify-between items-center">
        <p class="text-slate-500 text-sm line-through">
          {{ item?.regular_price }} ر.س
        </p>
        <p class="text-slate-700 text-base font-semibold">
          {{ item?.price }} ر.س
        </p>
      </div>
    </div>
  </div>
</template>
