<template>
    <div class="pv-popup">
        <div class="pv-popup-title">Đánh giá sản phẩm</div>
        <div class="pv-popup-rate pv-flex">
            <div>Chất lượng sản phẩm</div>
            <div class="pv-rate-star pv-flex">
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
                <div><i class="fa-solid fa-star"></i></div>
            </div>
            <div class="pv-rate-level">Tuyệt vời</div>
        </div>
        <div class="pv-popup-rate-comment">
            <textarea class="pv-text-rate" placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm này cho người khác nhé" name="" id="" cols="60" rows="5"></textarea>
        </div>
        <div class="pv-popup-control pv-flex">
            <button class="pv-button-tranparent">Trở lạ<i></i></button>
            <button class="pv-button-complete">Hoàn Thành</button>
        </div>
        
    </div>
</template>
<script>
    export default{
        name: "PvCombank",
    }
</script>
<style scoped>
    .pv-flex{
    display: flex;
}
.pv-popup{
    width: 510px;
    height: 245px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
}
.pv-popup-title{
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    padding-bottom: 10px;
}
.pv-popup-rate{
    padding-left: 15px;
    margin-bottom: 20px;
}
.pv-rate-star{
    margin-left: 30px;
    margin-right: 20px;
}
.pv-rate-star, .pv-rate-level{
    color: #fed330;
    font-weight: bold;
}
.pv-text-rate{
    resize: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 15px;
    margin-bottom: 10px;
    padding: 10px;
    outline: none;
}
.pv-button-tranparent, .pv-button-complete{
    height: 36px;
    width: 120px;
    border-radius: 2px;
    border: none;
    outline: none;
    cursor: pointer;
}
.pv-popup-control{
    justify-content: right;
    padding-bottom: 15px;
    padding-right: 15px;
    align-items: center;
}
.pv-button-tranparent{
    background-color: #fff;
}
.pv-button-complete{
    background-color: #e74c3c;
    color: #fff;
}
</style>