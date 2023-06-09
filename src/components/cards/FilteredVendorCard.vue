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
    router.push(`/tabs/products-listing?type=stores&id=${id}`);
  };
</script>

<template>
  <div
    clickable
    @click="navigate(item?.vendor_id)"
    class="p-2 mb-4 flex items-center justify-between shadow-lg border border-gray-300 w-full"
  >
    <div class="w-3/4">
      <img
        class="w-24 h-24 bg-white"
        :src="item?.vendor_shop_logo"
        loading="lazy"
      />
    </div>
    <div class="w-full">
      <h4 class="m-0 mb-4">{{ item?.vendor_shop_name }}</h4>
    </div>
  </div>
</template>
