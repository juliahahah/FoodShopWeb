<template>
  <!-- Navbar -->
  <Navbar />

  <div class="">
    <!--懸浮購物車
    <div class="relative">
      <button
        @click="toggle_showCart()"
        class="rounded-[5px] bg-stone-500 w-[100px] h-[35px] shadow-md text-[#FFFFFF] font-semibold top-[100px] right-[20px] fixed"
        :class="{ 'rounded-t-[20px]': showCart.value == true }"
      >
        購物車
      </button>
    </div>

   
   
    
    <div
      v-if="showCart"
      class="w-[25%] min-h-[50vh] h-auto  fixed top-[130px] right-0 drop-shadow-lg px-[20px] pt-[30px] flex flex-col gap-[20px]"
    >
      <div v-for="(meal, index) in $cartStore.cartArray">
       
      
        
        <div
          class="relative z-10  shadow-md"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          ></div>

          <div class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-0 overflow-hidden">
              <div
                class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
              >
                <div class="pointer-events-auto w-screen max-w-md shadow-lg">
                  <div
                    class="flex h-full flex-col overflow-y-scroll bg-white shadow-md"
                  >
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sh">
                      <div class="flex items-start justify-between">
                        <h2
                          class="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Shopping cart
                        </h2>
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Close panel</span>
                            <svg
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="mt-8">
                        <div class="flow-root">
                          <ul
                            role="list"
                            class="-my-6 divide-y divide-gray-200"
                          >
                            <li class="flex py-6">
                              <div
                                class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                              >
                                <img
                                  :src="meal.image"
                                  class="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div
                                    class="flex justify-between text-base font-medium text-gray-900"
                                  >
                                    <h3>
                                      <a href="#"> {{ meal.name }}</a>
                                    </h3>
                                    <p  class="pl-[10px] text-[18px] font-semibold text-gray-800">
                                 ${{ meal.price }}</p>
                                    <p  class="pl-[10px] text-[18px] font-semibold text-gray-800">
                                    {{ meal.amount }} 份
                                  </p>
                                  </div>
                                </div>
                                <div
                                  class="flex flex-1 items-end justify-between text-sm"
                                >


                                  <div class="flex">
                                    <button
                                      type="button"
                                      class="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>

                        
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div
                        class="flex justify-between text-base font-medium text-gray-900"
                      >
                        <p>${{ totalPrice() }}</p>
                      
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div class="mt-6">
                      <a
                        href="#send"
                        class=" mt-4 px-4 py-2  flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium  bg-stone-500 text-white shadow-sm hover:bg-stone-700"
                      >
                        前往送出頁面
                      </a>
                      </div>
                      <div
                        class="mt-6 flex justify-center text-center text-sm text-gray-500"
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->

    <!-- meals -->

    <div
      class="px-[8vw] py-[80px] bg-gray-200 flex flex-wrap justify-center grid gap-[20px] md:"
    >
      <div v-for="(meal, index) in $dishStore.meals">
        <div
          class="md:w-[300px] w-[200px] md:h-[300px] h-[250px] bg-white rounded-[5px] shadow-md"
        >
          <div class="w-full">
            <div
              class="aspect-w-7 aspect-h-8 w-full overflow-hidden rounded-[5px] bg-white shadow-md"
            >
              <router-link :to="{ path: '/shop' }">
                <img
                  :src="meal.image"
                  class="object-cover h-1/2 w-full rounded-tl-[10px] rounded-tr-[0px] object-center transition-opacity duration-300 ease-in-out hover:opacity-75"
                  alt="Meal Image"
                />
              </router-link>
            </div>

            <h3 class="mt-4 ml-2 text-sm text-gray-700">{{ meal.name }}</h3>

            <div class="flex justify-between pr-[10px]">
              <p class="mt-1 ml-2 text-lg font-medium text-gray-900">
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
    <!----前往購物車頁面-->
    <div class="px-[20vw]">
      <a
        href="#send"
        class="text-[30px] mb-[60px] px-[8vw] flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium bg-stone-500 text-white shadow-sm hover:bg-stone-700"
      >
        前往購物車頁面
      </a>
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
</script>
