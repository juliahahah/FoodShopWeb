<template>
  <div>
    <Navbar />
    
    <div class="bg-gray-100 min-h-screen">
      <div class="max-w-2xl mx-auto bg-white p-6 rounded shadow-md">
        <h1 class="mt-[80px] text-[60px] font-bold mb-4 text-center">
          Thank you for your purchase!
        </h1>
        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            <a
              href="#test_menu"
              class="mt-2 text-[40px] font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue shopping
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Ft />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Ft from "../components/footer.vue";
</script>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

.bg-gray-100 {
  flex: 1;
}
</style>
