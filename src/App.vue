<template>
  <main-layout />
</template>

<script>
import MainLayout from './layout/MainLayout.vue';

export default {
  name: 'App',
  created(){
    this.$state.getUser();
  },
  components: {
    MainLayout,
  }
}
</script>

<style>
@import url(./assets/css/index.css);
</style>
