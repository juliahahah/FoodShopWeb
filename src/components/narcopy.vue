  <!-- Navbar -->
<template>
 <header class="fixed w-[100vw] " style="z-index: 100">
  
  <div
    class=" bg-stone-200"
  >
    <nav
      class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global"
    >
    
      <div class="sm:hidden">
        <div class="flex item-center">

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
      </div></div>

      <div
        id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div
          class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7"
        >
          <a
            class="logo flex align-left; text-2xl font-bold whitespace-nowrap text-black"
            href="#"
          >
            猴猴早午餐
          </a>
          <div class="flex-grow"></div>
          <!-- This div will push the following links to the right -->
          <a
            class="font-bold font-medium text-black sm:py-6"
            href="#"
            aria-current="page"
            >首頁</a
          >
          <a class="font-bold font-medium text-black sm:py-6" href="#"
            >連鎖商店</a
          >
          <a class="font-bold font-medium text-black sm:py-6" href="#test_menu"
            >菜單</a
          >
          <a class="font-bold font-medium text-black sm:py-6" href="#"
            >關於我們</a
          >
          <a class="font-bold font-medium text-black sm:py-6" href="#Send"
            >購物車</a
          >
        </div>
      </div>
    </nav>
  </div>

  <!---End narbar-->
 </header>
</template>
    
  <script setup>
</script>
  
  <style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 確保Navbar在最上層 */
  background-color: #f3f4f6; /* 設定Navbar的背景顏色 */
  /* 添加其他你需要的樣式設定 */
}
</style>
