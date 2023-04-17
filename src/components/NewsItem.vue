<template>
    <div class="news">
        <div class="news-img">
            <img src="../assets/img/Products/giay4.webp" alt="">
        </div>
        <div class="news-content">
            <div class="news-title truncate_two-row">
                MUA Giày SANDAL NHẬN NGAY VOUCHER MUA SẮM TRỊ GIÁ 115K
            </div>
            <div class="news-date">
                13/03/2023
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"NewsItem"
}
</script>
<style>
.home-news{
    padding: 16px;
    background-color: var(--color-content);
}
.list-news{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.list-news-title{
    font-weight: bold;
    font-size: 16px;
}
.list-news-navigation{
    font-size: 13px;
    cursor: pointer;
}
.news{
    display: flex;
    min-width: 300px;
    width: 30%;
    margin: 12px 0;
}
.news-img{
    width: 150px;
    height: 100%;
    padding-right: 16px;
}
.news-title{
   display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  text-overflow: ellipsis;
}
.news-date{
    font-size: 13px;
    color: rgb(142, 141, 141);
}
</style>