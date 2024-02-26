<template>
  <header class="mb-[30px] ixed w-[100vw] bg-stone-600" style="z-index: 100">
    <!-- pc & tablet-->
    <nav
      @mouseleave="toggle_ShowDropdown(-1)"
      class="bg-stone-600 w-full h-[80px] mx-auto max-w-[85rem] md:flex items-center px-[4vw] md:px-[3vw] justify-between border-b-[2px] border-black/10 hidden"
      style="z-index: 500"
    >
      <div>
        <a
          class="logo flex align-left; text-2xl font-bold whitespace-nowrap text-white"
          href="#"
        >
          猴猴早午餐
        </a>
      </div>

      <div
        class="hs-collapse hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div
          class="flex flex-col gap-x-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7 relative"
        >
          <a
            @mouseenter="toggle_ShowDropdown(-1)"
            class="font-semibold border-b-[2px] border-stone-600 text-white hover:border-white h-[20px] flex items-center"
            href="#"
          >
            首頁
          </a>

          <a
            @mouseenter="toggle_ShowDropdown(-1)"
            class="font-semibold border-b-[2px] border-stone-600 text-white hover:border-white h-[20px] flex items-center"
            href="#test_menu"
            >菜單</a
          >
          <a
            class="font-semibold border-b-[2px] border-stone-600 text-white hover:border-white h-[20px] flex items-center"
            href="#Send"
            >購物車</a
          >
          <!-- 搜索欄
          <button
            @click="toggle_ShowSearch"
            class="font-semibold border-b-[2px] border-stone-600 text-white hover:border-white h-[20px] flex items-center"
         >
            <img
              src="../assets/images/search_black.png"
              alt="search_icon"
              class="w-[30px]"
            />
          </button>
       
          <transition>
            <div v-if="showSearch">
              <div
                class="w-[100vw] h-[113px] top-0 left-0 flex justify-center items-center gap-[15px] fixed bg-stone-600"
                style="z-index: 500"
              >
                <input
                  type="search"
                  v-model="$store.searchWord"
                  v-on:keyup.enter="toSearchPage()"
                  class="mb-8 w-[87%] h-[60px] border-black border-[2px] border-double focus:border-black focus:ring-0 text-start text-[18px] text-black/80 tracking-wider"
                  placeholder="搜尋商品"
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
              <div
                class="popup-wrap bg-black/20"
                style="z-index: 800"
                @click="toggle_ShowSearch"
              ></div>
            </div>
          </transition>
           -->
        </div>
      </div>
    </nav>

    <!-- mobile  -->
    <nav
      class="sm:flex justify-between items-center bg-stone-600 w-full px-[20px] pr-[30px] py-[10px] border-b-[2px] border-black/10 relative md:hidden"
    >
      <a href="#">
        <button @click="toggle_ShowSearch">
          <a
            class="logo flex align-left; text-2xl font-bold whitespace-nowrap text-white"
            href="#"
          >
            猴猴早午餐
          </a>
        </button>
      </a>

      <button @click="toggle_ShowDropdown_sm()">
        <img
          v-if="!showDropdown_sm"
          src="../assets/images/actions.png"
          alt="navbar_icon"
          class="w-[30px] rotate-90"
        />
        <img
          v-else
          src="../assets/images/close.png"
          alt="close_icon"
          class="w-[30px]"
        />
      </button>

      <!-- menu  -->
      <div
        v-if="showDropdown_sm"
        class="w-[100vw] h-auto bg-stone-600 absolute top-[51px] left-0 py-[20px] flex flex-col gap-[25px] items-center shadow-lg tracking-widest"
        style="z-index: 500"
      >
        <a
          class="font-semibold border-b-[2px] border-stone-600 text-white hover:border-white h-[20px] flex items-center"
          href="#"
          aria-current="page"
          >首頁</a
        >
        <a
          class="font-semibold border-b-[2px] border-stone-600 text-white hover:border-white h-[20px] flex items-center"
          href="#test_menu"
          >菜單</a
        >

        <a
          class="font-semibold border-b-[2px] border-stone-600 text-white hover:border-white h-[20px] flex items-center"
          href="#Send"
          >購物車</a
        >
      </div>

      <transition>
        <div v-if="showSearch">
          <div
            class="w-full h-[113px] top-0 left-0 bg- flex justify-center items-center gap-[15px] fixed px-[3vw] bg-stone-600"
            style="z-index: 500"
          >
            <input
              type="search"
              v-model="$store.searchWord"
              v-on:keyup.enter="toSearchPage()"
              class="w-[87%] h-[50px] border-black border-[2px] border-double focus:border-black focus:ring-0 text-start text-[18px] text-black/80 tracking-wider"
              placeholder="搜尋商品"
            />

            <button class="w-[50px] h-[50px] bg-black" @click="toSearchPage()">
              <img
                src="../assets/images/right-arrow.png"
                class="w-[30px] h-[30px]"
              />
            </button>
          </div>
          <div
            class="popup-wrap bg-black/20"
            style="z-index: 800"
            @click="toggle_ShowSearch"
          ></div>
        </div>
      </transition>
    </nav>

    <!-- Navbar End-->
  </header>
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
import { useSearchStore } from "@/stores/search.js";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const $store = useSearchStore;

const showDropdown = ref(false);
const toggle_ShowDropdown = (index) => {
  if (index > -1) {
    showDropdown.value = true;
  } else {
    showDropdown.value = false;
  }
};
const toggle_ShowDropdown_sm_product = () => {
  showDropdown.value = !showDropdown.value;
};

const showDropdown_sm = ref(false);
const toggle_ShowDropdown_sm = (index) => {
  showDropdown_sm.value = !showDropdown_sm.value;
};
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
<style>
.popup-wrap {
  width: 100%;
  font-size: 24px;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 110px;
  left: 0px;
  content: "";
  background: rgba(0, 0, 0, 0.45);
}
</style>