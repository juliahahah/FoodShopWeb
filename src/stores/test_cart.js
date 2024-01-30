import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();


export const useCartStore = defineStore('cart', () => {

// 初始購物車是空的
const cartArray =ref([])


// 功能

// 新增餐點進購物車
const addMeal = (meal,index) =>{

// 查找他是購物車的第幾個餐點
  const existingIndex = cartArray.value.findIndex((cartMeal) => cartMeal.name === meal.name);
  
  // -1 代表沒有
  if(existingIndex ===  -1) {
    console.log(meal)
    cartArray.value.push(meal)
  }else {

   console.log(cartArray.value[existingIndex])
   cartArray.value[existingIndex].amount ++

  }
  console.log(cartArray.value)
}

// 刪除餐點
const deleteMeal = (meal) =>{
  // 如果不確定是陣列的第幾個的話可以用下面這個，來確定他是第幾個
  const existingIndex = cartArray.value.findIndex((cartMeal) => cartMeal.name === meal.name);

   cartArray.value.splice(existingIndex, 1);
}


   
    


    return { 
      cartArray,
      addMeal,
      deleteMeal
    }
},
{
    persist: [
    {
            key: 'cartArray', 
            paths: ['cartArray'], 
        },
       
        
    ]
})