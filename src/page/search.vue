<template>
  <Navbar @research="filterData()" />

  <div
    class="relative min-h-[80vh] pt-[110px] px-[20px] text-[20px] font-bold pb-[20px]"
  >
    <p class="pl-[5vw]">
      搜尋 &nbsp;&nbsp;{{ $store.searchWord }}&nbsp;&nbsp;結果為：
    </p>

    <!-- 搜索結果區 -->
    <section
      class="w-full mt-[30px] pr-[35px] pb-[20px] md:px-[10vw] flex sm:flex-col gap-[40px] md:flex-row md:flex-wrap md:flex justify-center"
    >
      <div
        v-for="(card, index) in filteredCards"
        :key="index"
        class="w-[400px] rounded-[10px] shadow-md flex-shrink-0 hover:shadow-xl"
      >
        <img
          :src="card.image"
          :alt="card.title"
          style="
            height: 222px;
            object-fit: cover;
            width: 400px;
            border-radius: 10px 10px 0px 0px;
          "
        />
        <div class="card-content px-[5px] pt-[15px] relative flex flex-col">
          <h3 class="text-[28px] font-semibold mb-[10px] pl-[8px]">
            {{ card.title }}
          </h3>
          <p
            class="px-[10px] text-[18px] text-black/80 h-[80px] overflow-hidden mb-[10px]"
            style="
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
            "
          >
            {{ card.description }}
          </p>
          <!-- 新增按钮 -->
        </div>

        <a
          :href="card.href"
          class="button text-center font-normal text-[16px] tracking-wider w-full hover:bg-stone-600"
          >觀 看 更 多</a
        >
      </div>
    </section>
  </div>
  <ft></ft>
</template>
<script setup>
import { ref, onMounted } from "vue";
import ft from "@/components/footer.vue";
import Navbar from "@/components/Navbar.vue";

import { useSearchStore } from "@/stores/search.js";
const $store = useSearchStore;

