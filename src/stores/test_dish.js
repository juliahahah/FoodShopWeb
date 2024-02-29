import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();


export const useDishStore = defineStore('dish', () => {

  const meals = ref([
    {
      name: '玉米蛋餅',
      category: '特色料理',
      price: '45',
      introduction: '香脆可口 | 玉米濃郁',
      image: 'https://media.istockphoto.com/id/617780768/photo/time-for-barbecue.jpg?s=1024x1024&w=is&k=20&c=x-5CAoHaRWK5-AH6ICzYr-57UCiLbW8AS9eC-yYID80=',
      amount: 0 // 客戶點的量
    },
    {
      name: '牛肉麵',
      category: '特色料理',
      price: '120',
      introduction: '牛肉湯底 | 嫩滑麵條',
      image: 'https://media.istockphoto.com/id/617780768/photo/time-for-barbecue.jpg?s=1024x1024&w=is&k=20&c=x-5CAoHaRWK5-AH6ICzYr-57UCiLbW8AS9eC-yYID80=',
      amount: 0,
    },
    {
      name: '雞排便當',
      category: '特色料理',
      price: '90',
      introduction: '香脆多汁的 | 美味便當飯',
      image: 'https://media.istockphoto.com/id/1402612822/photo/friends-having-a-barbecue-party.jpg?s=1024x1024&w=is&k=20&c=6-ftj18sdfF076FbwpdpNVzYGJ7jpEXjb4aXOHmhaXo=',
      amount: 0,
    },
    {
      name: '海鮮披薩',
      category: '特色料理',
      price: '180',
      introduction: '新鮮海鮮搭配 | 薄脆餅皮',
      image: 'https://media.istockphoto.com/id/617780768/photo/time-for-barbecue.jpg?s=1024x1024&w=is&k=20&c=x-5CAoHaRWK5-AH6ICzYr-57UCiLbW8AS9eC-yYID80=',
      amount: 0,
    },
    {
      name: '沙拉三明治',
      category: '特色料理',
      price: '60',
      introduction: '蔬果鮮甜 | 夾入多層口感',
      image: 'https://media.istockphoto.com/id/603906484/photo/vegetable-salad.jpg?s=1024x1024&w=is&k=20&c=t5NQDSRIomaRRcU1A1xdBuDM7AMtRQwIbFDAARk7Rr4=',
      amount: 0,
    },
    {
      name: '炸雞翅',
      category: '特色料理',
      price: '70',
      introduction: '外酥內嫩 | 搭配香醇醬汁',
      image: 'https://media.istockphoto.com/id/1402612822/photo/friends-having-a-barbecue-party.jpg?s=1024x1024&w=is&k=20&c=6-ftj18sdfF076FbwpdpNVzYGJ7jpEXjb4aXOHmhaXo=',
      amount: 0,
    },
    {
      name: '綜合壽司',
      category: '主打精選',
      price: '150',
      introduction: '新鮮刺身 | 熟成醋飯！',
      image: 'https://media.istockphoto.com/id/585769692/photo/delicious-spaghetti-served-on-a-black-plate.jpg?s=1024x1024&w=is&k=20&c=9uQ41PXPJTcC3P9VbOf1KVniR4cLlWAevvttVuEUPMI=',
      amount: 0,
    },
    {
      name: '烤肉串',
      category: '主打精選',
      price: '100',
      introduction: '香烤肉串 | 搭配獨特調味',
      image: 'https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=2048x2048&w=is&k=20&c=1L46K6jtSK0cuy9YTGuR7yf8621sftHxEpTkoWtmmk4=',
      amount: 0,
    },
    {
      name: '奶茶珍珠',
      category: '主打精選',
      price: '50',
      introduction: '香濃奶茶 | Q彈珍珠',
      image: 'https://media.istockphoto.com/id/1325891675/photo/red-rose-and-white-wine-in-glasses-on-white-background-top-view-wine-bar-shop-winery-wine.jpg?s=1024x1024&w=is&k=20&c=h6erYoqV3ItaW4hqBLXQg05FrD6gooAuYgZ7yLEf1mw=',
      amount: 0,
    },
    {
      name: '水果沙拉',
      category: '季節料理',
      price: '80',
      introduction: '五彩繽紛 | 清新爽口',
      image: 'https://media.istockphoto.com/id/603906484/photo/vegetable-salad.jpg?s=1024x1024&w=is&k=20&c=t5NQDSRIomaRRcU1A1xdBuDM7AMtRQwIbFDAARk7Rr4=',
      amount: 0,
    },
    {
      name: '奶茶',
      category: '季節料理',
      price: '50',
      introduction: '濃郁奶香 | 香甜滑順',
      image: 'https://media.istockphoto.com/id/1325891675/photo/red-rose-and-white-wine-in-glasses-on-white-background-top-view-wine-bar-shop-winery-wine.jpg?s=1024x1024&w=is&k=20&c=h6erYoqV3ItaW4hqBLXQg05FrD6gooAuYgZ7yLEf1mw=',
      amount: 0,
    },
    {
      name: '生菜沙拉',
      category: '季節料理',
      price: '70',
      introduction: '新鮮生菜 | 健康美味',
      image: 'https://media.istockphoto.com/id/603906484/photo/vegetable-salad.jpg?s=1024x1024&w=is&k=20&c=t5NQDSRIomaRRcU1A1xdBuDM7AMtRQwIbFDAARk7Rr4=',
      amount: 0,
    }
  ]);
  





  return {
    meals
  }
},
  {
    persist: [
      {
        key: 'meals',
        paths: ['meals'],
      },


    ]
  })

