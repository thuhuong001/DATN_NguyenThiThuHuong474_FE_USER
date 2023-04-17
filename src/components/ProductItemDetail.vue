<template>
  <div class="product-item">
    <div class="item-imgs">
      <div>
        <div class="imgs-left">
          <Carousel
            id="gallery"
            :items-to-show="1"
            :wrap-around="false"
            v-model="currentSlide"
            class="carousel-image-item"
          >
            <Slide v-for="(slide, index) in dataSliders" :key="index">
              <img :src="slide" alt="" />
            </Slide>
            <template #addons>
              <Pagination />
              <Navigation />
            </template>
          </Carousel>
        </div>
        <div class="m-t-8"></div>
        <Carousel
          id="thumbnails"
          :items-to-show="5"
          v-model="currentSlide"
          ref="carousel"
          snapAlign="right"
          class="carousel-list-item-detail"
        >
          <Slide v-for="(slide, index) in dataSliders" :key="index">
            <img :src="slide" alt="" @click="slideTo(index)" />
          </Slide>
        </Carousel>
      </div>
    </div>
    <div class="item-content">
      <div class="product-title">
        Giày Cao Gót Slingback Phối Khoá
      </div>
      <div class="product-brand">
        Thương hiệu: <span>{{ "MOON" }}</span>
      </div>
      <div class="product-price">
        <div class="product-price-old">690,000₫</div>
        <div class="product-price-new">459,000₫</div>
      </div>
      <div class="product-color">
        <div class="product-color-title">
          Màu sắc: <br /><strong> Xanh ngọc </strong>
        </div>
        <div class="product-color-list">
          <div class="product-color-item" v-for="index in 4" :key="index"></div>
        </div>
      </div>
      <div class="product-size">
        <div class="product-size-title">Kích thước:</div>
        <div class="product-size-list">
          <div class="product-size-item" v-for="index in 4" :key="index">26</div>
        </div>
      </div>
      <hr />
      <div class="view-size-guide m-b-8">
        <a href="">Hướng dẫn chọn size</a>
      </div>
      <div class="select-quantity">
        <button>-</button>
        <input type="number" value="1" />
        <button>+</button>
      </div>
      <div class="addcart-area">
        <button>
          <span>Thêm vào giỏ</span>
        </button>
        <button class="btnred">
          <span>Mua ngay</span>
        </button>
      </div>
      <div class="product-policy-detail">
        <div class="item-policy-detail">
          Bảo hành 1 đổi 1 trong vòng 7 ngày (*) áp dụng có điều kiện
        </div>
        <div class="item-policy-detail">
          Miễn phí vận chuyển cho đơn hàng từ 400,000 đồng
        </div>
      </div>
      <div class="product-description product-description--accordion">
        <div class="panel-group">
          <div class="panel-title">
            <div class="panel-title-name">THông tin sản phẩm</div>
          <div class="panel-icon"><i class="fa fa-plus"></i> </div>
         </div>
         <hr>
        </div>
        <div class="panel-group">
          <div class="panel-title noclick">
            <div class="panel-title-name">Dịch vụ giao hàng</div>
          <div class="panel-icon"><i class="fa fa-plus"></i> </div>
         </div>
         <hr>
         <div class="description-content">
          <div class="product-deliverly">
            <ul class="infoList-deliverly">
              <li>
                <span>
                  <img src="https://file.hstatic.net/1000397797/file/delivery-ico1_f26631929e1b41dab022d9960006297c.svg" alt="">
                </span>
                Cam kết 100% chính hãng từ TokyoLife
              </li>
              <li>
                <span>
                  <img src="https://file.hstatic.net/1000397797/file/delivery-ico2_5ea2de2f279b4dbfa10fcb9b9c448b4d.svg" alt="">
                </span>
                Giao hàng dự kiến từ 1-3 ngày làm việc. (
                <strong>LƯU Ý</strong>
                : Đơn hàng có thể được giao làm nhiều lần do được vận chuyển từ nhiều kho)
              </li>
              <li>
                <span>
                  <img src="https://file.hstatic.net/1000397797/file/delivery-ico3_dd589d9c49584441a9ef0c2f9300649f.svg" alt="">
                </span>
                Hỗ trợ 24/7 qua Fanpage, Zalo Email & Hotline
              </li>
            </ul>
          </div>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "ProductItemDetail",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data() {
    return {
      currentSlide: 0,
      dataSliders: [
        "https://product.hstatic.net/200000532555/product/314334569_2213754772340688_3339720577888659837_n_cb55f167d8bc4d26bb46903b5fb513fb_master.jpg",
        "https://product.hstatic.net/200000532555/product/n_o_polo_dura_c_bo_d_t_t_ong_i9pol010k_xanh_l_350k_1_1_29803815bc594e369ee68fc4fd5628ab_master.jpg",
        "https://product.hstatic.net/200000532555/product/n_o_dura_c_bo_d_t_t_ong_i9pol010k_v_ng_350k_1_f5881d1836934c9c8d9cfe674e9e0888_master.jpg",
        "https://product.hstatic.net/200000532555/product/n_o_polo_dura_c_bo_d_t_t_ong_i9pol010k_350k_1_1_f4fbebf37ad54a4e96a8ae95fe76037d_master.jpg",
      ],
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
};
</script>
<style>
.product-item {
  width: 100%;
  display: flex;
}
.item-imgs {
  width: 50%;
}
.item-content {
  width: 50%;
  background-color: var(--color-content);
}
.slide {
  display: flex;
  flex-direction: column;
}
.carousel.carousel-image-item > .carousel__viewport {
  height: 500px !important;
}
.carousel.carousel-image-item ol {
  height: 100% !important;
}
.carousel-list-item-detail .carousel__slide {
  height: 100px !important;
  margin: 0 8px;
  border-radius: 1px solid #cac8c8;
}

/* item-content */
.item-content {
  padding: 10px 24px;
}
.product-title {
  font-size: 24px;
  margin: 20px 0 8px;
  color: #000000;
  margin: 0 0 13px 0;
  font-weight: 700;
  line-height: 1.2;
}
.product-brand span {
  font-weight: 500;
  color: #000000;
}
.product-price {
  display: flex;
  margin-top: 8px;
}
.product-price-old {
  font-size: 18px;
  color: #878c8f;
  margin-right: 10px;
  text-decoration: line-through;
}
.product-price-new {
  font-size: 25px;
  font-weight: 600;
  color: red;
}
.product-color {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
.product-color-title {
  width: 28%;
  color: #252a2b;
  line-height: 1.45;
  font-size: 14px;
  display: block;
}
.product-color-title strong {
  font-size: 85%;
  display: block;
  color: #4ea8cd;
  line-height: 1.1;
  padding-bottom: 3px;
}
.product-color-list {
  display: flex;
}
.product-color-item {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;
  background-color: red;
  margin-right: 16px;
}

.product-size {
  display: flex;
  align-items: center;
  margin-top: 16px;
}
.product-size-title {
  width: 28%;
}
.product-size-list {
  display: flex;
  width: 72%;
}
.view-size-guide a {
  text-decoration: underline;
  margin-bottom: 15px;
  font-weight: bold;
  color: black;
}
.product-size-item {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  min-width: 25px;
  height: 25px;
  line-height: 25px;
  background: #fff;
  border: 1px solid #bdbfbe;
  font-size: 10px;
  color: #515b5c;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin-right: 12px;
}
.select-quantity{
  display: flex;
}
.select-quantity button {
  background: #f3f4f4;
  border: solid 1px #f3f4f4;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  height: 45px;
  line-height: 45px;
  width: 45px;
  text-align: center;
  border-radius: 0;
  outline: none;
  appearance: none;
}
.select-quantity input {
  background: #fff;
  font-weight: 600;
  height: 45px;
  line-height: 45px;
  width: 60px;
  padding: 0;
  text-align: center;
  border: 1px solid #f3f4f4;
  border-left: none;
  border-right: none;
  border-radius: 1px;
  float: left;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
}
.addcart-area {
  width: 100%;
  margin-top: 15px;
}
.addcart-area button {
  width: 49%;
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  outline: none;
  font-weight: 600;
  font-size: 15px;
}
.addcart-area button {
  position: relative;
  display: inline-block;
  z-index: 1;
  overflow: hidden;
  padding: 12px 28px;
  line-height: normal;
  color: #fff;
  background-color: #000000;
  border: 1px solid #252a2b;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  outline: none;
  border-radius: 2px;
  text-transform: uppercase;
  -webkit-transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transition: color 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86),
    border 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.addcart-area button.btnred {
  background-color: #ff0000;
  border-color: #ff0000;
  float: right;
}

.product-policy-detail {
  background: #f7f7f7;
  display: flex;
  justify-content: space-between;
  padding: 10px 0 0 0 !important;
  margin: 0 !important;
  margin: 8px;
}
.item-policy-detail {
  background: rgba(236, 235, 232, 0.65);
  padding: 15px;
  width: 49%;
  text-align: center;
  font-weight: bold;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 13px;
}


.panel-group{
  margin-top: 16px;
}
.panel-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.panel-title-name{
  color: #000000;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    margin: 0;
    cursor: pointer;
    font-weight: bold;
}
.panel-icon i{
  font-weight: 900;
}


.description-content{
  display: block;
}
.infoList-deliverly{
  padding: 0;
    margin: 0;
    list-style-type: none;
}
.infoList-deliverly li {
    padding-left: 45px;
    padding-top: 4px;
    position: relative;
    margin-bottom: 20px;
}
.infoList-deliverly li span {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    display: inline-block;
    vertical-align: middle;
}
</style>
