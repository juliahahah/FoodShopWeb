<template>
  <div class="bg-orange-300 w-screen h-screen pt-[10vh]">
    <!-- title -->
    <div class="relative">
      <p class=" font-extrabold text-[48px] text-orange-500  w-full text-center">CHICHI's MENU</p>
    <p class="font-extrabold text-[48px]  text-white w-full text-center absolute top-0 left-[8px]">CHICHI's MENU</p>

    <button  @click="toggle_showCart()"
    class="rounded-[20px] bg-orange-400/80 w-[100px] h-[35px] shadow-md text-[#FFFFFF] font-semibold
     top-[100px] right-[20px] fixed"
    :class="{'rounded-t-[20px]':showCart.value==true}">購物車</button>
    </div>

    <!-- 購物車列表 -->
    <div v-if="showCart"
    class="w-[25%] min-h-[50vh] h-auto bg-orange-200/95 fixed top-[130px] right-0 drop-shadow-lg
    px-[20px] pt-[30px]
    flex  flex-col gap-[20px]">
      <div  v-for="(meal,index) in $cartStore.cartArray" >
        <div class="flex border-b-[1px] border-white pb-[10px]" >
        <img :src="meal.image" class="h-[100px] rounded-l-[8px]">
        <div class="h-[100px] w-full pl-[10px]">
          <p class="text-[20px]  font-medium text-orange-700/90 ]">{{ meal.name }}</p>
          <p class="pl-[10px]">${{meal.price}} &nbsp; &nbsp;&nbsp;</p>
          <p class="pl-[10px] pt-[10px]">{{ meal.amount }} 份</p>
        </div>
        </div>
        <!-- {{ meal }} -->
      </div>

      <p>小計：${{totalPrice()}}</p>
    </div>


    <!-- meals -->
    <div class="mt-[5vh] px-[8vw] py-[80px] bg-orange-200 min-h-[80vh] w-full grid md:grid-cols-4 md:gap-[50px] grid-cols-2 gap-[30px] " >

      <div v-for="(meal, index) in $dishStore.meals" >
        <div  class=" md:w-[300px] w-[200px] md:h-[300px] h-[250px]   bg-white rounded-[20px] shadow-md" >
          <div class="w-full">
             <img :src="meal.image" class="h-1/2 w-full object-cover rounded-t-[20px]" >
          <p class="text-[20px] font-semibold text-orange-600/90 m-[10px] ml-[10px]">{{ meal.name }}</p>

          <div class="flex justify-between pr-[10px]">

          <p class="text-[16px] font-semibold text-black/70 ml-[15px]">$ {{ meal.price }}</p>

          <div class="flex gap-[20px]">

          <button @click="reduceDish(meal,index) "
          class="w-[20px] h-[20px] bg-orange-600/80 text-white rounded-full text-[15px] leading-[15px] font-semibold shadow-lg active:bg-orange-400">
            -
          </button>
          <div class="w-[10px]">{{ meal.amount }}</div>
          <button @click="addDish(meal,index)"
           class="w-[20px] h-[20px] bg-orange-600/80 text-white rounded-full text-[15px] leading-[15px] font-semibold shadow-lg  active:bg-orange-400">
            +
          </button>

          </div>
          
          </div>

          </div>

         
      </div>
      </div>
    </div>



    
  </div>
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

import { useDishStore } from "@/stores/test_dish";
const $dishStore = useDishStore();
import { useCartStore } from "@/stores/test_cart";
const $cartStore = useCartStore();

const addDish=(meal,index)=>{

  $dishStore.meals[index].amount ++
  $cartStore.addMeal(meal)
}

const reduceDish =(meal,index) => {
  $dishStore.meals[index].amount =  $dishStore.meals[index].amount -1
  if( $dishStore.meals[index].amount <= 0) {

    $dishStore.meals[index].amount =0
    $cartStore.deleteMeal(meal)
  }
  // console.log(false)
}

const showCart = ref(false)
const toggle_showCart=() =>{
showCart.value =!showCart.value
}

const totalPrice = () => {
  return $cartStore.cartArray.reduce((total, meal) => {
    return total + meal.price * meal.amount;
  }, 0);
};

</script>