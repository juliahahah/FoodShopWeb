<template>
  <Navbar />
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      integrity="sha384-ezP1e3e01VX+KtPnA4PFVZl+2pMqL6wnlEFP6Y8vzPxlg0YE0690tYD3I3eOzEm+L"
      crossorigin="anonymous"
    />

    <title>電商網站</title>
  </head>

  <!------>

  <!-- Navbar -->
  <div
    class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0 bg-stone-200"
  >
    <nav
      class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
      <h1 class="logo text-2xl font-bold whitespace-nowrap text-black">
        猴猴早午餐
      </h1>

      <div class="sm:hidden">
        <button
          type="button"
          class="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-black text-black hover:border-gray-400 hover:text-gray-400 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600 dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7"
        >
          <a class="font-medium text-black sm:py-6" href="#" aria-current="page"
            >首頁</a
          >
          <a class="font-medium text-black  sm:py-6" href="#">連鎖商店</a>
          <a class="font-medium text-black sm:py-6" href="#test_menu"> 菜單 </a>
          <a class="font-medium text-black sm:py-6" href="#">關於我們</a>
          <button @click="goToSend" class="font-medium text-black sm:py-6">
            購物車
          </button>
        </div>
      </div>
    </nav>
  </div>

  <!---End narbar-->
  <div class="mt-10 px-10 lg:mt-10">
    <swiper
      class="mySwiper container-center h-700 bg-orange-900"
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

    <div class="flex justify-between items-center mt-4">
      <button
        class="rounded-full bg-orange-900 p-4 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-600"
        type="button"
        @click="prevSlide"
      >
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        class="rounded-full bg-orange-900 p-4 hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-600"
        type="button"
        @click="nextSlide"
      >
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M8 5l4 4L8 19"></path>
        </svg>
      </button>
    </div>
  </div>



  <!-- end swiper -->
  <swiper
    :pagination="pagination"
    :modules="modules"
    class="container-center h-700 bg-orange-900"
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
      <!-- swiper
      <div class="relative mt-4 lg:mt-0">
        <div>
          <swiper :pagination="pagination" :modules="modules" class="mySwiper">
            <swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
            /></swiper-slide>
            <swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-1.jpg"
            /></swiper-slide>
            <swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-2.jpg"
            /></swiper-slide>
            <swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-3.jpg"
            /></swiper-slide>
            <swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
            /></swiper-slide>
            <swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-5.jpg"
            /></swiper-slide>
            <swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-6.jpg"
            /></swiper-slide>
            <swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-7.jpg"
            /></swiper-slide>
            <swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-8.jpg"
            /></swiper-slide>
            <swiper-slide
              ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
            /></swiper-slide>
          </swiper>
        </div>
        <div
          class="absolute inset-0 -z-[1] bg-white via-white/0 to-white/0 w-full h-full rounded-xl mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"
        ></div>
      </div>
      <div
        class="absolute inset-0 -z-[1] bg-white via-white/0 to-white/0 w-full h-full rounded-xl mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"
      ></div>
      end swiper -->
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

  <!-- Footer -->
  <footer class="bg-stone-200 w-full py-5 px-4 sm:px-6 lg:px-8 mx-auto">
    <!-- Grid -->
    <div class="text-center">
      <div>
        <a
          class="flex-none text-xl font-semibold text-black dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
          aria-label="Brand"
          >猴猴早午餐店</a
        >
      </div>
      <!-- End Col -->

      <div class="mt-3">
        <p class="text-gray-500">© liu yiwen. 2023 . 僅用於網站練習專案.</p>
      </div>

      <!-- Social Brands -->
      <div class="mt-3 space-x-2">
        <a
          class="inline-flex items-center justify-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href="#"
        >
          <div class="w-10 h-10">
            <img
              src="../assets/images/facebook.svg"
              alt="Facebook"
              class="w-full h-full"
            />
          </div>
        </a>
        <a
          class="inline-flex items-center justify-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href="#"
        >
          <div class="w-10 h-10">
            <img
              src="../assets/images/instagram.svg"
              alt="Instagram"
              class="w-full h-full"
            />
          </div>
        </a>
        <a
          class="inline-flex items-center justify-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          href="#"
        >
          <div class="w-10 h-10">
            <img
              src="../assets/images/line.svg"
              alt="LINE"
              class="w-full h-full"
            />
          </div>
        </a>
      </div>
      <!-- End Social Brands -->
    </div>
    <!-- End Grid -->
  </footer>
 
  <Isnavbar />
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"; // Import coverflow effect style
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Navbar from '@/components/Isnavbar.vue';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      showDropdown: false,
      dropdownOptions: ["Option 1", "Option 2", "Option 3"],
      mySwiper: null, // 新增 mySwiper 的定義
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    goTomenu() {
      // 使用 router.push 導航到 Shop 頁面
      this.$router.push("/test_menu");
    },
    goToSend() {
      // 使用 router.push 導航到 Send 頁面
      this.$router.push("/send");
    },
  
    prevSlide() {
      this.$refs.mySwiper.swiper.slidePrev();
    },
    nextSlide() {
      this.$refs.mySwiper.swiper.slideNext();
    },
  },
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      modules: [Pagination],
    };
  },
  mounted() {
    this.$nextTick(() => {
    this.mySwiper = new Swiper(this.$refs.mySwiper.$el, {
      direction: 'horizontal',
      loop: true,
      mousewheel: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });
  },
};



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