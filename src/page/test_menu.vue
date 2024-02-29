<template>
  <!-- Navbar -->
  <Navbar />

  <!--首頁圖 -->

  <div class="mt-[-30px] relative">
    <img
      src="https://www.kungfutea.com.tw/upload/banner_list/twL_banner_22J07_THrQYfhJbr.jpg"
      class="w-full"
    />
    <p
      class="text-white text-[60px] font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      菜單<br />
    </p>
  </div>

  <div class="">
    <!---搜索--->
    <div>
      <div class="flex flex-col items-center">
        <div
          class="mt-[80px] w-[80vw] h-[113px] flex justify-center items-center gap-[15px] mx-auto"
        >
          <input
            type="search"
            v-model="$store.searchWord"
            v-on:keyup.enter="toSearchPage()"
            class="mb-8 w-[87%] h-[60px] border-black border-[2px] border-double focus:border-black focus:ring-0 text-start text-[18px] text-black/80 tracking-wider"
            placeholder="搜尋料理"
          />

          <button
            class="mb-8 w-[60px] h-[60px] bg-black"
            @click="toSearchPage()"
          >
            <img
              src="../assets/images/right-arrow.png"
              class="w-[30px] h-[30px]"
            />
          </button>
        </div>
        <div @click="toggle_ShowSearch"></div>
      </div>
    </div>

    <!--標籤-->
    <div aria-label="Breadcrumb">
      <ol
        role="list"
        class="ml-[10vw] mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg: lg:px-8"
      >
        <li>
          <div class="flex items-center">
            <a
              href="#specialMeals"
              class="mr-2 text-sm text-[30px] text-gray-900"
              >特色料理</a
            >
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              class="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <a
              href="#featuredMeals"
              class="mr-2 text-sm font-medium text-gray-900"
              >主打精選</a
            >
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              class="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li class="text-sm">
          <a
            href="#seasonalMeals"
            aria-current="page"
            class="font-medium text-gray-500 hover:text-gray-600"
            >季節料理</a
          >
        </li>
      </ol>
    </div>

    <!-- meals -->

    <!---特色料理-->

    <h1 class="mt-[30px] text-[45px] font-bold mb-[10px] text-center">
      Specialty Dishes
    </h1>
    <h1 class="text-[30px] font-bold mb-[40px] text-center">
      <a class="text-stone-500">特 | 色 | 料 | 理</a>
    </h1>

    <div
      class="px-[8vw] py-[30px] bg-gray-200 flex flex-wrap justify-center grid gap-[20px] md:"
    >
      <div v-for="(meal, index) in $dishStore.meals">
        <div
          class="md:w-[300px] w-[200px] w-[150px] md:h-[350px] h-[300px] h-[250px] bg-white shadow-md"
        >
          <div class="w-full">
            <div
              class="aspect-w-7 aspect-h-8 w-full overflow-hidden bg-white shadow-md"
            >
              <router-link :to="{ path: '/' }">
                <img
                  :src="meal.image"
                  class="object-cover h-1/2 w-full object-center transition-opacity duration-300 ease-in-out hover:opacity-75"
                  alt="Meal Image"
                />
              </router-link>
            </div>

            <h3 class="mt-4 ml-2 font-bold text-[20px] text-gray-700">
              {{ meal.name }}
            </h3>
            <h3 class="mt-4 ml-2 text-[15px] text-gray-700">
              {{ meal.introduction }}
            </h3>

            <div class="flex justify-between pr-[10px] mt-[10px]">
              <p class="ml-2 text-lg font-medium text-gray-900">
                $ {{ meal.price }}
              </p>

              <div class="flex gap-[20px]">
                <button
                  @click="reduceDish(meal, index)"
                  class="w-[20px] h-[20px] bg-stone-500 text-white rounded-full text-[15px] leading-[15px] font-semibold shadow-lg active: bg-stone-500"
                >
                  -
                </button>
                <div class="w-[10px]">{{ meal.amount }}</div>
                <button
                  @click="addDish(meal, index)"
                  class="w-[20px] h-[20px] bg-stone-500 text-white rounded-full text-[15px] leading-[15px] font-semibold shadow-lg active: bg-stone-500"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---主打經典-->

   
    <h1 class="mt-[30px] text-[45px] font-bold mb-[10px] text-center">
      Featured Selection
    </h1>
    <h1 class="text-[30px] font-bold mb-[40px] text-center">
      <a class="text-stone-500">主 | 打 | 精 | 選</a>
    </h1>
    <div
      class="px-[8vw] py-[30px] bg-gray-200 flex flex-wrap justify-center grid gap-[20px] md:"
    >
      <div v-for="(meal, index) in $dishStore.meals">
        <div
          class="md:w-[300px] w-[200px] w-[150px] md:h-[350px] h-[300px] h-[250px] bg-white shadow-md"
        >
          <div class="w-full">
            <div
              class="aspect-w-7 aspect-h-8 w-full overflow-hidden bg-white shadow-md"
            >
              <router-link :to="{ path: '/' }">
                <img
                  :src="meal.image"
                  class="object-cover h-1/2 w-full object-center transition-opacity duration-300 ease-in-out hover:opacity-75"
                  alt="Meal Image"
                />
              </router-link>
            </div>

            <h3 class="mt-4 ml-2 font-bold text-[20px] text-gray-700">
              {{ meal.name }}
            </h3>
            <h3 class="mt-4 ml-2 text-[15px] text-gray-700">
              {{ meal.introduction }}
            </h3>

            <div class="flex justify-between pr-[10px] mt-[10px]">
              <p class="ml-2 text-lg font-medium text-gray-900">
                $ {{ meal.price }}
              </p>

              <div class="flex gap-[20px]">
                <button
                  @click="reduceDish(meal, index)"
                  class="w-[20px] h-[20px] bg-stone-500 text-white rounded-full text-[15px] leading-[15px] font-semibold shadow-lg active: bg-stone-500"
                >
                  -
                </button>
                <div class="w-[10px]">{{ meal.amount }}</div>
                <button
                  @click="addDish(meal, index)"
                  class="w-[20px] h-[20px] bg-stone-500 text-white rounded-full text-[15px] leading-[15px] font-semibold shadow-lg active: bg-stone-500"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!---季節料理-->

   
    <h1 class="mt-[30px] text-[45px] font-bold mb-[10px] text-center">
      Seasonal Cuisine
    </h1>
    <h1 class="text-[30px] font-bold mb-[40px] text-center">
      <a class="text-stone-500">季 | 節 | 料 | 理</a>
    </h1>
    <div
      class="px-[8vw] py-[30px] bg-gray-200 flex flex-wrap justify-center grid gap-[20px] md:"
    >
      <div v-for="(meal, index) in $dishStore.meals">
        <div
          class="md:w-[300px] w-[200px] w-[150px] md:h-[350px] h-[300px] h-[250px] bg-white shadow-md"
        >
          <div class="w-full">
            <div
              class="aspect-w-7 aspect-h-8 w-full overflow-hidden bg-white shadow-md"
            >
              <router-link :to="{ path: '/' }">
                <img
                  :src="meal.image"
                  class="object-cover h-1/2 w-full object-center transition-opacity duration-300 ease-in-out hover:opacity-75"
                  alt="Meal Image"
                />
              </router-link>
            </div>

            <h3 class="mt-4 ml-2 font-bold text-[20px] text-gray-700">
              {{ meal.name }}
            </h3>
            <h3 class="mt-4 ml-2 text-[15px] text-gray-700">
              {{ meal.introduction }}
            </h3>

            <div class="flex justify-between pr-[10px] mt-[10px]">
              <p class="ml-2 text-lg font-medium text-gray-900">
                $ {{ meal.price }}
              </p>

              <div class="flex gap-[20px]">
                <button
                  @click="reduceDish(meal, index)"
                  class="w-[20px] h-[20px] bg-stone-500 text-white rounded-full text-[15px] leading-[15px] font-semibold shadow-lg active: bg-stone-500"
                >
                  -
                </button>
                <div class="w-[10px]">{{ meal.amount }}</div>
                <button
                  @click="addDish(meal, index)"
                  class="w-[20px] h-[20px] bg-stone-500 text-white rounded-full text-[15px] leading-[15px] font-semibold shadow-lg active: bg-stone-500"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Footer -->
    <Ft></Ft>
  </div>
