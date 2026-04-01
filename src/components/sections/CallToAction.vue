<template>
  <section class="relative overflow-hidden" style="min-height: 320px">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img :src="ctaBg" alt="Family on journey" class="w-full h-full object-cover object-center" />
      <!-- Gradient: dark on left fading to transparent on right -->
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            to right,
            rgba(30, 30, 30, 0.92) 0%,
            rgba(30, 30, 30, 0.75) 40%,
            rgba(30, 30, 30, 0.2) 70%,
            transparent 100%
          );
        "
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full h-full flex items-center" style="padding: 64px 120px">
      <div class="max-w-xl flex flex-col gap-6">
        <!-- Headline -->
        <h2
          class="font-bold text-white leading-tight"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          Ready <span style="color: #c94e00">to</span> Begin the Journey?
        </h2>

        <!-- Subtext -->
        <p class="text-white/80 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          Whether you are a parent, school leader, or partner, we invite you to walk with us in
          shaping grounded, responsible, and self-aware young leaders. Growth begins with one
          intentional step.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap gap-4">
          <a
            href="#"
            class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors duration-200 flex items-center justify-center px-7 py-3"
            style="font-family: 'Lato', sans-serif"
          >
            Apply for a Youth Safari
          </a>
          <a
            href="#"
            class="bg-transparent text-white text-sm font-bold transition-colors duration-200 flex items-center justify-center px-7 py-3 hover:bg-white hover:text-[#009857]"
            style="font-family: 'Lato', sans-serif; border: 2px solid white"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ctaBg from '@/assets/images/cta-bg.jpg'
</script>
