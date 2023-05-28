<template>
  <div class="flex items-center">
    <router-link to="/tabs/ProfilePage">
      <img
        :src="'https://mod-bina.com/uploads/' + userData?.data?.image"
        loading="lazy"
        class="w-12 h-12 rounded-full mt-2 mx-2"
      />
    </router-link>

    <h2 class="text-lg">
      مرحبا, <span class="text-xl">{{ userData?.data?.name }}</span>
    </h2>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    computed: mapGetters(["userData"]),
  };
</script>
