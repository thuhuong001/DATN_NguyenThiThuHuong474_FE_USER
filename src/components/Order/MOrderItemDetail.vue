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
        <h6>Nguyễn Thị Thu Hường</h6>
        <div>(+84) 867652293</div>
        <div>
          47 Nhân Hòa, Nhân chính, Thanh Xuân, Hà Nội
        </div>
      </div>
      <div class="info-product">
        <cart-item-checkout :item="item" />
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
import CartItemCheckout from "../Cart/CartItemCheckout.vue";
export default {
  components: {
    CartItemCheckout,
  },
  props:{
    isShow:Boolean
  },
  data() {
    return {
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
        ColorName: "Vàng",
        SizeCode: "35",
        Images: [
          {
            ImageId: "26ab4b7a-1b62-4918-a5ec-d4f9350acad7",
            ImageName: "Mau.PNG",
            ImageLink:
              "http://res.cloudinary.com/drcxu9mfu/image/upload/v1683124652/b8a69707-4803-4550-8a32-6065fd89faa8.webp",
            ObjectId: "00000000-0000-0000-0000-000000000000",
            IsDefault: 0,
          },
          {
            ImageId: "624980d5-8a8e-42be-9345-a5029cdd882e",
            ImageName: "XanhThan.PNG",
            ImageLink:
              "http://res.cloudinary.com/drcxu9mfu/image/upload/v1683124652/b8a69707-4803-4550-8a32-6065fd89faa8.webp",
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
};
</script>
<style></style>
