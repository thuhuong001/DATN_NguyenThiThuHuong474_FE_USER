<template>
    <div class="m-account" v-if="modelValue" v-click-outside="clickOutSide">
        <div class="site_account_panel_list">
            <div class="login-panel" :style="{display : loginLayout ? 'block' : 'none'}">
                <div class="site_account_header">
                    <p class="txt-title">Đăng nhập tài khoản</p>
                    <p class="txt-small">Nhập email và mật khẩu của bạn:</p>
                </div>
                <div class="site_account_inner">
                    <m-input id="email" v-model="formLogin.Email" placeholder="Email" textField="Email"  />
                    <m-input id="password" v-model="formLogin.Password" placeholder="Mật khẩu" type="password" textField="Mật khẩu" marginTop="12px" />
                    <div class="remember-password">
                        <m-check-box v-model="formLogin.Remember" /> <span >Ghi nhớ mật khẩu</span>
                    </div>
                    <m-button backgroundColor="#000000" width="100%" margin="8px 0" @click="signin">Đăng nhập</m-button>
                    <m-button backgroundColor="rgb(221, 75, 57)" width="100%" margin="8px 0">Đăng nhập Google</m-button>
                    <m-button backgroundColor="rgb(59, 89, 152)" width="100%" margin="8px 0">Đăng nhập Facebook</m-button>
                    <div class="site_account_secondary-action">
                        <div>Khách hàng mới? <span @click="redirectRegister">Tạo tài khoản</span></div>
                        <div>Quên mật khẩu? <span @click="loginLayout = false">Khôi phục mật khẩu</span></div>
                    </div>
                </div>
            </div>
            <div class="recover-panel" :style="{display : loginLayout ? 'none' : 'block'}">
                <div class="site_account_header">
                    <p class="txt-title">Khôi phục mật khẩu</p>
                    <p class="txt-small">Nhập email của bạn:</p>
                </div>
                <m-input id="email" v-model="email" placeholder="Nhập email muốn lấy lại" textField="Email" marginTop="12px" />
                <m-button backgroundColor="#000000" width="100%" margin="8px 0">KHÔI PHỤC</m-button>
                <div class="site_account_secondary-action">
                        <div>Bạn đã nhớ mật khẩu? <span @click="loginLayout = true">Trở về đăng nhập</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MCheckBox from './checkbox/MCheckBox.vue';
import MButton from './button/MButton.vue';
import MInput from './input/MInput.vue';
import authApi from "@/api/authApi";
export default {
    name:"SiteAccount",
    components:{
        MCheckBox,
        MButton,
        MInput
    },
    props:{
        modelValue : Boolean
    },
    data() {
        return {
            formLogin : {
                Email : "",
                Password : "",
                Remember : true,
                RoleType : 1
            },
            loginLayout: true
        }
    },
    methods:{
        redirectRegister(){
            this.$router.push('/account/register');
            this.$emit("update:modelValue",false);
        },
        async signin(){
            try {
                const res = await new authApi().signin(this.formLogin);
                if(!res.ErrorCode){
                    localStorage.setItem('token', res.Data.Token);
                    this.$state.user = res.Data.Customer;
                    this.$state.setUser(res.Data.Customer);
                    this.$state.isShowLogin = false;
                }
            } catch (error) {
                console.log(error);
            }
        },
        clickOutSide(e){
           this.$emit("click-outside",e);
        }
    }
}
</script>
<style scoped>
</style>