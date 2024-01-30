<template>

  <!------->
  <div class="bg-gray-100 py-10">
    <div class="max-w-2xl mx-auto bg-white p-6 rounded shadow-md">
      <h1 class="text-2xl font-bold mb-4 text-center">
        Thank you for your purchase!
      </h1>
      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          
          <button
            @click="goToMenu"
            type="button"
            class="font-medium text-indigo-600 hover:text-indigo-500"
          >
            繼續購物
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-700 w-full py-5 px-4 sm:px-6 lg:px-8 mx-auto">
    <!-- Grid -->
    <div class="text-center">
      <div>
        <a
          class="flex-none text-xl font-semibold text-white dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
          aria-label="Brand"
          >Brand</a
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
 
  <script>

export default {
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
    goToMenu() {
      // 使用 router.push 導航到 shop 頁面
      this.$router.push("/test_menu");
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>
  