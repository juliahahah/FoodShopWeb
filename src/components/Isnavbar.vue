
 <template>
    <head>
 <!-- Navbar -->
  <div
  class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0 bg-gray-200" >
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
          class="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-black hover:border-gray-400 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <!-- 这里是汉堡菜单的 SVG 图标 -->
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

          <div class="relative">
            <!-- 这里可以添加下拉菜单 -->

            <!-- 搜索框 -->
            <div class="relative">
              <input
                type="text"
                class="border rounded-lg py-1 px-3 focus:outline-none focus:ring focus:border-blue-300 bg-gray-100 text-gray-800"
                placeholder="搜尋"
              />
            </div>
          </div>
          <button @click="goToSend" class="font-medium text-black sm:py-6">
            購物車
          </button>
        </div>
      </div>
    </nav>
  </div>
</head>
 </template>

  <!---End narbar-->
  
 <script setup>
 import { ref, onUnmounted, onMounted, computed } from "vue";
 import { useUserStore } from "@/stores/user.js";
 import { usePlayersStore } from "@/stores/player.js";
 
 import { useRouter, useRoute } from "vue-router";
 const router = useRouter();
 const route = useRoute();
 
 const $store = useUserStore();
 const $PlayerStore = usePlayersStore();
 
 // 判斷頁面
 const isHomePage = route.path === '/';
 const isShop = route.path === '/shop';
 const isSettingPage = route.path === '/setting';
 // const isCompetitionPage = useRoute().path === '/competition';
 const isPracticePage = route.path === '/practice';
 const isMemberPage = route.path === '/member';
 const isMyRecordPage = route.path === '/myRecord';
 
 const isEmail_1Page = route.path === '/email_1';
 const isEmail_2Page = route.path === '/email_2';
 const isRegisterPage = route.path === '/register';
 const isForgetPWD_1Page = route.path === '/forgetPWD_1';
 const isForgetPWD_2Page = route.path === '/forgetPWD_2';
 const isResetPWDPage = route.path === '/resetPWD';
 
 
 
 
 
 const alert_show = () => {
     alert("敬請期待！");
 };
 
 const logout = async () => {
     try {
         $store.CLEAR_USER();
         router.push("/");
         window.location.reload();
 
 
     } catch (error) {
         console.log(error);
     }
 };
 
 // header
 let isOptionsExpanded = ref(false);
 let isOptionsExpanded_member = ref(false);
 
 const closeMenuOnClickOutside = (event) => {
     // 如果菜单未展开，不执行任何操作
     if (!isOptionsExpanded.value && !isOptionsExpanded_member.value) return;
 
     const isClickInsideMenu = event.target.closest(".navbar_dropdown"); // 用你的菜单类名替换
     const isClickInsideButton = event.target.closest(".nav_show_bar_member"); // 用你的按钮类名替换
 
     // 如果点击的不是菜单内部或按钮，则关闭菜单
     if (!isClickInsideMenu && !isClickInsideButton) {
         isOptionsExpanded.value = false;
         isOptionsExpanded_member.value = false;
         show_lang.value = false
     }
 };
 
 let toggleOptionsExpanded = () => {
     isOptionsExpanded.value = !isOptionsExpanded.value;
     show_lang.value = false
 };
 let toggleOptionsExpanded_member = () => {
     isOptionsExpanded_member.value = !isOptionsExpanded_member.value;
 };
 
 const  show_lang =ref(false)
 const toggle_show_lang =() => {
 show_lang.value = !show_lang.value
 }
 
 const change_lang = (lang) => {
     $store.SET_LOCALE(lang)
     location. reload()
 }
 
 const startSetting = () => {
     if ($store.isLogin) {
         router.push("/setting");
     } else {
         const response = confirm("請先登入");
         if (response === true) {
             router.push("/login");
         } else {
             router.push("/");
         }
     }
 };
 
 </script>
 