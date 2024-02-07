<template>
  <!-- Navbar -->
  <Navbar />
  <!-- swiper -->
  <div >
    <swiper
      :freeMode="true"
      :mousewheel="true"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 400,
        disableOnInteraction: false,
      }"
      navigation
      :modules="modules"
      class="mySwiper"
      
    >
      <swiper-slide>
        <div class="flex items-center justify-center">
          <img
            src="http://www.yuangi.com.tw/data/adv/201901/1546850817677450916.jpg"
            class="w-90 display-block mx-auto"
          />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="flex items-center justify-center">
          <img
            src="http://www.yuangi.com.tw/data/adv/201901/1546850817677450916.jpg"
            class="w-90 display-block mx-auto"
          />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="flex items-center justify-center">
          <img
            src="http://www.yuangi.com.tw/data/adv/201901/1546850817677450916.jpg"
            class="w-90 display-block mx-auto"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <!-- Hero -->
  <div class="max-w-[85rem] mx-auto px-4 mt-[80px]">
    <!-- Grid -->
    <div
      class="grid md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 xl:gap-20 items-center"
    >
      <div class="ml-10 mr-10 text-center lg:text-left">
        <h1 class="lg: text-[40px] font-bold leading-tight">猴猴早午餐店</h1>

        <p class="mt-[20px] text-[30px] text-gray-800 dark:text-gray-400">
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
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h1 class="text-[40px] font-bold mb-[40px] text-center lg:">
        猴猴主廚精選 - 主打餐點
      </h1>
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a href="#test_menu" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              src="https://ciao.kitchen/wp-content/uploads/2017/10/166e75_19d60bf89dbb4bc7b6548847ca8ab81emv2_d_1365_2048_s_2.jpg"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">新鮮炸球</h3>
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

          <h3 class="mt-4 text-sm text-gray-700">清新牛排</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#test_menu" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              src="https://plugins-media.makeupar.com/smb/blog/post/2022-09-23/f7f6439f-2498-42ef-8fbe-9a59ec6e527f.jpg"
              alt="Person using a pen to cross a task off a productivity paper card."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">活力沙拉</h3>
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
          <h3 class="mt-4 text-sm text-gray-700">活力陽春麵</h3>
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
          <h3 class="mt-4 text-sm text-gray-700">芝麻饅頭</h3>
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
          <h3 class="mt-4 text-sm text-gray-700">清新料理</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <!-- End product -->
        <!-- More products... -->
        <a
          href="#test_menu"
          class="mt-2 text-[30px] font-medium text-indigo-600 hover:text-indigo-500"
          >more...
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </div>
  </div>

  <!-- 評論 -->
  <div class="overflow-hidden bg-gray-100 mt-3">
    <div class="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <!-- 標題 -->
      <div class="max-w-3xl mx-auto mb-10 md:mb-16 text-center">
        <h2 class="text-[40px] lg: font-semibold text-gray-800">
          我們的美食讓顧客讚不絕口
        </h2>
      </div>
      <!-- 結束標題 -->
      <!-- 網格 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 卡片 -->

        <div class="flex h-auto">
          <div class="flex flex-col bg-white rounded-xl shadow-md">
            <div class="flex-auto p-4 md:p-6">
              <p>
                “這裡的食物絕對美味！每一口都充滿了風味，就像是對烹飪天堂的一次品嚐。”
              </p>
            </div>
            <div class="p-4 bg-gray-200 rounded-b-xl md:px-7">
              <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://attach.setn.com/newsimages/2020/03/05/2439702-XXL.jpg"
                    alt="顧客頭像"
                  />
                </div>
                <div class="flex flex-col items-end">
                  <p class="text-sm font-semibold text-gray-700">顧客滿意度</p>
                  <p class="text-lg font-bold text-gray-900">9.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex h-auto">
          <div class="flex flex-col bg-white rounded-xl shadow-md">
            <div class="flex-auto p-4 md:p-6">
              <p>
                “這裡的食物絕對美味！每一口都充滿了風味，就像是對烹飪天堂的一次品嚐。”
              </p>
            </div>
            <div class="p-4 bg-gray-200 rounded-b-xl md:px-7">
              <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://attach.setn.com/newsimages/2020/03/05/2439702-XXL.jpg"
                    alt="顧客頭像"
                  />
                </div>
                <div class="flex flex-col items-end">
                  <p class="text-sm font-semibold text-gray-700">顧客滿意度</p>
                  <p class="text-lg font-bold text-gray-900">9.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex h-auto">
          <div class="flex flex-col bg-white rounded-xl shadow-md">
            <div class="flex-auto p-4 md:p-6">
              <p>
                “這裡的食物絕對美味！每一口都充滿了風味，就像是對烹飪天堂的一次品嚐。”
              </p>
            </div>
            <div class="p-4 bg-gray-200 rounded-b-xl md:px-7">
              <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://attach.setn.com/newsimages/2020/03/05/2439702-XXL.jpg"
                    alt="顧客頭像"
                  />
                </div>
                <div class="flex flex-col items-end">
                  <p class="text-sm font-semibold text-gray-700">顧客滿意度</p>
                  <p class="text-lg font-bold text-gray-900">9.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex h-auto">
          <div class="flex flex-col bg-white rounded-xl shadow-md">
            <div class="flex-auto p-4 md:p-6">
              <p>
                “這裡的食物絕對美味！每一口都充滿了風味，就像是對烹飪天堂的一次品嚐。”
              </p>
            </div>
            <div class="p-4 bg-gray-200 rounded-b-xl md:px-7">
              <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://attach.setn.com/newsimages/2020/03/05/2439702-XXL.jpg"
                    alt="顧客頭像"
                  />
                </div>
                <div class="flex flex-col items-end">
                  <p class="text-sm font-semibold text-gray-700">顧客滿意度</p>
                  <p class="text-lg font-bold text-gray-900">9.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex h-auto">
          <div class="flex flex-col bg-white rounded-xl shadow-md">
            <div class="flex-auto p-4 md:p-6">
              <p>
                “這裡的食物絕對美味！每一口都充滿了風味，就像是對烹飪天堂的一次品嚐。”
              </p>
            </div>
            <div class="p-4 bg-gray-200 rounded-b-xl md:px-7">
              <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://attach.setn.com/newsimages/2020/03/05/2439702-XXL.jpg"
                    alt="顧客頭像"
                  />
                </div>
                <div class="flex flex-col items-end">
                  <p class="text-sm font-semibold text-gray-700">顧客滿意度</p>
                  <p class="text-lg font-bold text-gray-900">9.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex h-auto">
          <div class="flex flex-col bg-white rounded-xl shadow-md">
            <div class="flex-auto p-4 md:p-6">
              <p>
                “這裡的食物絕對美味！每一口都充滿了風味，就像是對烹飪天堂的一次品嚐。”
              </p>
            </div>
            <div class="p-4 bg-gray-200 rounded-b-xl md:px-7">
              <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://attach.setn.com/newsimages/2020/03/05/2439702-XXL.jpg"
                    alt="顧客頭像"
                  />
                </div>
                <div class="flex flex-col items-end">
                  <p class="text-sm font-semibold text-gray-700">顧客滿意度</p>
                  <p class="text-lg font-bold text-gray-900">9.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 結束網格 -->
      <!-- 網格 -->
      <div
        id="app"
        class="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8"
      >
        <div v-for="(item, index) in data" :key="index">
          <h4 class="text-lg sm:text-xl font-semibold text-white">
            {{ item.title }}
          </h4>
          <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
            <span v-if="item.id === 'customerSatisfaction'"
              >{{ customerSatisfaction }}%</span
            >
            <span v-else>{{ item.value }}</span>
          </p>
          <p class="mt-1 text-gray-400">{{ item.description }}</p>
        </div>
      </div>
      <!-- 結束網格 -->
    </div>
  </div>

  <Ft></Ft>
</template>
<script setup>
import { ref, onMounted } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Navbar from "@/components/Navbar.vue";
import Ft from "../components/footer.vue";


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
  max-width: 300px;
  max-height: 250px;
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
</style>