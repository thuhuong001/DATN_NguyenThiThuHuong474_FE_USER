<template>
  <div>
    <the-header />
      <div class="m-main-content">
          <router-view />
      </div>
    <the-footer />
  </div>
  <MToastList  />
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import MToastList from "@/components/toast-list/MToastList.vue";
export default {
  name: "MainLayout",
  components: {
    TheHeader,
    TheFooter,
    MToastList
  }
};
</script>
<style></style>