// 原始資料
// 卡片數據
const cards = ref([
   {
    image: 'https://media.istockphoto.com/id/617780768/photo/time-for-barbecue.jpg?s=1024x1024&w=is&k=20&c=x-5CAoHaRWK5-AH6ICzYr-57UCiLbW8AS9eC-yYID80=',
    title: '玉米蛋餅',
    description: '綿密的玉米蛋餅搭配新鮮雞蛋，香氣四溢，外酥內嫩的口感令人愛不釋手。一口咬下，彷彿置身在滿溢著美味的早晨小吃攤旁，傳統與創新的絕佳組合。',
    href: '#test_menu',
  },
  {
    image: 'https://media.istockphoto.com/id/617780768/photo/time-for-barbecue.jpg?s=1024x1024&w=is&k=20&c=x-5CAoHaRWK5-AH6ICzYr-57UCiLbW8AS9eC-yYID80=',
    title: '牛肉麵',
    description: '濃郁的牛肉湯底搭配Q彈的拉麵，肉質鮮嫩多汁，入口即化。每一口都散發著獨特的香氣，令人回味無窮。',
    href: '#test_menu',
    amount: 0,
  },
  {
    image: 'https://media.istockphoto.com/id/1402612822/photo/friends-having-a-barbecue-party.jpg?s=1024x1024&w=is&k=20&c=6-ftj18sdfF076FbwpdpNVzYGJ7jpEXjb4aXOHmhaXo=',
    title: '雞排便當',
    description: '外酥內嫩的炸雞排，搭配香氣十足的白飯，再淋上特製的醬汁，讓人一口接一口停不下來。簡單而美味的午餐選擇。',
    href: '#test_menu',
    amount: 0,
  },
  {
    image: 'https://media.istockphoto.com/id/617780768/photo/time-for-barbecue.jpg?s=1024x1024&w=is&k=20&c=x-5CAoHaRWK5-AH6ICzYr-57UCiLbW8AS9eC-yYID80=',
    title: '海鮮披薩',
    description: '新鮮的海鮮搭配豐富的披薩餅底，綿密的芝士在烤箱中融化，散發出撲鼻的芳香。每一口都是滿滿的海之鮮味。',
    href: '#test_menu',
    amount: 0,
  },
  {
    image: 'https://media.istockphoto.com/id/603906484/photo/vegetable-salad.jpg?s=1024x1024&w=is&k=20&c=t5NQDSRIomaRRcU1A1xdBuDM7AMtRQwIbFDAARk7Rr4=',
    title: '沙拉三明治',
    description: '清新的蔬菜搭配多層次的三明治，每一口都能感受到蔬果的新鮮與多汁。健康美味的選擇，讓你隨時保持元氣。',
    href: '#test_menu',
    amount: 0,
  },
  {
    image: 'https://media.istockphoto.com/id/1402612822/photo/friends-having-a-barbecue-party.jpg?s=1024x1024&w=is&k=20&c=6-ftj18sdfF076FbwpdpNVzYGJ7jpEXjb4aXOHmhaXo=',
    title: '炸雞翅',
    description: '香脆的炸雞翅，外酥內嫩，搭配特製醬汁，是聚餐小點心的絕佳選擇。無論是單吃或搭配其他料理，都是美味的享受。',
    href: '#test_menu',
    amount: 0,
  },
  {
    image: 'https://media.istockphoto.com/id/585769692/photo/delicious-spaghetti-served-on-a-black-plate.jpg?s=1024x1024&w=is&k=20&c=9uQ41PXPJTcC3P9VbOf1KVniR4cLlWAevvttVuEUPMI=',
    title: '綜合壽司',
    description: '色澤鮮豔的綜合壽司，包含新鮮的生魚片、蛋糕卷、和風飯，每一口都是滋味的享受。新鮮美味，帶給你不同的日本料理饗宴。',
    href: '#test_menu',
    amount: 0,
  },
  {
    image: 'https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=2048x2048&w=is&k=20&c=1L46K6jtSK0cuy9YTGuR7yf8621sftHxEpTkoWtmmk4=',
    title: '烤肉串',
    description: '香烤的肉串，每一根都經過巧妙的調味，口感香嫩多汁。燒烤時散發的香氣，讓你即刻垂涎三尺。',
    href: '#test_menu',
    amount: 0,
  },
  {
    image: 'https://media.istockphoto.com/id/1325891675/photo/red-rose-and-white-wine-in-glasses-on-white-background-top-view-wine-bar-shop-winery-wine.jpg?s=1024x1024&w=is&k=20&c=h6erYoqV3ItaW4hqBLXQg05FrD6gooAuYgZ7yLEf1mw=',
    title: '奶茶珍珠',
    description: '香濃的奶茶搭配Q彈的珍珠，一口奶茶一口珍珠，層次豐富的口感令人陶醉。清新的奶茶香氣，讓你沉浸在美好的味覺饗宴。',
    href: '#test_menu',
    amount: 0,
  },
  {
    image: 'https://media.istockphoto.com/id/603906484/photo/vegetable-salad.jpg?s=1024x1024&w=is&k=20&c=t5NQDSRIomaRRcU1A1xdBuDM7AMtRQwIbFDAARk7Rr4=',
    title: '水果沙拉',
    description: '五彩繽紛的水果沙拉，包含新鮮的草莓、藍莓、蜜瓜等多種水果，搭配清新的沙拉醬，健康美味的甜點選擇。',
    href: '#test_menu',
    amount: 0,
  },
  {
    image: 'https://media.istockphoto.com/id/1325891675/photo/red-rose-and-white-wine-in-glasses-on-white-background-top-view-wine-bar-shop-winery-wine.jpg?s=1024x1024&w=is&k=20&c=h6erYoqV3ItaW4hqBLXQg05FrD6gooAuYgZ7yLEf1mw=',
    title: '奶茶',
    description: '香濃的奶茶，搭配濃郁的奶香，一口一口都是幸福的滋味。清新的茶香和濃郁的奶味交織在一起，令人陶醉。',
    href: '#test_menu',
    amount: 0,
  },
  {
    image: 'https://media.istockphoto.com/id/603906484/photo/vegetable-salad.jpg?s=1024x1024&w=is&k=20&c=t5NQDSRIomaRRcU1A1xdBuDM7AMtRQwIbFDAARk7Rr4=',
    title: '生菜沙拉',
    description: '新鮮的生菜搭配多種蔬菜，淋上清爽的沙拉醬，每一口都是健康與美味的結合。輕盈的口感，讓你愛不釋手。',
    href: '#test_menu',
    amount: 0,
  },
]);

// 篩選過資料
const filteredCards = ref([]);
const filterData = () => {
  console.log("我又執行啦啊啊啊");
  filteredCards.value = cards.value.filter((card) => {
    const titleMatch = card.title.includes($store.searchWord);
    const descriptionMatch = card.description.includes($store.searchWord);

    return titleMatch, descriptionMatch;
  });
};

onMounted(() => {
  filterData();
});
</script>
<style scoped>
.button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #0e0d0ee6; /* 按钮背景颜色 */
  color: #fff; /* 按钮文字颜色 */
  text-decoration: none; /* 去掉下划线 */
  display: inline-block; /* 使得padding生效 */
  border-radius: 0px 0px 10px 10px; /* 按钮圆角 */
  transition: background-color 0.3s; /* 过渡效果 */
}
</style>