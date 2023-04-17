<template>
  <div class="product-detail">
    <div class="folder">
      <folder-routes />
    </div>
    <product-item-detail />
  </div>
</template>

<script>
import ProductItemDetail from "@/components/ProductItemDetail.vue";
import FolderRoutes from '@/components/FolderRoutes.vue';
export default {
  name: "ProductDetail",
  components: {
    ProductItemDetail,
    FolderRoutes,
  },
};
</script>
