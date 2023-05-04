<template>
  <footer class="footer" v-if="$state.isHeaderAndFooterShow">
    <!-- Footer -->
    <MDBFooter :text="['center', 'lg-start', 'muted']">
      <!-- Section: Social media -->
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span>Kết nối với chúng tôi trên các mạng xã hội:</span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
          <a href="" class="me-4 text-reset">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="facebook-f"
            ></MDBIcon>
          </a>
          <a href="" class="me-4 text-reset">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="twitter"
            ></MDBIcon>
          </a>
          <a href="" class="me-4 text-reset">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="google"
            ></MDBIcon>
          </a>
          <a href="" class="me-4 text-reset">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="instagram"
            ></MDBIcon>
          </a>
          <a href="" class="me-4 text-reset">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="linkedin"
            ></MDBIcon>
          </a>
          <a href="" class="me-4 text-reset">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="github"
            ></MDBIcon>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <section class="">
        <MDBContainer class="text-center text-md-start mt-5">
          <!-- Grid row -->
          <MDBRow class="mt-3">
            <!-- Grid column -->
            <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3 link-secondary"></i>MoonShop
              </h6>
              <p>
                MoonShop
              </p>
            </MDBCol>
            <!-- Grid column -->

            <!-- Grid column -->
            <MDBCol md="2" lg="2" xl="2" class="mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">HỆ THỐNG CỬA HÀNG</h6>
              <p>
                <a href="#!" class="text-reset"><strong>Hotline CSKH: </strong>024.7300.8888</a>
              </p>
              <p>
                <a href="#!" class="text-reset"><strong>Email: </strong>cskh@moonshop.vn</a>
              </p>
            </MDBCol>
            <!-- Grid column -->

            <!-- Grid column -->
            <MDBCol md="3" lg="2" xl="2" class="mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Hỗ trợ Khách hàng</h6>
              <li class="sp-item">
                <a href="#!" class="text-reset">Hướng dẫn chọn cỡ giày</a>
              </li>
              <li class="sp-item">
                <a href="#!" class="text-reset">Chính sách đổi trả</a>
              </li>
              <li class="sp-item">
                <a href="#!" class="text-reset">Thanh toán giao nhận</a>
              </li>
              <li class="sp-item">
                <a href="#!" class="text-reset">Chính sách bảo mật</a>
              </li>
              <li class="sp-item">
                <a href="#!" class="text-reset">Điều khoản & Dịch vụ</a>
              </li>
            </MDBCol>
            <!-- Grid column -->

            <!-- Grid column -->
            <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Hỗ trợ/Tư vấn mua online
              </h6>
              <p>
                <i class="fas fa-home me-3 link-secondary"></i>
                <span>47 Nhân Hòa, Nhân chính, Thanh Xuân, Hà Nội</span>
              </p>
              <p>
                <i class="fas fa-envelope me-3 link-secondary"></i>
                thuhuonga2504@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" class="me-3 link-secondary" />
                + 84867 652 293
              </p>
              <p>
                <MDBIcon icon="print" class="me-3 link-secondary" />
                + 84867 652 293
              </p>
            </MDBCol>
            <!-- Grid column -->
          </MDBRow>
          <!-- Grid row -->
        </MDBContainer>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05)"
      >
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/"
          >MDBootstrap.com</a
        >
      </div>
      <!-- Copyright -->
    </MDBFooter>
    <!-- Footer -->
  </footer>
</template>
<script>
import {
  MDBFooter,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-vue-ui-kit";
export default {
  name: "TheHeader",
  components: {
    MDBFooter,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBContainer,
  },
};
</script>
<style scoped>
.text-muted {
  color: black !important;
}
.bg-light {
  background-color: #e2dddd !important;
}
.link-secondary {
  color: black !important;
}
.sp-item {
  list-style-type: circle;
  font-size: 14px;
  margin-top: 12px;
}
.sp-item:hover {
  color: #c27c2c;
}
.text-reset{
  font-size: 14px;
}
</style>
