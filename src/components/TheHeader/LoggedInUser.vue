<script setup>
  import { useUser } from "@/store/user";
  import { computed } from "vue";

  const userStore = useUser();

  const user = computed(() => userStore.getUser);
</script>

<template>
  <div class="flex items-center">
    <router-link to="/tabs/ProfilePage">
      <img
        :src="user?.image"
        loading="lazy"
        class="w-12 h-12 rounded-full mt-2 mx-2"
      />
    </router-link>

    <h2 class="text-lg">
      مرحبا, <span class="text-xl">{{ user?.user_display_name }}</span>
    </h2>
  </div>
</template>
