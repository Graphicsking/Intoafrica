<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="ethicsHeroBg"
        alt="Ethics and Safeguarding"
        class="w-full h-full object-cover object-center"
      />
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.55) 0%,
            rgba(0, 0, 0, 0.35) 50%,
            rgba(0, 0, 0, 0.45) 100%
          );
        "
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Heading -->
        <div>
          <h1
            class="font-bold text-white leading-tight"
            style="font-family: 'Playfair Display', serif; font-size: clamp(2.8rem, 6vw, 5rem)"
          >
            Ethics &amp; Safeguarding
          </h1>
        </div>

        <!-- Right: Commitment text + buttons -->
        <div class="flex flex-col gap-6">
          <p
            class="text-white/70 text-xs font-bold tracking-widest uppercase"
            style="font-family: 'Lato', sans-serif"
          >
            Our Commitment
          </p>

          <p class="text-white/90 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Youth Safaris is committed to creating learning and travel environments that are safe,
            respectful, and grounded in dignity. Our work centres on young people, and we take
            seriously our responsibility to protect their wellbeing, privacy, and growth at every
            stage of engagement. Ethics guide how we design programs, work with partners, and hold
            space for learning.
          </p>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4">
            <a
              href="#"
              class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors duration-200 flex items-center justify-center px-7 py-3"
              style="font-family: 'Lato', sans-serif"
            >
              Join the Legacy
            </a>
            <a
              href="#"
              class="bg-transparent text-white text-sm font-bold transition-colors duration-200 flex items-center justify-center px-7 py-3 hover:bg-white hover:text-[#009857]"
              style="font-family: 'Lato', sans-serif; border: 2px solid white"
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ethicsHeroBg from '@/assets/images/ethics-hero-bg.jpg'
</script>
