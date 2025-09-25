<template>
    <footer class="bg-green-900 text-gray-100 mt-20">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-12">
            <!-- Brand -->
            <div>
                <h2 class="text-2xl font-bold">dotGarden 🌱</h2>
                <p class="mt-3 text-gray-300">
                    Smart greenhouses powered by IoT & AI. Grow healthier plants with ease.
                </p>
            </div>

            <!-- Links -->
            <div>
                <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li>
                        <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/shop" class="hover:underline">Shop</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="hover:underline">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
                    </li>
                </ul>
            </div>

            <!-- Newsletter -->
            <div>
                <h3 class="text-lg font-semibold mb-4">Stay Updated</h3>
                <form class="flex flex-col gap-3">
                    <input type="email" placeholder="Enter your email"
                        class="px-4 py-2 rounded-md text-gray-800 focus:outline-none" />
                    <button type="submit" class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md font-medium">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>

        <!-- Bottom -->
        <div class="border-t border-green-700 py-4 text-center text-sm text-gray-400">
            © {{ new Date().getFullYear() }} dotGarden. All rights reserved.
        </div>
    </footer>
</template>
