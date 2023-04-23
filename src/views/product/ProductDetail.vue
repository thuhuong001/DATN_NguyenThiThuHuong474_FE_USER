<template>
  <div class="product-detail">
    <div class="folder">
      <folder-routes />
    </div>
    <product-item-detail :item="product" />
  </div>
</template>

<script>
import ProductItemDetail from "@/components/ProductItemDetail.vue";
import FolderRoutes from '@/components/FolderRoutes.vue';
import baseApi from '@/api/baseApi';
export default {
  name: "ProductDetail",
  components: {
    ProductItemDetail,
    FolderRoutes,
  },
  created: async function (){
    // eslint-disable-next-line no-debugger
    debugger
    const id = this.$route.params.id;
    if(id){
      this.product = await new baseApi("Product").getByIdDetail(id);

    }else{
      this.$router.push("/");
    }
  },
  data() {
    return {
      product : {
        
      }
    }
  },
};
</script>
