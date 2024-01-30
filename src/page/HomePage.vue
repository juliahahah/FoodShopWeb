<template>
  <!------>

  <!-- Navbar -->
  <Navbar />

  <div class="mt-10 px-10 lg:mt-10">
    <swiper
      class="mySwiper container-center h-700"
      direction="horizontal"
      loop="true"
      mousewheel="true"
      :pagination="pagination"
      :modules="modules"
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
    </swiper>
  </div>

  <!-- end swiper -->
  <swiper
    :pagination="pagination"
    :modules="modules"
    class="container-center h-700"
  ></swiper>
  <!-- Hero -->
  <div class="max-w-[85rem] mx-auto px-4 mt-4 sm:px-6 lg:px-8">
    <!-- Grid -->
    <div
      class="grid md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 xl:gap-20 items-center"
    >
      <div class="text-center lg:text-left">
        <h1
          class="text-xl font-bold text-gray-800 sm:text-lg lg:text-4xl lg:leading-tight dark:text-white"
        >
          猴猴早午餐店
        </h1>

        <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
          品味美好時光，猴猴早午餐店為您提供極致的用餐體驗。我們精心挑選新鮮食材，製作出口感十足、美味可口的早午餐料理。不僅味道令人陶醉，更有舒適的用餐環境，讓您感受到家的溫馨。
        </p>
      </div>

      <!--影片 -->
      <div class="flex justify-center items-center">
        <img
          class="rounded-lg"
          width="500"
          height="200"
          src="/src/assets/images/煎蛋.gif"
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
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <a href="#" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              src="https://ciao.kitchen/wp-content/uploads/2017/10/166e75_19d60bf89dbb4bc7b6548847ca8ab81emv2_d_1365_2048_s_2.jpg"
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
        </a>
        <a href="#" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/roasted-salmon-with-vegetables-royalty-free-image-1638849406.jpg?crop=0.669xw:1.00xh;0.153xw,0&resize=640:*"
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              src="https://plugins-media.makeupar.com/smb/blog/post/2022-09-23/f7f6439f-2498-42ef-8fbe-9a59ec6e527f.jpg"
              alt="Person using a pen to cross a task off a productivity paper card."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
        </a>
        <a href="#" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              src="https://ciao.kitchen/wp-content/uploads/2017/10/166e75_bc7c9a77904e497294035d858a322b96mv2_d_3168_4752_s_4_2-e1555660592712.jpg"
              alt="Hand holding black machined steel mechanical pencil with brass tip and top."
              class="product-image h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <!-- End product -->
        <!-- More products... -->
      </div>
    </div>
  </div>

  <!--評論-->
  <div class="overflow-hidden bg-gray-100 mt-3">
    <div class="container mx-un dev uto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <!-- 標題 -->
      <div class="max-w-3xl mx-auto mb-10 md:mb-16 text-center">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800"
        >
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
              <p class="text-base italic md:text-lg text-gray-800">
                “這裡的食物絕對美味！每一口都充滿了風味，就像是對烹飪天堂的一次品嚐。”
              </p>
            </div>
            <div class="p-4 bg-gray-200 rounded-b-xl md:px-7">
              <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="customer-avatar.jpg"
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
        <!-- 重複類似的結構以展示其他評論卡片 -->
        <div class="flex h-auto">
          <div class="flex flex-col bg-white rounded-xl shadow-md">
            <div class="flex-auto p-4 md:p-6">
              <p class="text-base italic md:text-lg text-gray-800">
                “這裡的食物絕對美味！每一口都充滿了風味，就像是對烹飪天堂的一次品嚐。”
              </p>
            </div>
            <div class="p-4 bg-gray-200 rounded-b-xl md:px-7">
              <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="customer-avatar.jpg"
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
              <p class="text-base italic md:text-lg text-gray-800">
                “這裡的食物絕對美味！每一口都充滿了風味，就像是對烹飪天堂的一次品嚐。”
              </p>
            </div>
            <div class="p-4 bg-gray-200 rounded-b-xl md:px-7">
              <div class="flex items-center justify-between">
                <div class="flex-shrink-0">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="customer-avatar.jpg"
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
    </div>
    <!-- 結束網格 -->
  </div>

  <!-- Store Address and Opening Hours -->
  <div class="relative">
    <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
      <!-- Buttons -->
      <div class="grid gap-3 w-full sm:inline-flex justify-center">
        <!-- Updated class to center the content -->
        <a
          class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 absolute"
          style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
          href="#"
        >
          門市資訊
          <svg
            class="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
    <!-- End Buttons -->

    <!-- Google Map Embed -->
    <div class="">
      <iframe
        width="100%"
        height="400"
        frameborder="0"
        style="border: 0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748384.3837540327!2d120.08413749895779!3d23.441280788410708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e040f54057675%3A0xdf976ed7fa8cba08!2z5ZyL56uL5Lit5bGx5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1699803833833"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
  <!-- End Store Address and Opening Hours -->

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

/*
.swiper {
 width: 100%;
  height: 40%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  max-width: 100%;
  max-height: 250px;
  }

  

.swiper-pagination-bullet {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
  opacity: 1;
  background: #fff;
}

.swiper-pagination-bullet-active {
  color: #cc1212;
  background:  #ccc;
}

*/
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