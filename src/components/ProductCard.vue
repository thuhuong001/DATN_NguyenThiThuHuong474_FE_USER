<template>
  <div class="p-card" :style="style">
    <router-link
          :to="`/products/${item.ProductId}`"
        >
    <img
      src="../assets/img/Products/giay4.webp"
      alt=""
    />
     </router-link>
    <div class="p-card-content">
      <div class="title truncate_two-row">{{ item.ProductName }}</div>
      <div class="proloop-price">
        <div class="price">{{ formatPrice(item.PriceSale) }}</div>
        <div class="price-del">{{ formatPrice(item.PriceDel) }}</div>
      </div>
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
import common from "../common/common.js";
import msEnum from "../common/enum.js";
export default {
  name: "ProductCard",
  data() {
    return {
      msEnum: msEnum,
    };
  },
  props: {
    item: Object,
    class: String,
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
      };
    },
    colorType() {
      if (this.item.colorEnum && this.item.colorEnum.length > 0) return true;
      return false;
    },
  },
  methods: {
    formatPrice(price) {
      return common.formatPrice(price);
    },
    getColor(enumColor) {
      return common.getColor(enumColor);
    },
  },
};
</script>
<style scoped></style>
