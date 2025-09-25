<template>
    <div class="min-h-screen flex flex-col">
        <!-- Hero -->
        <section class="relative h-screen flex flex-col items-center justify-center text-center">
            <!-- Background image -->
            <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/hero-bg.jpg');">
            </div>

            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/40"></div>

            <!-- Content -->
            <div class="relative z-10 px-6">
                <h1 class="text-5xl font-bold text-white drop-shadow-lg">
                    dotGarden 🌱
                </h1>
                <p class="mt-4 text-lg text-gray-100 max-w-xl mx-auto drop-shadow">
                    Smart IoT greenhouses connected to AI. Monitor, optimize, and grow your
                    plants with ease.
                </p>
                <NuxtLink to="/shop"
                    class="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    Explore Shop
                </NuxtLink>
            </div>
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
