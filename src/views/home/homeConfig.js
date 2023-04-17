class config {
  constructor() {
    this.settingsPromotion = {
      itemsToShow: 4,
      wrapAround: true,
      snapAlign: "start",
    };
    this.breakpointsPromotion = {
      300: {
        itemsToShow: 1,
      },
      956: {
        itemsToShow: 2,
      },
      // 1024 and up
      1225: {
        itemsToShow: 3,
      },
      1476: {
        itemsToShow: 4,
      },
    };
    this.settingSliderBar  = {
        itemsToShow : 1,
        breakpoints : "breakpoints",
        wrapAround : "true",
        autoplay : 5000,
        pauseAutoplayOnHover : true,
    },
    this.dataSliders =[
        "../../assets/img/sliders/slider-1.webp",
        "../../assets/img/sliders/slider-1.webp",
        "../../assets/img/sliders/slider-1.webp",
        "../../assets/img/sliders/slider-1.webp",
      ];
    this.products = [
        {
          title:
            "Giày Sandal Gót Trụ Phối Khoá Trang Trí",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Giày Sandal Gót Trụ Phối Khoá Trang Trí",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Giày Sandal Gót Trụ Phối Khoá Trang Trí",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },{
          title:
            "Giày Sandal Gót Trụ Phối Khoá Trang Trí",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Giày Sandal Gót Trụ Phối Khoá Trang Trí",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Giày Sandal Gót Trụ Phối Khoá Trang Trí",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },{
          title:
            "Giày Sandal Gót Trụ Phối Khoá Trang Trí",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Giày Sandal Gót Trụ Phối Khoá Trang Trí",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
        {
          title:
            "Giày Cao Gót Slingback Phối Khoá",
          price: 175000,
          price_del: 250000,
          colorEnum: [1, 2, 3],
          link: "../assets/img/avt.png",
          number_mass: 30,
        },
      ];
      this.breakpointsProducts = { 
        0 :{
        itemsToShow: 1,
        },
        747 :{
          itemsToShow: 2,
        },
        975 :{
          itemsToShow: 3,
        },
        // 1024 and up
        1200: {
          itemsToShow: 4,
        },
        1406: {
          itemsToShow: 5,
        },
      };
    this.settingsProduct = {
        itemsToShow: 5,
        wrapAround: true,
        snapAlign: "start",
    }
  }
}
export default config;
