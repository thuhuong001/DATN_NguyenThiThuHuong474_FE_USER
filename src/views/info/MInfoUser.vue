<template>
    <div class="u-info-user">
        <div class="info-left">
            <div class="title">
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="">
                <div class="title-info">
                    Nguyễn Văn Dương
                </div>
            </div>
            <ul class="info-list-tab">
                <li class="info-tab-item">
                    Tài khoản của tôi
                    <div class="info-list-tab-2">
                        <li class="info-tab-item">Hồ sơ</li>
                        <li class="info-tab-item">Địa chỉ</li>
                    </div>
                </li>
                <li class="info-tab-item">Đơn mua</li>
            </ul>
        </div>
        <div class="info-right">
            <div class="my-profile">
                <h4>Hồ sơ của tôi</h4>
                <div>Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                <div class="form-info">
                    <div class="control-input">
                        <label for="">Họ và tên : </label>
                        <input type="text" value="Nguyễn Văn Dương"> 
                    </div>
                    <div class="control-input">
                        <label for="">Email : </label>
                        <input type="text" value="duongvipro2k1@gmail.com"> 
                    </div>
                    <div class="control-input">
                        <label for="">Số điện thoại : </label>
                        <input type="text" value="0328669614"> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"MInfoUser",
    components:{
    }
}
</script>
<style>

@import url(./info.css);
</style>