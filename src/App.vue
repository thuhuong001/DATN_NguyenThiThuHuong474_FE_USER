<template>
  <main-layout />
</template>

<script>
import cartApi from './api/cartApi.js';
import MainLayout from './layout/MainLayout.vue';

export default {
  name: 'App',
  created : async function(){
    // eslint-disable-next-line no-debugger
    debugger
    this.$state.getUser();
    const res = await new cartApi("Cart").cartNumber(this.$state.user.CustomerId);
    this.$state.cartNumber = res.Data;
  },
  components: {
    MainLayout,
  }
}
</script>

<style>
@import url(./assets/css/index.css);
</style>
