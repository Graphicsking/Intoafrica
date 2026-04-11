<template>
  <section class="relative overflow-hidden" style="min-height: 280px">
    <div class="absolute inset-0 z-0">
      <img :src="readyBg" alt="Ready to begin" class="w-full h-full object-cover object-center" />
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            to right,
            rgba(30, 30, 30, 0.9) 0%,
            rgba(30, 30, 30, 0.7) 45%,
            rgba(30, 30, 30, 0.2) 70%,
            transparent 100%
          );
        "
      ></div>
    </div>

    <div class="relative z-10 w-full flex items-center" style="padding: 64px 120px">
      <div class="max-w-md flex flex-col gap-5">
        <h2
          class="font-bold text-white leading-tight"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          Ready to Begin?
        </h2>
        <p class="text-white/80 text-sm" style="font-family: 'Lato', sans-serif">
          Explore upcoming journeys or get in touch to learn more.
        </p>
        <div class="flex flex-col gap-2">
          <a
            href="#"
            class="flex items-center gap-2 text-sm"
            style="color: #d4a96a; font-family: 'Lato', sans-serif"
          >
            <PhCalendarBlank :size="16" color="#D4A96A" weight="regular" />
            View Program Calendar
          </a>
          <a
            href="#"
            class="flex items-center gap-2 text-sm"
            style="color: #d4a96a; font-family: 'Lato', sans-serif"
          >
            <PhPhone :size="16" color="#D4A96A" weight="regular" />
            Contact Us
          </a>
        </div>
        <div>
          <a
            href="#"
            class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors inline-flex items-center justify-center px-7 py-3"
            style="font-family: 'Lato', sans-serif"
          >
            Support Our Work
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhCalendarBlank, PhPhone } from '@phosphor-icons/vue'
import readyBg from '@/assets/images/journeys-ready-bg.jpg'
</script>
