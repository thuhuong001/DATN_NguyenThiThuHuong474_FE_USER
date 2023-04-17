<template>
  <div class="wrapbox-content-account">
    <div class="userbox customers_accountForm">
      <div class="header-page">
        <h1>Tạo tài khoản</h1>
      </div>
      <div class="create_customer">
        <div class="errors" v-if="errors">{{ errors }}</div>
        <m-input
          textField="Họ"
          :required="true"
          name="firstName"
          :errorMsg="errorMsgObjectInput?.firstName"
          @message-error-input="firstName"
          v-model="modelRegister.firstName"
        />
        <m-input
          textField="Tên"
          :required="true"
          name="lastName"
          :errorMsg="errorMsgObjectInput?.lastName"
          @message-error-input="lastName"
          v-model="modelRegister.lastName"
        />
        <m-input
          textField="Email"
          :required="true"
          name="Email"
          :errorMsg="errorMsgObjectInput?.Email"
          @message-error-input="Email"
          v-model="modelRegister.email"
        />
        <m-input
          textField="Số điện thoại"
          :required="true"
          name="Phone"
          :errorMsg="errorMsgObjectInput?.Phone"
          @message-error-input="Phone"
          v-model="modelRegister.Phone"
        />
        <m-date-picker
          textField="Ngày sinh"
          name="BirthOfDate"
          ref="BirthOfDate"
          :rules="[rules.NOT_EMPTY, rules.ADULT]"
          v-model="modelRegister.BirthOfDate"
          :errorMsg="errorMsgObjectInput?.BirthOfDate"
          @message-error-input="handleBindMessageInput"
        />
        <m-input
          textField="Mật khẩu"
          :required="true"
          type="password"
          name="Password"
          :errorMsg="errorMsgObjectInput?.Password"
          @message-error-input="Password"
          v-model="modelRegister.Password"
        />
        <m-input
          textField="Nhập lại mật khẩu"
          :required="true"
          type="ComfirmPassword"
          name="ComfirmPassword"
          :errorMsg="errorMsgObjectInput?.ComfirmPassword"
          @message-error-input="ComfirmPassword"
          v-model="modelRegister.ComfirmPassword"
        />
        <m-button @click="registerSubmit" >Đăng ký</m-button>
      </div>
    </div>
  </div>
</template>
<script>
import MInput from "@/components/input/MInput.vue";
import msEnum from "@/common/enum";
import MDatePicker from "@/components/datepicker/MDatePicker.vue";
import resources from "@/common/resource";
import MButton from '@/components/button/MButton.vue';
export default {
  name: "MRegister",
  components: {
    MInput,
    MDatePicker,
    MButton
  },
  data() {
    return {
      msEnum: msEnum,
      modelRegister: {},
      errors: "",
      rules: resources.FORM_RULES, // Rules validate,
      errorMsgObjectInput: {},
    };
  },
  methods:{
    async registerSubmit(){

    }
  }
};
</script>
<style scoped>
.customers_accountForm {
  max-width: 620px;
  margin: 35px auto 50px;
  background: #ffffff;
  padding: 25px 30px 30px;
}
.header-page h1 {
  position: relative;
  text-align: center;
  font-size: 25px;
  color: #000000;
  font-weight: 700;
  margin: 0px 0;
  line-height: initial;
}
.errors {
  margin-top: 16px !important;
  border-radius: 5px;
  padding: 12px 15px;
  font-size: 13px;
  color: #856404;
  margin: 5px 0 15px;
  font-weight: 500;
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
}
</style>
