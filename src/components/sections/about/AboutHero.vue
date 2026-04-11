<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="aboutHeroBg"
        alt="About Us background"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/55"></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 flex flex-col items-center text-center gap-6"
    >
      <!-- Tag line -->
      <p
        class="text-white/70 text-sm tracking-widest uppercase"
        style="font-family: 'Lato', sans-serif"
      >
        A Journey With Purpose
      </p>

      <!-- Title -->
      <h1
        class="font-bold text-white leading-tight"
        style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 6vw, 5rem)"
      >
        About Us
      </h1>

      <!-- Description -->
      <p
        class="text-white/80 text-base leading-relaxed max-w-2xl"
        style="font-family: 'Lato', sans-serif"
      >
        Youth Safaris is a purposeful travel and youth development organization rooted in African
        context, values and lived experience. We create structured, reflective journeys where young
        people grow in responsibility, self-awareness, and practical life readiness — through
        adventure, cultural immersion, and trusted mentorship. When guided with intention, travel
        becomes a classroom, a space for honest reflection, and responsible growth.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap gap-4 justify-center mt-2">
        <a
          href="#"
          class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors duration-200 flex items-center justify-center px-8 py-3.5"
          style="font-family: 'Lato', sans-serif"
        >
          Join the Legacy
        </a>
        <a
          href="#"
          class="bg-transparent text-white text-sm font-bold transition-colors duration-200 flex items-center justify-center px-8 py-3.5 hover:bg-white hover:text-[#009857]"
          style="font-family: 'Lato', sans-serif; border: 2px solid white"
        >
          Explore Our Programs
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
    >
      <span
        class="text-white/50 text-xs tracking-[0.2em] uppercase"
        style="font-family: 'Lato', sans-serif"
        >Scroll</span
      >
      <div class="w-px h-8 bg-white/30 animate-pulse"></div>
    </div>
  </section>
</template>

<script setup>
import aboutHeroBg from '@/assets/images/about-hero-bg.jpg'
</script>
