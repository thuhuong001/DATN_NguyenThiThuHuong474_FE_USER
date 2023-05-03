<template>
    <div class="u-profile-user">
        <div class="profile-left">
            <div class="title">
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="">
                <div class="title-profile">
                    {{$state.user.FullName}}
                </div>
            </div>
            <div class="profile-list-tab">
                <div class="profile-tab-item-1">
                    <div class="div" @click="tabInfoStyle = !tabInfoStyle"><i class="fa-regular fa-user"></i>Tài khoản của tôi</div>
                </div>
                 <div class="profile-list-tab-2" :style="{height : tabInfoStyle ? '0px' : 'auto'}">
                        <div class="profile-tab-item-2" @click="changeTab(1)">Hồ sơ</div>
                        <div class="profile-tab-item-2" @click="changeTab(2)">Địa chỉ</div>
                    </div>
                <div class="profile-tab-item-1" @click="changeTab(3)"><i class="fa-regular fa-money-bill-1"></i>Đơn mua</div>
            </div>
        </div>
        <div class="profile-right">
            <m-info-user :hidden="showDetail" :isShow="tabProfile == 1 ? true : false" />
            <m-address-user  :hidden="showDetail" :isShow="tabProfile == 2 ? true : false" />
            <m-order-profile :hidden="showDetail" :isShow="tabProfile == 3 ? true : false" />

            <m-order-item-detail :isShow="showDetail" @close="showDetail = fasle" />
        </div>
    </div>
</template>
<script>
import MOrderItemDetail from '@/components/Order/MOrderItemDetail.vue'
import MAddressUser from './MAddressUser.vue'
import MInfoUser from './MInfoUser.vue'
import MOrderProfile from './MOrderProfile.vue'
export default {
    name:"MProfile",
    components:{
        MInfoUser,
        MAddressUser,
        MOrderProfile,
        MOrderItemDetail
    },
    data() {
        return {
            tabProfile : 1,
            tabInfoStyle : true,
            showDetail : true
        }
    },
    methods:{
        changeTab(tab){
            this.tabProfile = tab;
        }
    }
}
</script>
<style>

@import url(./profile.css);
</style>