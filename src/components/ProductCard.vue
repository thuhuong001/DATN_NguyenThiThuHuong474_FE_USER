<template>
  <div class="p-card" :style="style" >
    <!-- <router-link :to="`/products/${item.ProductId}`"> -->
    <Carousel class="p-card-image" :settings="settingSliderBarImage">
      <Slide
        v-for="(image, index) in item.Images"
        :key="index"
        class="p-card-image"
      >
        <img :src="image.ImageLink" alt="" />
      </Slide>
    </Carousel>
    <!-- </router-link> -->
    <div class="p-card-content"  @click="addToCart">
      <div class="title truncate_two-row">{{ item?.ProductName }}</div>
      <div class="proloop-price">
        <div class="price-del">{{ $state.formatPrice(item.PriceDel) }}</div>
        <div class="price">{{ $state.formatPrice(item.PriceSale) }}</div>
      </div>
      <div class="sold"> Đã bán: {{ item.Sold}}</div>
      <div class="discount" v-if="item.Discount">
        <div class="discount-number">{{ item.Discount }}%</div>
        <div class="discount-title">Giảm</div>
      </div>
      <div class="p-color" v-if="colorType">
        <div
          class="p-color-item"
          v-for="(index, colorEnum) in item.colorEnum"
          :key="index"
          :style="{ backgroundColor: getColor(colorEnum) }"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import common from "../common/common.js";
import msEnum from "../common/enum.js";
export default {
  name: "ProductCard",
  data() {
    return {
      msEnum: msEnum,
    };
  },
  components: {
    Carousel,
    Slide,
  },
  props: {
    item: Object,
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    padding:String
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
        padding: this.padding
      };
    },
    colorType() {
      if (this.item.colorEnum && this.item.colorEnum.length > 0) return true;
      return false;
    },
    data() {
      return {
        settingSliderBarImage: {
          itemsToShow: 1,
          breakpoints: "breakpoints",
          wrapAround: "true",
          autoplay: 1000,
          transition: 1000,
          pauseAutoplayOnHover: true,
        },
      };
    },
  },
  methods: {
    getColor(enumColor) {
      return common.getColor(enumColor);
    },
    addToCart() {
      this.$router.push("/products/" + this.item.ProductId).then(() => {
        window.scrollTo(0, 0);
      });
    },
  },
};
</script>
<style scoped></style>
