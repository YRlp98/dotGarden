<template>
    <div class="min-h-screen flex flex-col">
        <!-- Hero -->
        <section class="h-screen flex flex-col items-center justify-center text-center py-20 bg-green-100">
            <h1 class="text-5xl font-bold text-green-800">dotGarden 🌱</h1>
            <p class="mt-4 text-lg text-gray-600 max-w-xl">
                Smart IoT greenhouses connected to AI. Monitor, optimize, and grow your plants with ease.
            </p>
            <NuxtLink to="/shop" class="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
                Explore Shop
            </NuxtLink>
        </section>

        <!-- Features -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
            <div class="p-6 border rounded-xl shadow">
                <h3 class="text-xl font-semibold">🌞 Smart Light Control</h3>
                <p class="mt-2 text-gray-600">AI adjusts the right amount of light for healthy growth.</p>
            </div>
            <div class="p-6 border rounded-xl shadow">
                <h3 class="text-xl font-semibold">💧 Automated Watering</h3>
                <p class="mt-2 text-gray-600">Monitor soil moisture and let AI optimize irrigation.</p>
            </div>
            <div class="p-6 border rounded-xl shadow">
                <h3 class="text-xl font-semibold">📱 Mobile App</h3>
                <p class="mt-2 text-gray-600">Track growth, receive alerts, and shop directly.</p>
            </div>
        </section>
    </div>
</template>
