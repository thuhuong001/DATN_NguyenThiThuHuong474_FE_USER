<template>
  <div class="checkout">
    <div class="co-address">
      <h1>Địa Chỉ Nhận Hàng</h1>
      <div class="co-info">
        <div class="co-st">
          <div>Nguyễn Thị Thu Hường</div>
          <div>0867652293</div>
        </div>
        <div class="co-address-detail">
          47 Nhân Hòa, Nhân chính, Thanh Xuân, Hà Nội
        </div>
        <div class="co-address-btn">Thay đổi</div>
      </div>
    </div>
  </div>

  <m-pop-up :isShow="true" minWidth="600px" minHeight="400px">
    <template #header>
      <h4>Địa chỉ của bạn</h4>
      <hr />
    </template>

    <div class="address-customer">
        <div class="radio-default">
            <m-radio-button :checked="true"  />
        </div>
        <div class="body-address">
            <div class="i-f-address">Nguyễn Thị Thu Hường<span>0867652293</span></div>
            <div class="i-f-address-detail">47 Nhân Hòa, Nhân chính, Thanh Xuân, Hà Nội</div>
            <div class="btn-default-address">mặc định</div>
        </div>
        <div class="acction-address">Cập nhật</div>
    </div>

    <template #footer>
      <hr />
      <div class="m-f-bw">
        <div @click="isPopUpDelete = false">
          <m-button typeBtn="close">Hủy</m-button>
        </div>
        <div>
          <m-button backgroundColor="red">Cập nhật</m-button>
        </div>
      </div>
    </template>
  </m-pop-up>
</template>
<script>
import MPopUp from "@/components/pop-up/MPopUp.vue";
import MButton from "@/components/button/MButton.vue";
import MRadioButton from '@/components/radio-button/MRadioButton.vue';
export default {
  name: "MCheckout",
  components: {
    MPopUp,
    MButton,
    MRadioButton
  },
};
</script>
<style scoped>
.header,
.footer {
  display: none !important;
}
.co-address {
  margin-top: 20px;
  background-color: white;
  padding: 20px;
}
.co-address h1 {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  color: #ee4d2d;
  margin-bottom: 20px;
  text-transform: capitalize;
  flex: 1 1 auto;
}
.co-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.co-st {
  flex-basis: 20%;
  font-weight: bold;
}
.co-address-detail {
  flex-basis: 70%;
  text-align: center;
}
.co-address-btn {
  flex-basis: 10%;
  text-align: right;
  font-weight: bold;
  cursor: pointer;
}



.address-customer{
    display: flex;
    justify-content: space-between;
}
.i-f-address{
    font-weight: 600;
}
.i-f-address span{
    margin-left: 8px;
    padding-left: 8px;
    border-left: 1px solid #a7a4a4;
    font-weight: 400;
}
.acction-address{
    color: rgb(29, 76, 244);
}
.i-f-address-detail{
    padding: 8px 0;
}
.btn-default-address{
    padding: 4px 8px;
    border: 1px solid #d57373;
    width: max-content;
    font-size: 12px;
    color: red;
    border-radius: 4px;
}
</style>
