<template>
    <div class="p-10">
        <h2 class="text-3xl font-bold mb-6">Shop Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="p in products" :key="p.id" class="border p-6 rounded-lg shadow flex flex-col">
                <h3 class="text-xl font-semibold">{{ p.name }}</h3>
                <p class="text-gray-600 mt-2">$ {{ p.price }}</p>
                <button class="mt-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
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

const products = [
    { id: 1, name: "Smart Greenhouse Sheet", price: 120 },
    { id: 2, name: "IoT Sensor Kit", price: 80 },
    { id: 3, name: "AI Growth Plan (1 year)", price: 50 },
];
</script>
