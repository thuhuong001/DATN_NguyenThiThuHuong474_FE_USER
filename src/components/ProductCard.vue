<template>
  <div class="p-card" :style="style">
    <img
      src="../assets/img/Products/giay3.webp"
      alt=""
    />
    <div class="p-card-content">
      <div class="title truncate_two-row">{{ item.title }}</div>
      <div class="proloop-price">
        <div class="price">{{ formatPrice(item.price) }}</div>
        <div class="price-del">{{ formatPrice(item.price_del) }}</div>
      </div>
      <div class="discount" v-if="item.number_mass">
        <div class="discount-number">{{ item.number_mass }}%</div>
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
