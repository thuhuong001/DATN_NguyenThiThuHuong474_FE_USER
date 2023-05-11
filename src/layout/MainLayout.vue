<template>
  <div>
    <the-header />
      <div class="m-main-content" ref="content">
        <router-view />
      </div>
    <the-footer ref="footerMain" :style="styleFooter" />
  </div>
  <m-search v-if="$state.isSearch" />
  <MToastList  />
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import MToastList from "@/components/toast-list/MToastList.vue";
import MSearch from '@/components/search/MSearch.vue';
export default {
  name: "MainLayout",
  components: {
    TheHeader,
    TheFooter,
    MToastList,
    MSearch,
  },
  data() {
    return {
      styleFooter: {}
    }
  },
  updated(){
    const contentHeight = this.$refs.content.clientHeight;
    const footerHeight = this.$refs.footerMain.$refs.footer.clientHeight;
    if((contentHeight + footerHeight) < window.innerHeight){
      this.styleFooter = {
        position: 'absolute',
        bottom: 0
      }
    }else{
      this.styleFooter = {
        position: 'absolute',
        bottom: 'unset'
      }
    }
  }
};
</script>
<style></style>
