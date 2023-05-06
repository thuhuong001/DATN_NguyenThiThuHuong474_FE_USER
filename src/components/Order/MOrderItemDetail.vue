<template>
  <div class="order-item-detail" v-if="isShow">
    <div class="order-item-detail-header">
      <div class="header-prev" @click="$emit('close')">TRỞ LẠI </div>
      <div class="header-info"><b>{{order.OrderCode}}</b> | <span>{{getStatusPaid(order.IsPaid)}}</span></div>
    </div>
    <ul class="progressbar">
      <div class="step">
        <div class="step-icon">
          <div><i class="fa-solid fa-receipt"></i></div>
        </div>
        <div class="step-title">Chờ xác nhận</div>
        <div class="hr-step active"></div>
      </div>
      <div class="step">
        <div class="step-icon">
          <div><i class="fa-solid fa-receipt"></i></div>
        </div>
        <div class="step-title">Đã xác nhận</div>

        <div class="hr-step"></div>
      </div>
      <div class="step">
        <div class="step-icon">
          <div><i class="fa-solid fa-receipt"></i></div>
        </div>
        <div class="step-title">Đang giao</div>

        <div class="hr-step"></div>
      </div>
      <div class="step">
        <div class="step-icon">
          <div><i class="fa-solid fa-receipt"></i></div>
        </div>
        <div class="step-title">Đã nhận hàng</div>
        <div class="hr-step"></div>
      </div>
      <div class="step">
        <div class="step-icon">
          <div><i class="fa-solid fa-receipt"></i></div>
        </div>
        <div class="step-title">Đã hủy</div>
        <div class="hr-step"></div>
      </div>
      <div class="step">
        <div class="step-icon">
          <div><i class="fa-solid fa-receipt"></i></div>
        </div>
        <div class="step-title">Hoàn thành</div>
      </div>
    </ul>
    <div class="DM1xQK"></div>
    <div class="order-item-detail-info">
      <div class="info-address">
        <h5>Địa Chỉ Nhận Hàng</h5>
        <h6>{{order.Receiver}}</h6>
        <div><b>{{order.Phone}}</b></div>
        <div>
          {{order.AddressDetail}}
        </div>
      </div>
      <div class="info-product">
        <cart-item-checkout v-for="orderDetail,index in order.OrderDetails" :key="index" :item="orderDetail" />
        <div class="TokOv1">
          <div class="_8kMYJ3">
            <span>Tổng số lượng</span>
          </div>
          <div class="CxyZBG">
            <div>{{order.TotalAmount}}</div>
          </div>
        </div>
        <div class="TokOv1">
          <div class="_8kMYJ3">
            <span>Tổng tiền hàng</span>
          </div>
          <div class="CxyZBG">
            <div>{{$state.formatPrice(order.TotalPrice - order.PriceShip)}}</div>
          </div>
        </div>
        <div class="TokOv1">
          <div class="_8kMYJ3">
            <span>Phí vận chuyển</span>
          </div>
          <div class="CxyZBG">
            <div>{{$state.formatPrice(order.PriceShip)}}</div>
          </div>
        </div>
        <div class="TokOv1">
          <div class="_8kMYJ3 ">
            <span>Thành tiền</span>
          </div>
          <div class="CxyZBG active">
            <div>{{$state.formatPrice(order.TotalPrice)}}</div>
          </div>
        </div>
        <div class="TokOv1">
          <div class="_8kMYJ3">
            <span>Phương thức giao hàng</span>
          </div>
          <div class="CxyZBG">
            <div>{{order.ShipmentName}}</div>
          </div>
        </div>
        <div class="TokOv1">
          <div class="_8kMYJ3">
            <span>Phương thức thanh toán</span>
          </div>
          <div class="CxyZBG">
            <div>{{getPaymentMethod(order.PaymentMethod)}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import baseApi from '@/api/baseApi';
import CartItemCheckout from "../Cart/CartItemCheckout.vue";
import common from '@/common/common';
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
      order : {
      }
    };
  },
  methods:{
    getTitleStatusOrder(status){
      return common.getTitleStatusOrder(status);
    },
    
    getPaymentMethod(paymentMethod){
      return common.getPaymentMethod(paymentMethod);
    },
    getStatusPaid(paid){
      switch (paid) {
        case 0:
          return 'CHƯA THANH TOÁN';
        case 1:
          return 'ĐÃ THANH TOÁN';
        default:
          break;
      }
    }
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
<style scoped>
.header-info span{
  font-size: 16px;
  color: red;
}
</style>
