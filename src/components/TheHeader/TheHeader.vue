<script setup>
  import { ref, computed, onMounted } from "vue";
  import { useSearch } from "@/store/search";
  import SearchInput from "@/components/search/SearchInput";
  import LoggedInUser from "./LoggedInUser";
  import LoggedOutUser from "./LoggedOutUser";
  import CartIcon from "./CartIcon";
  import TheSearchContainer from "@/components/search/TheSearchContainer.vue";

  const token = ref(true);

  onMounted(() => {
    if (localStorage.getItem("mod_user_token")) {
      token.value = false;
    } else {
      token.value = true;
    }
  });

  // handle search
  const searchStore = useSearch();
  const inputIsFocused = computed(() => searchStore.getInputIsFocused);
  const searchTerm = computed(() => searchStore.getSearchTerm);
</script>

<template>
  <div class="header bg-blue-500 text-white py-4 rounded-b-2xl relative">
    <div class="flex items-center justify-between px-4">
      <logged-out-user v-if="token"></logged-out-user>
      <logged-in-user v-else></logged-in-user>
      <cart-icon></cart-icon>
    </div>
    <h2 style="margin-top: 0.25rem" class="text-center text-base">
      نتمني لك يوما سعيدا
    </h2>
  </div>

  <!-- search input -->
  <search-input></search-input>
  <the-search-container
    v-if="inputIsFocused && searchTerm.length > 0"
  ></the-search-container>
</template>
