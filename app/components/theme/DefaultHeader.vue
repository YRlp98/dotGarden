<template>
  <header class="w-full bg-white/70 backdrop-blur-md fixed top-0 z-50">
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl font-bold text-green-700">
        dotGarden 🌱
      </NuxtLink>

      <!-- Navigation Links -->
      <ul class="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><NuxtLink to="/" class="hover:text-green-700">Home</NuxtLink></li>
        <li><NuxtLink to="/" class="hover:text-green-700">Shop</NuxtLink></li>
        <li><NuxtLink to="/" class="hover:text-green-700">About</NuxtLink></li>
        <li><NuxtLink to="/" class="hover:text-green-700">Contact</NuxtLink></li>
      </ul>

      <!-- Cart Button -->
      <NuxtLink
        to="/cart"
        class="ml-4 flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Cart
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden ml-4 text-gray-700 focus:outline-none"
        @click="isOpen = !isOpen"
      >
        ☰
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-gray-50 border-t border-gray-200">
      <ul class="flex flex-col p-4 space-y-3">
        <li><NuxtLink to="/" class="hover:text-green-700">Home</NuxtLink></li>
        <li><NuxtLink to="/shop" class="hover:text-green-700">Shop</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:text-green-700">About</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-green-700">Contact</NuxtLink></li>
        <li><NuxtLink to="/cart" class="hover:text-green-700">Cart</NuxtLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isOpen = ref(false);
</script>
