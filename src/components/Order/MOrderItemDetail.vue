<template>
  <div class="order-item-detail" v-if="isShow">
    <div class="order-item-detail-header">
      <div class="header-prev" @click="$emit('close')">TRỞ LẠI</div>
      <div class="header-info">ĐƠN HÀNG ĐÃ HOÀN THÀNH</div>
    </div>
    <ul class="progressbar">
      <div class="step">
        <div class="step-icon">
          <div><i class="fa-solid fa-receipt"></i></div>
        </div>
        <div class="step-title">Đơn hàng đã đặt</div>
        <div class="hr-step active"></div>
      </div>
      <div class="step">
        <div class="step-icon">
          <div><i class="fa-solid fa-receipt"></i></div>
        </div>
        <div class="step-title">Đơn hàng đã đặt</div>

        <div class="hr-step"></div>
      </div>
      <div class="step">
        <div class="step-icon">
          <div><i class="fa-solid fa-receipt"></i></div>
        </div>
        <div class="step-title">Đơn hàng đã đặt</div>

        <div class="hr-step"></div>
      </div>
      <div class="step">
        <div class="step-icon">
          <div><i class="fa-solid fa-receipt"></i></div>
        </div>
        <div class="step-title">Đơn hàng đã đặt</div>
      </div>
    </ul>
    <div class="DM1xQK"></div>
    <div class="order-item-detail-info">
      <div class="info-address">
        <h5>Địa Chỉ Nhận Hàng</h5>
        <h6>{{order.Receiver}}</h6>
        <div>{{order.Phone}}</div>
        <div>
          {{order.AddressDetail}}
        </div>
      </div>
      <div class="info-product">
        <cart-item-checkout v-for="orderDetail,index in order.OrderDetails" :key="index" :item="orderDetail" />
        <div class="TokOv1">
          <div class="_8kMYJ3">
            <span>Tổng tiền hàng</span>
          </div>
          <div class="CxyZBG">
            <div>₫119.990</div>
          </div>
        </div>
        <div class="TokOv1">
          <div class="_8kMYJ3">
            <span>Phí vận chuyển</span>
          </div>
          <div class="CxyZBG">
            <div>₫119.990</div>
          </div>
        </div>
        <div class="TokOv1">
          <div class="_8kMYJ3 ">
            <span>Thành tiền</span>
          </div>
          <div class="CxyZBG active">
            <div>₫119.990</div>
          </div>
        </div>
        <div class="TokOv1">
          <div class="_8kMYJ3">
            <span>Phương thức Thanh toán</span>
          </div>
          <div class="CxyZBG">
            <div>Thanh toán khi nhận hàng</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import baseApi from '@/api/baseApi';
import CartItemCheckout from "../Cart/CartItemCheckout.vue";
export default {
  components: {
    CartItemCheckout,
  },
  props:{
    isShow:Boolean,
    OrderId : String,
  },
  created: async function(){
    
  },
  data() {
    return {
      order : {}
    };
  },
  watch:{
    OrderId  :async  function () {
      if(this.OrderId){
        const res = await new baseApi("Order").getById(this.OrderId);
        this.order = res;
      }
    }
  }
};
</script>
<style></style>
