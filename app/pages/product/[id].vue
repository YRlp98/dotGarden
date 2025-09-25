<template>
    <div class="p-10 max-w-4xl mx-auto">
        <div v-if="pending" class="mt-20 text-gray-500">Loading product...</div>
        <div v-else-if="error" class="mt-20 text-red-600">Product not found.</div>

        <div v-else-if="product" class="mt-20 grid grid-cols-1 gap-8">
            <!-- Images -->
            <div>
                <img :src="selectedImage" :alt="product.name" class="w-full h-120 object-cover rounded-lg shadow mb-4" />
                <div class="flex gap-2">
                    <img v-for="img in product.images" :key="img" :src="img"
                        class="w-20 h-20 object-cover rounded cursor-pointer border-2"
                        :class="img === selectedImage ? 'border-green-600' : 'border-gray-200'"
                        @click="selectedImage = img" />
                </div>
            </div>

            <!-- Info -->
            <div>
                <h1 class="text-black text-3xl font-bold">{{ product.name }}</h1>
                <p class="mt-4 text-gray-600">{{ product.description }}</p>
                <p class="mt-6 text-2xl font-semibold text-green-700">€ {{ product.price }}</p>

                <button class="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    @click="addToCart(product)">
                    Add to Cart
                </button>
            </div>
        </div>

        <div v-else class="text-gray-500">No product found.</div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCartStore } from "@/stores/cart";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string[];
}

const route = useRoute();
const id = Number(route.params.id);

const cart = useCartStore();

const { data: products, pending, error } = await useFetch<Product[]>("/data/products.json");

const product = computed(() =>
    products.value ? products.value.find((p) => p.id === id) : null
);

const selectedImage = ref<string>(product.value?.images?.[0] ?? "");

watch(product, (p) => {
    if (p?.images?.length) selectedImage.value = p.images[0] ?? "";
});

function addToCart(p: Product) {
    cart.addItem(p);
}
</script>
