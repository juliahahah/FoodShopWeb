<template>
  <!-- Navbar -->
  <Navbar />

  <!---End narbar-->
  <!--product-->
  <div class="">
    <div aria-label="Breadcrumb">
      <ol
        role="list"
        class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Home</a>
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
            <a href="#test_menu" class="mr-2 text-sm font-medium text-gray-900"
              >Menu</a
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
            href="#"
            aria-current="page"
            class="font-medium text-gray-500 hover:text-gray-600"
            >Introduction</a
          >
        </li>
      </ol>
    </div>
    <!-- Image gallery -->
    <div
      class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
    >
      <div
        class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block"
      >
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/new-project-63-1636610826.jpg?crop=0.490xw:0.980xh;0,0.0196xh&resize=640:*"
          alt="Two each of gray, white, and black shirts laying flat."
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/page1-1612340172.jpg?crop=0.495xw:0.990xh;0.00164xw,0&resize=640:*"
            alt="Model wearing plain black basic tee."
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/roasted-salmon-with-vegetables-royalty-free-image-1638849406.jpg?crop=0.669xw:1.00xh;0.153xw,0&resize=640:*"
            alt="Model wearing plain gray basic tee."
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div
        class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg"
      >
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/roasted-salmon-with-vegetables-royalty-free-image-1638849406.jpg?crop=0.669xw:1.00xh;0.153xw,0&resize=640:*"
          alt="Model wearing plain white basic tee."
          class="h-full w-full object-cover object-center"
        />
      </div>
    </div>

    <!-- Product info -->
    <div
      class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
    >
      <div class="lg:col-span-2  ">
        <h1
          ref="productName"
          class="text-[50px] font-bold tracking-tight text-gray-900 "
        >
          清新牛排
        </h1>

    
        <div class="text-[40px] mt-4 text-gray-700">
          <p>
            這是我們的清新牛排，由新鮮的牛肉製成。
          </p>
          <p class="mt-2">主菜特色：</p>
          <ul class="list-disc pl-6 mt-1">
            <li>優質牛肉，口感鮮嫩</li>
            <li>搭配新鮮蔬菜，營養豐富</li>
            <li>獨特的調味，風味獨特</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer -->

  <Ft></Ft>
</template>

<script>
export default {
  data() {
    return {
      cart: [], // 購物車陣列，用於存放商品資訊
      productInfo: {
        name: "Combo One", // 商品名稱
        price: 192, // 商品價格
      },
      selectedOption: [], // 用於存放選擇的選項值
    };
  },
  methods: {
    addToCart() {
      // 取得商品名稱和價格
      const productName = this.productInfo.name;
      let productPrice = this.productInfo.price;

      // 如果選項數量大於 0，則調整商品價格
      if (this.selectedOption.length > 0) {
        productPrice *= this.selectedOption.length; // 根據選項數量調整價格
      }

      // 將選擇的商品資訊加入購物車陣列
      this.cart.push({
        name: productName,
        price: `$${productPrice}`, // 更新價格格式
        selectedOptions: this.selectedOption.slice(),
      });

      // 清空選擇的選項
      this.selectedOption = [];
    },
    removeFromCart(index) {
      this.cart.splice(index, 1); // 從購物車中移除特定商品
    },
    goToSend() {
      // 使用 router.push 導航到 Send 頁面
      this.$router.push("/send");
    },
  },
};
</script>
<script setup>
import Navbar from "@/components/Navbar.vue";
import Ft from "../components/footer.vue";
</script>