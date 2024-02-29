<template>
  <!-- Navbar -->
<Navbar />

  <!---End narbar-->
  <!-- 結帳頁面 -->
  <div class="flex justify-center items-center h-screen">
    <div class="w-full sm:w-3/4 lg:w-1/2">
      <div
        class="flex flex-col h-auto  bg-white shadow-xl rounded-lg p-4"
      >
        <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <h2 class="text-[30px]  font-bold text-gray-900">購物車</h2>
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
                          <a
                            class="pl-[10px] text-[18px] font-semibold text-gray-800"
                          >
                            {{ meal.name }}</a
                          >
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
            <p class="text-[20px]">小計</p>
            <p class="pl-[10px] text-[25px] font-semibold text-gray-800">
              ${{ totalPrice() }}
            </p>
          </div>
          <a
            href="#"
            class="text-[30px] mt-[30px] flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium bg-stone-500 text-white shadow-sm hover:bg-stone-700"
          >
            前往結帳
          </a>
          <div
            class="mt-6 flex justify-center text-center text-[20px] text-gray-500"
          >
        
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->

  <Ft></Ft>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Ft from "../components/footer.vue";
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
