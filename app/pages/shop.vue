<template>
    <div class="p-10">
        <h2 class="text-3xl font-bold mb-6">Shop Products</h2>

        <!-- Loading/Error states -->
        <div v-if="pending" class="text-gray-500">Loading products...</div>
        <div v-else-if="error" class="text-red-600">Failed to load products.</div>

        <!-- Products -->
        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="p in products" :key="p.id" class="border p-6 rounded-lg shadow flex flex-col">
                <img :src="p.image" :alt="p.name" class="w-full h-40 object-cover rounded-md mb-4" />
                <h3 class="text-xl font-semibold">{{ p.name }}</h3>
                <p class="text-gray-600 mt-2">{{ p.description }}</p>
                <p class="text-lg font-bold mt-4">$ {{ p.price }}</p>
                <button class="mt-8 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    @click="cart.addItem(p)">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();

const { data: products, pending, error } = await useFetch("/data/products.json");
</script>
