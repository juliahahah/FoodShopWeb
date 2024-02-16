import { defineStore } from 'pinia'

import { ref } from 'vue'
// import { useRouter } from "vue-router";
// const router = useRouter();


export const useSearchStore = defineStore('search', () => {
  const searchWord = ref('')
    
    return { 
        searchWord,
    }
},

{
    persist: [
  {
    key:'searchWord',
    paths: ['searchWord']
  },

]
})