</template>
<script setup>
import Navbar from "@/components/Navbar.vue";
import Ft from "../components/footer.vue";
import {
  ref,
  onMounted,
  onUnmounted,
  reactive,
  computed,
  watch,
  nextTick,
} from "vue";

import { useDishStore } from "@/stores/test_dish";
const $dishStore = useDishStore();
import { useCartStore } from "@/stores/test_cart";
const $cartStore = useCartStore();

const addDish = (meal, index) => {
  $cartStore.addMeal(meal);
};

const reduceDish = (meal, index) => {
  $dishStore.meals[index].amount = $dishStore.meals[index].amount - 1;
  if ($dishStore.meals[index].amount <= 0) {
    $dishStore.meals[index].amount = 0;
    $cartStore.deleteMeal(meal);
  }
  // console.log(false)
};

const showCart = ref(false);
const toggle_showCart = () => {
  showCart.value = !showCart.value;
};

const totalPrice = () => {
  return $cartStore.cartArray.reduce((total, meal) => {
    return total + meal.price * meal.amount;
  }, 0);
};

import { useSearchStore } from "@/stores/search.js";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const $store = useSearchStore;

const showSearch = ref(false);
const toggle_ShowSearch = () => {
  showSearch.value = !showSearch.value;
};

// 判斷頁面
const isSearch = route.path.startsWith("/search");
const emit = defineEmits();
const toSearchPage = () => {
  if (isSearch) {
    emit("research");
  }
  router.push("/search");
};
</script>
