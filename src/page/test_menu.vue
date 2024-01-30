<template>
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
          <a class="font-medium text-black sm:py-6" href="#">連鎖商店</a>
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

  <div class="">
    <!-- title -->
    <div class="relative">
      <button
        @click="toggle_showCart()"
        class="rounded-[20px] bg-stone-500 w-[100px] h-[35px] shadow-md text-[#FFFFFF] font-semibold top-[100px] right-[20px] fixed"
        :class="{ 'rounded-t-[20px]': showCart.value == true }"
      >
        購物車
      </button>
    </div>

    <!-- 購物車列表 -->
    <div
      v-if="showCart"
      class="w-[25%] min-h-[50vh] h-auto  fixed top-[130px] right-0 drop-shadow-lg px-[20px] pt-[30px] flex flex-col gap-[20px]"
    >
      <div v-for="(meal, index) in $cartStore.cartArray">
       
        <!-------->
        
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

                            <!-- More products... -->
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
    <!-- meals -->

    <div
      class="mt-[5vh] px-[8vw] py-[80px] bg-gray-200 min-h-[80vh] w-full grid md:grid-cols-4 md:gap-[50px] grid-cols-2 gap-[30px]"
    >
      <div v-for="(meal, index) in $dishStore.meals">
        <div
          class="md:w-[300px] w-[200px] md:h-[300px] h-[250px] bg-white rounded-[20px] shadow-md"
        >
          <div class="w-full">
            <div
              class="aspect-w-7 aspect-h-8 w-full overflow-hidden rounded-[20px] bg-white shadow-md"
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

    <!-- Footer -->
    <footer
      class="bg-gray-700 w-full py-5 px-4 sm:px-6 lg:px-8 mx-auto bg-stone-200"
    >
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
  </div>
</template>
<script setup>
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

const addDish=(meal,index)=>{

  $dishStore.meals[index].amount ++
  $cartStore.addMeal(meal)
}

const reduceDish =(meal,index) => {
  $dishStore.meals[index].amount =  $dishStore.meals[index].amount -1
  if( $dishStore.meals[index].amount <= 0) {

    $dishStore.meals[index].amount =0
    $cartStore.deleteMeal(meal)
  }
  // console.log(false)
}

const showCart = ref(false)
const toggle_showCart=() =>{
showCart.value =!showCart.value
}

const totalPrice = () => {
  return $cartStore.cartArray.reduce((total, meal) => {
    return total + meal.price * meal.amount;
  }, 0);
};

</script>