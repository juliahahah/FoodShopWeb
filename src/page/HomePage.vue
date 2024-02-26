<template>
  <!-- Navbar -->
  <Navbar />
  <!--首頁圖 -->

  <div class="text-center mt-[-30px] relative">
    <img
      src="https://www.kungfutea.com.tw/upload/banner_list/twL_banner_22J07_THrQYfhJbr.jpg"
      class="w-full"
    />
    <p
      class="md:text-[80px] text-[40px]  text-white  font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      猴猴早午餐<br>
      <a class=" mt-[10px] md:text-[40px] text-[20px]"> 我們堅持給顧客最好的 </a>
    </p>
  </div>

  <!-- Hero -->
  <div class="max-w-[85rem] mx-auto px-4 mt-[80px]">
    <!-- Grid -->
    <div
      class="grid md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 xl:gap-20 items-center"
    >
      <div class="ml-10 mr-10 text-center lg:text-left">
        <h1 class="lg: text-[40px] font-bold leading-tight">
          <a class="text-stone-500">猴猴</a>早午餐
        </h1>

        <p class="mt-[20px] text-[25px] text-gray-800 dark:text-gray-400">
          品味美好時光，猴猴早午餐店為您提供極致的用餐體驗。我們精心挑選新鮮食材，製作出口感十足、美味可口的早午餐料理。不僅味道令人陶醉，更有舒適的用餐環境，讓您感受到家的溫馨。
        </p>
      </div>

      <!--炒飯圖 -->
      <div class="flex justify-center items-center">
        <img
          class="rounded-lg"
          width="500"
          height="200"
          src="https://tokyo-kitchen.icook.network/uploads/recipe/cover/409908/a86554814474b844.jpg"
          max-height="300px"
        />
      </div>
    </div>
  </div>
  <!-- End Hero -->

  <!-- product -->

  <div class="bg-white">
    <div
      class="mt-[80px] mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h1 class="text-[40px] font-bold mb-[40px] text-center lg:">
        主打經典
      </h1>
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4"
      >
        <a href="#test_menu" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              src="https://ciao.kitchen/wp-content/uploads/2017/10/166e75_19d60bf89dbb4bc7b6548847ca8ab81emv2_d_1365_2048_s_2.jpg?crop=0.490xw:0.980xh;0,0.0196xh&resize=640:*"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-[20px] text-gray-700">芝麻饅頭</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
        </a>
        <a href="#test_menu" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/roasted-salmon-with-vegetables-royalty-free-image-1638849406.jpg?crop=0.669xw:1.00xh;0.153xw,0&resize=640:*"
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>

          <h3 class="mt-4 text-[20px] text-gray-700">清新牛排</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#test_menu" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
            <img
              src="https://plugins-media.makeupar.com/smb/blog/post/2022-09-23/f7f6439f-2498-42ef-8fbe-9a59ec6e527f.jpg"
              alt="Person using a pen to cross a task off a productivity paper card."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-[20px] text-gray-700">活力沙拉</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
        </a>
        <a href="#test_menu" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              src="https://ciao.kitchen/wp-content/uploads/2017/10/166e75_bc7c9a77904e497294035d858a322b96mv2_d_3168_4752_s_4_2-e1555660592712.jpg"
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-[20px] text-gray-700">活力陽春麵</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#test_menu" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              src="https://ciao.kitchen/wp-content/uploads/2017/10/166e75_19d60bf89dbb4bc7b6548847ca8ab81emv2_d_1365_2048_s_2.jpg?crop=0.490xw:0.980xh;0,0.0196xh&resize=640:*"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-[20px] text-gray-700">芝麻饅頭</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
        </a>
        <a href="#test_menu" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/roasted-salmon-with-vegetables-royalty-free-image-1638849406.jpg?crop=0.669xw:1.00xh;0.153xw,0&resize=640:*"
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-[20px] text-gray-700">清新料理</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <!-- End product -->
      </div>
    </div>
    <!-- More products... -->
    <div class="mb-[80px] text-center">
      <a href="#test_menu" class="text-3xl font-medium"> ~~查看完整菜單~~ </a>
    </div>
  </div>

  <Ft></Ft>
</template>
<script setup>
import { ref, onMounted } from "vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Navbar from "@/components/Navbar.vue";
import Ft from "../components/footer.vue";
// 配置 Swiper 以使用 Pagination 和 Autoplay 組件
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper as SwiperCore, Pagination, Navigation, Autoplay } from "swiper";

SwiperCore.use([Pagination, Navigation, Autoplay]);
const showDropdown = ref(false);
const dropdownOptions = ref(["Option 1", "Option 2", "Option 3"]);
let mySwiper = null;

const goTomenu = () => {
  // 使用 router.push 導航到 Shop 頁面
  $router.push("/test_menu");
};

const goToSend = () => {
  // 使用 router.push 導航到 Send 頁面
  $router.push("/send");
};

const pagination = ref({
  clickable: true,
  renderBullet: (index, className) => {
    return `<span class="${className}">${index + 1}</span>`;
  },
});

const modules = ref([Pagination]);
</script>



<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.product-image {
 
  height: 300px !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<style>
.swiper-button-next:after {
  color: gray !important;
  font-weight: 1000;
  margin-right: 25px; /* 調整這個值以改變左邊的位置 */
}

.swiper-button-prev:after {
  color: gray !important;
  font-weight: 800;
}
.swiper-pagination-bullet {
  background: gray;
  width: 20px;
  height: 20px;
}
/* 假设你给swiper容器加了一个类名为mySwiper，你可以根据实际情况修改类名 */
.mySwiper img {
  width: 100%;
  height: auto;
}
</style>