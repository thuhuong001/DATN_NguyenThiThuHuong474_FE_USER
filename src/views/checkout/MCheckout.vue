<template>
  <div class="checkout">
    <div class="checkout-address">

      <FolderRoutes :folderRoutes="folderRoutes" />
      <h3 class="method-title">Thông tin giao hàng</h3>
      <div class="combo-select">
        <MCombobox
          :data="listAddressReceive"
          v-model="AddressReceiveDefault.AddressReceiveId"
          @itemSelected="(item) => (AddressReceiveDefault = item)"
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
      <div class="order-noted-block">
        <label for="" class="note-label">Ghi chú đơn hàng</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          class="form-control"
          v-model="formCheckout.Note"
          placeholder="Nếu bạn có yêu cầu nào khác khi nhận hàng, xin hãy nhập ở đây"
        ></textarea>
      </div>
      <div class="shipping-method">
        <h3 class="method-title">Phương thức vận chuyển</h3>
        <div class="method-list">
          <div
            class="method-item"
            v-for="(shipment, index) in shipments"
            :key="index"
          >
            <div class="method-left">
              <input
                type="radio"
                name="shipping-method"
                :id="'htgh-' + index"
                :value="shipment.ShipmentCode"
                v-model="ShippingMethod"
                :checked="ShippingMethod == shipment.ShipmentCode"
              />
              <label :for="'htgh-' + index" class="htgh"
                >{{ shipment.ShipmentName }}
                <span v-if="ShippingMethod == shipment.ShipmentCode"
                  >({{ shipment.DateReceive }})</span
                ></label
              >
            </div>
            <div class="method-right">
              {{ $state.formatPrice(shipment.PriceShip) }}
            </div>
          </div>
        </div>
      </div>
      <div class="payment-methods">
        <h3 class="method-title">Phương thức thanh toán</h3>
        <div class="method-list">
          <!-- <div class="method-item">
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
          </div> -->
          <div class="method-item">
            <div class="method-left">
              <input
                type="radio"
                name="payment-methods"
                id="COD"
                :value="enumPayment.TTKLH"
                v-model="paymentMethod"
                checked
              />
              <img
                src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=4"
              />
              <label for="COD">Thanh toán khi giao hàng (COD)</label>
            </div>
          </div>
        </div>
      </div>
      <div class="checkout-btn">
        <div class="checkout-btn-cart" @click="$router.push('/cart')">
          Giỏ hàng
        </div>
        <div class="checkout-btn-pay" @click="submitCheckout">
          Hoàn tất thanh toán
        </div>
      </div>
    </div>
    <div class="checkout-detail">
      <cart-item-checkout
        v-for="(cart, index) in carts"
        :key="index"
        :item="cart"
      />
      <hr />
      <div class="total-detail">
        <div class="total-detail-left">Tạm tính</div>
        <div class="total-detail-right">
          {{ $state.formatPrice(totalPriceProduct()) }}
        </div>
      </div>
      <div class="total-detail">
        <div class="total-detail-left">Phí vận chuyển</div>
        <div class="total-detail-right">
          {{ $state.formatPrice(getPriceShipment()) }}
        </div>
      </div>
      <hr />
      <div class="total-detail">
        <div class="total-detail-left">Tổng cộng</div>
        <div class="total-detail-right">
          {{ $state.formatPrice(totalPriceProduct() + getPriceShipment()) }}
        </div>
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
  },
  created: async function () {
    // eslint-disable-next-line no-debugger
    debugger;
    this.$state.isHeaderAndFooterShow = false;
    let res = await new baseApi("Cart").getByFilter({});
    this.carts = res.Data;
    res = await new baseApi("Shipment").getByFilter({});
    this.shipments = res.Data;
    this.ShippingMethod = this.shipments ? this.shipments[0].ShipmentCode : "2";
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
      ShippingMethod: "1",
      paymentMethod: enumH.paymentMethod.TTKLH,
      shipments: [],
      enumPayment: enumH.paymentMethod,
      folderRoutes: [
        {
          url: "/cart",
          title: "Giỏ hàng",
        },
        {
          url: "/checkout",
          title: "Thông tin giao hàng ",
        },
      ],
      apiRegion: new regionApi(),
      listAddressReceive: [],
      AddressReceiveDefault: {},
      carts: [],
    };
  },
  methods: {
    async getListAddressReceive() {
      const data = await new baseApi("AddressReceive").getByFilter({});
      this.listAddressReceive = data.Data;
      const addressDefault = this.listAddressReceive.find((x) => x.IsDefault);
      this.AddressReceiveDefault = addressDefault ? addressDefault : {};
    },
    async closePopupAddress() {
      this.isShowAddressReceive = false;
      await this.getListAddressReceive();
    },
    totalPriceProduct() {
      var totalPrice = 0;
      this.carts.forEach((x) => {
        totalPrice += x.TotalPrice;
      });
      return totalPrice;
    },
    totalQuantity() {
      var totalQuantity = 0;
      this.carts.forEach((x) => {
        totalQuantity += x.Quantity;
      });
      return totalQuantity;
    },
    getPriceShipment() {
      let price = this.shipments.find(
        (x) => x.ShipmentCode == this.ShippingMethod
      )?.PriceShip;
      return price ? price : 0;
    },
    async submitCheckout() {
      try {
        // eslint-disable-next-line no-debugger
        debugger;
        this.addProperty();

        var orderDetails = [];
        this.carts.forEach((x) => {
          orderDetails.push({
            Quantity: x.Quantity,
            PriceDel: x.PriceDel,
            PriceSale: x.PriceSale,
            ProductVariantId: x.ProductVariantId,
            Discount: x.Discount,
            ImageLink : x.Images ? x.Images[0].ImageLink: '',
            ProductName : x.ProductName,
            ColorName : x.ColorName,
            SizeCode : x.SizeCode,
          });
        });
        let formBody = this.formCheckout;
        formBody.OrderDetails = orderDetails;

        await new baseApi("Order").create(formBody);
      } catch (error) {
        console.log(error);
      }
    },
    addProperty() {
      this.formCheckout.TotalAmount = this.totalQuantity();
      this.formCheckout.TotalPrice = this.totalPriceProduct() + this.getPriceShipment();
      this.formCheckout.PaymentMethod = this.paymentMethod;
      const shipment= this.shipments.find((x) => x.ShipmentCode == this.ShippingMethod);
      this.formCheckout.ShipmentId = shipment.ShipmentId;
      this.formCheckout.PriceShip = shipment.PriceShip;
      this.formCheckout.AddressReceiveId =this.AddressReceiveDefault.AddressReceiveId;
      this.formCheckout.Receiver = this.AddressReceiveDefault.Receiver;
      this.formCheckout.Phone = this.AddressReceiveDefault.Phone;
      this.formCheckout.AddressDetail = this.AddressReceiveDefault.AddressDetail;
      this.formCheckout.Status = enumH.enumStatusCheckout.ChoXacNhan;
    },
  },
  watch: {},
};
</script>
<style scoped>
@import url(./checkout.css);
textarea::placeholder{
  font-size: 12px;
  font-style: italic;
}
</style>
