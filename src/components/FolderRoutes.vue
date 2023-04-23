<template>
  <div class="folder-routes">
    <a
      :href="routesNow(index) ? undefied : item.url"
      v-for="(item, index) in folderRoutes"
      :key="index"
      :style="{
        color: routesNow(index) ? 'var(--color-text-grey)' : 'black',
      }"
      >{{item.title}}{{!routesNow(index) ? " > " : ""}}</a
    >
  </div>
</template>

<script>
export default {
  name: "FolderRoutes",
  props: {
    folderRoutes: {
      type: Array,
    },
  },
  data() {
    return {
        folderRoutesTest : [
        {
          url: "/",
          title: "Trang chủ ",
        },
        {
          url: "/1",
          title: "Giày cao gót ",
        },
        {
          url: "/3",
          title: "Giày Cao Gót Slingback Phối Khoá",
        },
      ]
    }
  },
  methods:{
    routesNow(index){
        return index === this.folderRoutesTest.length - 1;
    }
  }
};
</script>
<style scoped>
.folder-routes {
  color: rgb(55, 55, 55);
  font-size: 13px;
  margin: 12px 0;
}
</style>
