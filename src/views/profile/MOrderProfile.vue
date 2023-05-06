<template>
  <div
    class="order-profile"
    v-if="isShow && !showDetail"
    :style="{ display: hidden ? 'none' : 'unset' }"
  >
    <div class="order-status">
      <div
        class="status-item"
        :class="tabActive == enumStatus.TatCa ? 'active' : ''"
        @click="changeTab(enumStatus.TatCa)"
      >
        Tất cả
      </div>
      <div
        class="status-item"
        :class="tabActive == enumStatus.ChoXacNhan ? 'active' : ''"
        @click="changeTab(enumStatus.ChoXacNhan)"
      >
        Chờ xác nhận
      </div>
      <div
        class="status-item"
        :class="tabActive == enumStatus.DangGiao ? 'active' : ''"
        @click="changeTab(enumStatus.DangGiao)"
      >
        Đang giao
      </div>
      <div
        class="status-item"
        :class="tabActive == enumStatus.DaNhanHang ? 'active' : ''"
        @click="changeTab(enumStatus.DaNhanHang)"
      >
        Đã nhận hàng
      </div>
      <div
        class="status-item"
        :class="tabActive == enumStatus.HoanThanh ? 'active' : ''"
        @click="changeTab(enumStatus.HoanThanh)"
      >
        Hoàn thành
      </div>
      <div
        class="status-item"
        :class="tabActive == enumStatus.DaHuy ? 'active' : ''"
        @click="changeTab(enumStatus.DaHuy)"
      >
        Đã hủy
      </div>
      <div
        class="status-item"
        :class="tabActive == enumStatus.TraHang ? 'active' : ''"
        @click="changeTab(enumStatus.TraHang)"
      >
        Trả hàng
      </div>
    </div>
    <div class="order-search">
      <m-input classIcon="icon-search" placeholder="Tìm kiếm đơn hàng" />
    </div>
    <div class="order-tab-item">
      <m-order-item v-for="order,index in orders" :key="index" :item="order" @show-detail="showOrderDetail" />
    </div>
  </div>
  <m-order-item-detail :isShow="showDetail" :OrderId="OrderId"  @close="showDetail = fasle" />
</template>
<script>
import MInput from "@/components/input/MInput.vue";
import enumH from "@/common/enum";
import MOrderItem from "@/components/Order/MOrderItem.vue";
import baseApi from '@/api/baseApi';
import MOrderItemDetail from '@/components/Order/MOrderItemDetail.vue';
export default {
  name: "MOrderProfile",
  components: {
    MInput,
    MOrderItem,
    MOrderItemDetail
  },
  props: {
    isShow: Boolean,

    hidden: Boolean,
  },
  created: async function(){
    try {
      const res = await new baseApi("Order").getByFilter({});
      console.log(res);
      this.orders = res.Data;
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      enumStatus: enumH.enumStatusOrder,
      tabActive: 0,
      showDetail : false,
      OrderId : null,
      orders :[]
    };
  },

  methods: {
    changeTab(tab) {
      this.tabActive = tab;
    },
    showOrderDetail(id){
      this.OrderId = id;
      this.showDetail = true;
    }
  },
};
</script>
<style></style>
