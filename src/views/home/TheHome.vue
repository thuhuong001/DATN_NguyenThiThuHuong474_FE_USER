<template>
  <div class="home">
    <div class="homepage-slider">
      <Carousel :settings="config.settingSliderBar">
        <Slide v-for="(item, index) in config.dataSliders" :key="index">
          <img :src="item" :alt="index" />
        </Slide>
        <!-- <template #addons>
          <Navigation />
          <Pagination />
        </template> -->
      </Carousel>
    </div>
    <div class="promotion-over">
      <div class="promotion">
        <div class="promotion-title">MoonShop - SALE LỄ TỐC ĐỘ</div>
        <Carousel
          :settings="config.settingsPromotion"
          :breakpoints="config.breakpointsPromotion"
        >
          <Slide v-for="item in 10" :key="item">
            <div class="promotion-content-item">
              <div class="promotion-content-title">Sale Up to 80%</div>
              <span>MoonShop ưu đãi tới 80%. Số lượng có hạn - Shopping ngay!</span
              >
            </div>
          </Slide>
          <template #addons>
          </template>
        </Carousel>
      </div>
    </div>
    <div class="banber">
      <img src="../../assets/img/banner/banner-1.webp" alt="" />
    </div>
    <div class="list-product">
      <div class="list-product-title">Sản phẩm bán chạy</div>
      <Carousel
        :settings="config.settingsProduct"
        :breakpoints="config.breakpointsProducts"
      >
        <Slide v-for="item in config.products" :key="item">
          <product-card :item="item" />
        </Slide>
      </Carousel>
    </div>
    <div class="banber">
      <img src="../../assets/img/banner/banner-1.webp" alt="" />
    </div>
    <div class="list-product">
      <div class="list-product-title">Sản phẩm bán chạy</div>
      <Carousel
        :settings="config.settingsProduct"
        :breakpoints="config.breakpointsProducts"
      >
        <Slide v-for="item in config.products" :key="item">
          <product-card :item="item" />
        </Slide>
      </Carousel>
      <div class="m-t-16"></div>
      <Carousel
        :settings="config.settingsProduct"
        :breakpoints="config.breakpointsProducts"
      >
        <Slide v-for="item in config.products" :key="item">
          <product-card :item="item" />
        </Slide>
      </Carousel>
    </div>
    <div class="view-products">
        <v-btn
        color="blue-grey"
        prepend-icon="mdi-cloud-upload"
        class="btn-view-products"
        @click="load(2)"
      >
        Xem thêm sản phẩm
        <b> GIẢM 50% PHỤ KIỆN THỜI TRANG </b>
      </v-btn>
      </div>
    <!-- Tin tức start-->
    <div class="home-news">
      <div class="list-news-title">Tin tức MoonShop</div>
      <div class="list-news">
          <news-item v-for="index in 9" :key="index" />
      </div>
      <div class="list-news-navigation">Xem các tin bài khác »</div>
    </div>

    <!-- Tin tức End -->
    <!-- Donors Start -->
    <div class="donors">
      
    </div>

    <!-- Donors End -->
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import config from "@/config";
import ProductCard from "@/components/ProductCard.vue";
import { VBtn } from "vuetify/lib/components";
import NewsItem from '@/components/NewsItem.vue';
import baseApi from '@/api/baseApi';
import enumH from '@/common/enum';
export default {
  name: "TheHome",
  components: {
    Carousel,
    Slide,
    ProductCard,
    VBtn,
    NewsItem
  },
  created: async function() {
    this.FilterType = enumH.filterProductType.selling;
    var res = await new baseApi("Product").getByFilterDetail(this.paramsFilter);
    this.config.products  = res.Data ? res.Data : [];
  },
  data() {
    return {
      config: new config(),
      TextSearch : "",
        PageNumber : 1,
        PageSize : 20,
        FilterType : 0,
    };
  },
  computed:{
    paramsFilter(){
      return {
        TextSearch : this.TextSearch,
        PageNumber :  this.PageNumber,
        PageSize : this.PageSize,
        FilterType :  this.FilterType
      }
    }
  }
};
</script>
