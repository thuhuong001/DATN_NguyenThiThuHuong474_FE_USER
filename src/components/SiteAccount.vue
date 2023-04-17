<template>
    <div class="m-account" :style="{display : this.$state.accountLogin ? 'block' : 'none'}" >
        <div class="site_account_panel_list">
            <div class="login-panel" :style="{display : loginLayout ? 'block' : 'none'}">
                <div class="site_account_header">
                    <p class="txt-title">Đăng nhập tài khoản</p>
                    <p class="txt-small">Nhập email và mật khẩu của bạn:</p>
                </div>
                <div class="site_account_inner">
                    <m-input-custom id="email" v-model="email" textField="Email"  />
                    <m-input-custom id="password" v-model="password" textField="Mật khẩu" marginTop="12px" />
                    <div class="remember-password">
                        <m-check-box v-model="remember" /> <span >Ghi nhớ mật khẩu</span>
                    </div>
                    <m-button backgroundColor="#000000" width="100%" margin="8px 0">Đăng nhập</m-button>
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
                <m-input-custom id="email" v-model="email" textField="Email" marginTop="12px" />
                <m-button backgroundColor="#000000" width="100%" margin="8px 0">KHÔI PHỤC</m-button>
                <div class="site_account_secondary-action">
                        <div>Bạn đã nhớ mật khẩu? <span @click="loginLayout = true">Trở về đăng nhập</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MInputCustom from '@/components/MInputCustom.vue';
import MCheckBox from './checkbox/MCheckBox.vue';
import MButton from './button/MButton.vue';
export default {
    name:"SiteAccount",
    components:{
        MInputCustom,
        MCheckBox,
        MButton
    },
    data() {
        return {
            email : "",
            password : "",
            remember : true,
            loginLayout: true
        }
    },
    methods:{
        redirectRegister(){
            this.$router.push('/account/register');
            this.$state.accountLogin = false;
        }
    }
}
</script>
<style scoped>
</style>