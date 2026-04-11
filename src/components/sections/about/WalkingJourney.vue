<template>
  <section class="relative overflow-hidden" style="min-height: 340px">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="journeyBg"
        alt="Walking the journey together"
        class="w-full h-full object-cover object-center"
      />
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            to right,
            rgba(30, 30, 30, 0.9) 0%,
            rgba(30, 30, 30, 0.75) 45%,
            rgba(30, 30, 30, 0.25) 70%,
            transparent 100%
          );
        "
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full h-full flex items-center" style="padding: 64px 120px">
      <div class="max-w-lg flex flex-col gap-6">
        <!-- Headline -->
        <h2
          class="font-bold leading-tight"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          <span class="text-white">Walking the </span>
          <span style="color: #c94e00">Journey Together</span>
        </h2>

        <!-- Subtext -->
        <div class="flex flex-col gap-3">
          <p class="text-white/80 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Youth Safaris works with families, educators, community partners, and supporters who
            believe in thoughtful, values-based youth development.
          </p>
          <p class="text-white/80 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            We invite partners to walk alongside us, not as observers, but as companions on a shared
            journey of learning and growth.
          </p>
        </div>

        <!-- CTA Button -->
        <div>
          <a
            href="#"
            class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors duration-200 inline-flex items-center justify-center px-7 py-3"
            style="font-family: 'Lato', sans-serif"
          >
            Explore Youth Safaris
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import journeyBg from '@/assets/images/walking-journey-bg.jpg'
</script>
