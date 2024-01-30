import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();


export const useDishStore = defineStore('dish', () => {
  
const meals = ref([
  {
    name: '牛排',
    category: '蛋餅',
    price: '45',
    image: 'https://hips.hearstapps.com/hmg-prod/images/new-project-63-1636610826.jpg?crop=0.490xw:0.980xh;0,0.0196xh&resize=640:*',
    amount: 0 // 客戶點的量
  },
  {
    name: '牛肉麵',
    category: '麵食',
    price: '120',
    image: 'https://media.istockphoto.com/id/617780768/photo/time-for-barbecue.jpg?s=1024x1024&w=is&k=20&c=x-5CAoHaRWK5-AH6ICzYr-57UCiLbW8AS9eC-yYID80=',
 //  客戶點的量
amount: 0,
  },
  {
    name: '雞排便當',
    category: '便當',
    price: '90',
    image: 'https://media.istockphoto.com/id/1402612822/photo/friends-having-a-barbecue-party.jpg?s=1024x1024&w=is&k=20&c=6-ftj18sdfF076FbwpdpNVzYGJ7jpEXjb4aXOHmhaXo=',
 //  客戶點的量
amount: 0,
  },
  {
    name: '海鮮披薩',
    category: '披薩',
    price: '180',
    image: 'https://media.istockphoto.com/id/617780768/photo/time-for-barbecue.jpg?s=1024x1024&w=is&k=20&c=x-5CAoHaRWK5-AH6ICzYr-57UCiLbW8AS9eC-yYID80=',
 //  客戶點的量
amount: 0,
  },
  {
    name: '沙拉三明治',
    category: '三明治',
    price: '60',
    image: 'https://media.istockphoto.com/id/603906484/photo/vegetable-salad.jpg?s=1024x1024&w=is&k=20&c=t5NQDSRIomaRRcU1A1xdBuDM7AMtRQwIbFDAARk7Rr4=',
 //  客戶點的量
amount: 0,
  },
  {
    name: '炸雞翅',
    category: '小吃',
    price: '70',
    image: 'https://media.istockphoto.com/id/1402612822/photo/friends-having-a-barbecue-party.jpg?s=1024x1024&w=is&k=20&c=6-ftj18sdfF076FbwpdpNVzYGJ7jpEXjb4aXOHmhaXo=',
 //  客戶點的量
amount: 0,
  },
  {
    name: '綜合壽司',
    category: '壽司',
    price: '150',
    image: 'https://media.istockphoto.com/id/585769692/photo/delicious-spaghetti-served-on-a-black-plate.jpg?s=1024x1024&w=is&k=20&c=9uQ41PXPJTcC3P9VbOf1KVniR4cLlWAevvttVuEUPMI=',
 //  客戶點的量
amount: 0,
  },
  {
    name: '烤肉串',
    category: '串燒',
    price: '100',
    image: 'https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=2048x2048&w=is&k=20&c=1L46K6jtSK0cuy9YTGuR7yf8621sftHxEpTkoWtmmk4=',
 //  客戶點的量
amount: 0,
  },
  {
    name: '奶茶珍珠',
    category: '飲料',
    price: '50',
    image: 'https://media.istockphoto.com/id/1325891675/photo/red-rose-and-white-wine-in-glasses-on-white-background-top-view-wine-bar-shop-winery-wine.jpg?s=1024x1024&w=is&k=20&c=h6erYoqV3ItaW4hqBLXQg05FrD6gooAuYgZ7yLEf1mw=',
 //  客戶點的量
amount: 0,
  },
  {
    name: '水果沙拉',
    category: '沙拉',
    price: '80',
    image: 'https://media.istockphoto.com/id/603906484/photo/vegetable-salad.jpg?s=1024x1024&w=is&k=20&c=t5NQDSRIomaRRcU1A1xdBuDM7AMtRQwIbFDAARk7Rr4=',
 //  客戶點的量
amount: 0,
  }
]
)

   
    


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

