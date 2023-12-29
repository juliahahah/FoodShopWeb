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
  <!-- 結帳頁面 -->
  <div class="flex justify-center items-center h-screen">
    <div class="w-full sm:w-3/4 lg:w-1/2">
      <div
        class="flex flex-col h-full overflow-y-scroll bg-white shadow-xl rounded-lg p-4"
      >
        <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <h2 class="text-lg font-medium text-gray-900">結帳</h2>
          <div v-if="$cartStore.cartArray.length > 0">
            <div class="mt-8">
              <ul role="list" class="divide-y divide-gray-200">
                <li
                  v-for="(meal, index) in $cartStore.cartArray"
                  :key="index"
                  class="flex py-6"
                >
                  <div
                    class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                  >
                    <img
                      :src="meal.image"
                      :alt="meal.name"
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div class="ml-4 flex flex-1 flex-col">
                    <div>
                      <div
                        class="flex justify-between text-base font-medium text-gray-900"
                      >
                        <h3>
                          <a  class="pl-[10px] text-[18px] font-semibold text-gray-800"
                    > {{ meal.name }}</a>
                        </h3>
                        <p
                          class="pl-[10px] text-[18px] font-semibold text-gray-800"
                        >
                          ${{ meal.price }} <br />
                          {{ meal.amount }} 份
                        </p>
                      </div>
                    </div>
                    <p class="mt-1 text-sm text-gray-500">
                      {{ meal.description }}
                    </p>
                    <div class="flex flex-1 items-end justify-between text-sm">
                      <div class="flex"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div v-else>
            <p class="mt-4">您的購物車為空</p>
          </div>
        </div>

        <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>小計</p>
            <p class="pl-[10px] text-[25px] font-semibold text-gray-800">
              ${{ totalPrice() }}
            </p>
          </div>
         <a
            href="#invoice"
            class="mt-4 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium bg-stone-500 text-white shadow-sm hover:bg-stone-700"
          >
            前往送出頁面
          </a>
          <div
            class="mt-6 flex justify-center text-center text-sm text-gray-500"
          >
            <p>
              或<br>
              <a
              href="#test_menu"
                type="button"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                繼續購物
                <span aria-hidden="true"> &rarr;</span>
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

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
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

import { useCartStore } from "@/stores/test_cart";
const $cartStore = useCartStore();

// 計算總價
const totalPrice = () => {
  return $cartStore.cartArray.reduce((total, meal) => {
    return total + meal.price * meal.amount;
  }, 0);
};

// 結帳函數
const checkout = () => {
  const order = $cartStore.cartArray; // 創建訂單，可能需要更多處理

  $cartStore.clearCart(); // 清空購物車

  router.push("/confirm-order"); // 導航至確認訂單頁面
};

const goToShop = () => {
  // 導航至商品頁面
  router.push("/shop");
};
const goToIovoice = () => {
  // 導航至商品頁面
  router.push("/invoice");
};

const removeFromCart = (index) => {
  // 從購物車中刪除商品
  $cartStore.removeFromCart(index);
};
</script>
