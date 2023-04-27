<template>
  <div class="checkout">
    <div class="checkout-address">
      <a href="/"><img src="/img/logo.2fdf4e31.webp" alt="" class="img-checkout" /></a>
      <FolderRoutes :folderRoutes="folderRoutes" />
      <h3 class="method-title">Thông tin giao hàng</h3>
      <div class="combo-select">
        <MCombobox
          :data="listAddressReceive"
          v-model="AddressReceiveDefault.AddressReceiveId"
          @itemSelected="(item) => AddressReceiveDefault = item"
          ref="AddressReceive"
          propName="AddressDetail"
          propValue="AddressReceiveId"
          name="AddressReceive"
          textField="Lựa chọn địa chỉ"
          :errorMsg="errorMsgObjectInput?.AddressReceiveId"
          @message-error-input="handleBindMessageInput"
        />
      </div>
      <div class="add-address" @click="isShowAddressReceive = true">
        Thêm địa chỉ
      </div>
      <div class="m-t-16"></div>
      <MInput
        textField="Họ và tên"
        v-model="AddressReceiveDefault.Receiver"
        :required="true"
        name="Receiver"
        :isReadonly="true"
        ref="Receiver"
        :tabIndex="2"
        :rules="[rules.NOT_EMPTY, `${rules.MAX_LENGTH}|100`]"
        :errorMsg="errorMsgObject?.Receiver"
        @message-error-input="handleBindMessageInput"
      />
      <MInput
        textField="Số điện thoại"
        v-model="AddressReceiveDefault.Phone"
        :required="true"
        name="Phone"
        ref="Phone"
        :isReadonly="true"
        :tabIndex="2"
        :rules="[rules.NOT_EMPTY, `${rules.MAX_LENGTH}|100`]"
        :errorMsg="errorMsgObject?.Phone"
        @message-error-input="handleBindMessageInput"
      />
      <MInput
        textField="Địa chỉ"
        v-model="AddressReceiveDefault.AddressDetail"
        :required="true"
        name="Address"
        ref="Address"
        :isReadonly="true"
        :tabIndex="2"
        :rules="[rules.NOT_EMPTY, `${rules.MAX_LENGTH}|100`]"
        :errorMsg="errorMsgObject?.Address"
        @message-error-input="handleBindMessageInput"
      />
      <div class="shipping-method">
        <h3 class="method-title">Phương thức vận chuyển</h3>
        <div class="method-list">
          <div class="method-item">
            <div class="method-left">
              <input
                type="radio"
                name="method"
                id="tietkiem"
                :value="25000"
                v-model="ShippingCost"
              />
              <label for="tietkiem">Giao hàng tiết kiệm</label>
            </div>
            <div class="method-right">25,000₫</div>
          </div>
          <div class="method-item">
            <div class="method-left">
              <input
                type="radio"
                name="method"
                id="nhanh"
                :value="35000"
                v-model="ShippingCost"
              />
              <label for="nhanh">Giao hàng nhanh</label>
            </div>
            <div class="method-right">35,000₫</div>
          </div>
        </div>
      </div>
      <div class="payment-methods">
        <h3 class="method-title">Phương thức thanh toán</h3>
        <div class="method-list">
          <div class="method-item">
            <div class="method-left">
              <input
                type="radio"
                name="method"
                id="VNPAY"
                :value="enumPayment.TTKLH"
                v-model="ShippingPayment"
              />
              <img
                src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                alt=""
              />
              <label for="VNPAY"
                >Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY</label
              >
            </div>
          </div>
          <div class="method-item">
            <div class="method-left">
              <input
                type="radio"
                name="method"
                id="COD"
                :value="enumPayment.VNPAY"
                v-model="ShippingPayment"
              />
              <img
                src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
                alt=""
              />
              <label for="COD">Thanh toán khi giao hàng (COD)</label>
            </div>
          </div>
        </div>
      </div>
      <div class="checkout-btn">
        <div class="checkout-btn-cart">Giỏ hàng</div>
        <div class="checkout-btn-pay">Hoàn tất thanh toán</div>
      </div>
    </div>
    <div class="checkout-detail">
      <cart-item-checkout />
      <cart-item-checkout />
      <cart-item-checkout />
      <hr />
      <label for="discount-code" class="lb-discount-code">Mã giảm giá</label>
      <div class="form__row" style="width: 100%">
        <div class="form__row f-bw" style="width: 60%">
          <input type="text" id="discount-code" class="m-input discount-code" />
        </div>
        <div class="form__row f-bw" style="width: 35%">
          <MButton width="100%">Sử dụng</MButton>
        </div>
      </div>
      <hr />
      <div class="total-detail">
        <div class="total-detail-left">Tạm tính</div>
        <div class="total-detail-right">249,000₫</div>
      </div>
      <div class="total-detail">
        <div class="total-detail-left">Phí vận chuyển</div>
        <div class="total-detail-right">30,000₫</div>
      </div>
      <hr />
      <div class="total-detail">
        <div class="total-detail-left">Tổng cộng</div>
        <div class="total-detail-right">279,000₫</div>
      </div>
    </div>
  </div>
  <address-receive
    :isShow="isShowAddressReceive"
    @update:isShow="closePopupAddress"
    v-model="AddressReceiveDefault"
  />
</template>
<script>
import mixinForm from "@/mixins/mixinForm.js";
import FolderRoutes from "@/components/FolderRoutes.vue";
import AddressReceive from "@/components/AddressReceive.vue";
import MCombobox from "@/components/combobox/MCombobox.vue";
import MInput from "@/components/input/MInput.vue";
import resources from "@/common/resource";
import enumH from "@/common/enum";
import CartItemCheckout from "@/components/Cart/CartItemCheckout.vue";
import MButton from "@/components/button/MButton.vue";
import regionApi from "@/api/regionApi";
import baseApi from "@/api/baseApi";
export default {
  name: "MCheckout",
  components: {
    FolderRoutes,
    AddressReceive,
    MCombobox,
    MInput,
    CartItemCheckout,
    MButton,
  },
  created: async function () {
    this.$state.isHeaderAndFooterShow = false;
    await this.getListAddressReceive();
  },
  unmounted() {
    this.$state.isHeaderAndFooterShow = true;
  },
  mixins: [mixinForm],
  data() {
    return {
      formCheckout: {},
      isShowAddressReceive: false,
      rules: resources.FORM_RULES, // Rules validate
      Provinces: [],
      Districts: [],
      Wards: [],
      ShippingCost: 0,
      ShippingPayment: 0,
      enumPayment: enumH.paymentMethod,
      folderRoutes: [
        {
          url: "/cart",
          title: "Giỏ hàng",
        },
        {
          url: "/checkouts/123",
          title: "Thông tin giao hàng ",
        },
      ],
      apiRegion: new regionApi(),
      listAddressReceive: [],
      AddressReceiveDefault: {},
    };
  },
  methods: {
    async getListAddressReceive() {
      const data = await new baseApi("AddressReceive").getByFilter({});
      this.listAddressReceive = data.Data;
      const addressDefault = this.listAddressReceive.find(x => x.IsDefault);
      this.AddressReceiveDefault = addressDefault ? addressDefault : {};
    },
    async closePopupAddress(){
      this.isShowAddressReceive = false;
      await this.getListAddressReceive();
    }
  },
  watch: {},
};
</script>
<style scoped>
@import url(./checkout.css);
</style>
