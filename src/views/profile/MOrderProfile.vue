<template>
  <div
    class="order-profile"
    v-if="isShow"
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
        :class="tabActive == enumStatus.ChoThanhToan ? 'active' : ''"
        @click="changeTab(enumStatus.ChoThanhToan)"
      >
        Chờ thanh toán
      </div>
      <div
        class="status-item"
        :class="tabActive == enumStatus.VanChuyen ? 'active' : ''"
        @click="changeTab(enumStatus.VanChuyen)"
      >
        Vận chuyển
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
      <m-order-item :item="item" />
      <m-order-item :item="item" />
      <m-order-item :item="item" />
    </div>
  </div>
</template>
<script>
import MInput from "@/components/input/MInput.vue";
import enumD from "@/common/enum";
import MOrderItem from "@/components/Order/MOrderItem.vue";
export default {
  name: "MOrderProfile",
  components: {
    MInput,
    MOrderItem,
  },
  props: {
    isShow: Boolean,

    hidden: Boolean,
  },
  data() {
    return {
      enumStatus: enumD.enumStatusOrder,
      tabActive: 0,
      item: {
        CartId: "6a4c1adb-db0c-45aa-bdc2-e4f98dfae952",
        Quantity: 1,
        PriceSale: 85000,
        Discount: 30,
        CreatedAt: "2023-05-02T23:10:37",
        ModifiedAt: "2023-05-02T23:10:37",
        CustomerId: "6efa3a3f-83a9-4f01-87fb-8a678e53d013",
        ProductVariantId: "119b4ebd-e3f6-4fd6-88c9-2bf0197d943f",
        ProductId: "0a90bce8-c221-41e1-8d97-1e8d8e40f519",
        ProductName: "Giày thể thao",
        ColorName: "Den",
        SizeCode: "36",
        Images: [
          {
            ImageId: "26ab4b7a-1b62-4918-a5ec-d4f9350acad7",
            ImageName: "Mau.PNG",
            ImageLink:
              "http://res.cloudinary.com/dqywrcgrr/image/upload/v1681464239/26ab4b7a-1b62-4918-a5ec-d4f9350acad7.png",
            ObjectId: "00000000-0000-0000-0000-000000000000",
            IsDefault: 0,
          },
          {
            ImageId: "624980d5-8a8e-42be-9345-a5029cdd882e",
            ImageName: "XanhThan.PNG",
            ImageLink:
              "http://res.cloudinary.com/dqywrcgrr/image/upload/v1681464242/624980d5-8a8e-42be-9345-a5029cdd882e.png",
            ObjectId: "00000000-0000-0000-0000-000000000000",
            IsDefault: 0,
          },
          {
            ImageId: "90480742-146f-4043-a39d-c6ec6f6ffa0f",
            ImageName: "Do.PNG",
            ImageLink:
              "http://res.cloudinary.com/dqywrcgrr/image/upload/v1681464237/90480742-146f-4043-a39d-c6ec6f6ffa0f.png",
            ObjectId: "00000000-0000-0000-0000-000000000000",
            IsDefault: 0,
          },
          {
            ImageId: "ac6bddcb-a5dd-4609-9c72-01072bfb7cfd",
            ImageName: "Den1.PNG",
            ImageLink:
              "http://res.cloudinary.com/dqywrcgrr/image/upload/v1681464236/ac6bddcb-a5dd-4609-9c72-01072bfb7cfd.png",
            ObjectId: "00000000-0000-0000-0000-000000000000",
            IsDefault: 0,
          },
          {
            ImageId: "e886037a-f04a-4228-b21d-63861f5760cf",
            ImageName: "Trang.PNG",
            ImageLink:
              "http://res.cloudinary.com/dqywrcgrr/image/upload/v1681464240/e886037a-f04a-4228-b21d-63861f5760cf.png",
            ObjectId: "00000000-0000-0000-0000-000000000000",
            IsDefault: 0,
          },
        ],
        TotalPrice: 59500,
        TotalDel: 85000,
        PriceDel: 59500,
        ImageId: "00000000-0000-0000-0000-000000000000",
        ImageName: null,
        ImageLink: null,
        ObjectId: "00000000-0000-0000-0000-000000000000",
        IsDefault: 0,
      },
    };
  },
  methods: {
    changeTab(tab) {
      this.tabActive = tab;
    },
  },
};
</script>
<style></style>
