import { createRouter, createWebHashHistory } from 'vue-router';
import home from '@/page/HomePage.vue';
import Cart from '@/page/Cart.vue';
import Shop from '@/page/Shop.vue';
import Send from '@/page/Send.vue';
import Invoice from '@/page/Invoice.vue';

// test資料
import test_menu from '@/page/test_menu.vue';
import test_order from '@/page/test_order.vue';

const routes = [
  {
    path: '/test_menu',
    name: 'test_menu', // 添加名稱，可選
    component: test_menu,
    meta: {
      title: 'Menu | 猴猴早餐店',
    }
  },
  {
    path: '/test_order',
    name: 'test_order', // 添加名稱，可選
    component: test_order,
    meta: {
      title: 'Order | 猴猴早餐店', // 適當修改 title
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      title: 'Shopping Cart | 猴猴早餐店',
    }
  },
  {
    path: '/',
    component: home,
    meta: {
      title: 'Home | 猴猴早餐店',
      login: false
    }
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop,
    meta: {
      title: 'Shop | 猴猴早餐店',
    }
  },
  {
    path: '/send',
    name: 'send',
    component: Send,
    meta: {
      title: 'Send | 猴猴早餐店',
    }
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: Invoice,
    meta: {
      title: 'Invoice | 猴猴早餐店',
    }
  },
  // 網址亂打，只會回首頁
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
})

export default router;

