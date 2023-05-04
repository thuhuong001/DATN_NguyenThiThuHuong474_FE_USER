<template>
    <div class="u-info-user">
        <div class="info-left">
            <div class="title">
                <img src="" alt="">
                <div class="title-info">
                    Nguyễn Thị Thu Hường
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
                        <input type="text" value="Nguyễn Thị Thu Hường"> 
                    </div>
                    <div class="control-input">
                        <label for="">Email : </label>
                        <input type="text" value="thuhuong@gmail.com"> 
                    </div>
                    <div class="control-input">
                        <label for="">Số điện thoại : </label>
                        <input type="text" value="0867652293"> 
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