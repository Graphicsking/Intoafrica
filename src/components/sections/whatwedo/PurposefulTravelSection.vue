<template>
  <section class="bg-white px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto rounded-xl overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <!-- Left: green card -->
        <div class="bg-[#009857] p-10 sm:p-12 flex flex-col gap-5 justify-center">
          <h2
            class="font-bold text-white leading-tight"
            style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3.5vw, 2.8rem)"
          >
            Purposeful <span style="color: #d4a96a">Travel</span>
          </h2>
          <p
            class="text-white/70 text-xs font-bold tracking-widest uppercase"
            style="font-family: 'Lato', sans-serif"
          >
            Ethical Travel That Supports Learning & Impact
          </p>
          <p class="text-white/85 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Purposeful Travel is the travel arm of IntoAfrica Legacy Initiative. It allows
            individuals and groups to experience Africa through intentional, guided journeys that
            prioritise learning, responsibility, and respect, while also supporting the
            sustainability of our youth programs.
          </p>
          <p class="text-white/85 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Purposeful Travel operates through three distinct experience types, each with a clear
            purpose.
          </p>
        </div>

        <!-- Right: image -->
        <div style="min-height: 320px">
          <img :src="travelImg" alt="Purposeful travel" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import travelImg from '@/assets/images/purposeful-travel-wwd.jpg'
</script>
