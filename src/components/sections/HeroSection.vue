<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="heroBg"
        alt="Young people on safari"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 w-full mx-auto pt-28 pb-20"
      style="padding-left: 120px; padding-right: 120px"
    >
      <div class="grid grid-cols-2 gap-12 items-end">
        <!-- Left: Headline only -->
        <div class="col-span-1">
          <h1
            class="text-white font-bold"
            style="
              font-family: 'Playfair Display', serif;
              font-size: clamp(2rem, 4.5vw, 4.5rem);
              line-height: 1.15;
            "
          >
            Guided journeys that shape confident, self-aware, and responsible global citizens.
          </h1>
        </div>

        <!-- Right: Subtext + CTA Buttons -->
        <div class="col-span-1 flex flex-col justify-end gap-6 pb-2">
          <p class="text-white text-base leading-relaxed" style="font-family: 'Lato', sans-serif">
            Through structured mentorship, cultural immersion, and guided reflection, we cultivate
            protected spaces where young people are seen, heard, and thoughtfully formed — growing
            in identity, responsibility, and purpose.
          </p>

          <!-- CTA Buttons -->
          <div class="flex gap-4">
            <a
              href="#"
              class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors duration-200 flex items-center justify-center"
              style="width: 220px; height: 48px"
              >Apply for a Youth Journey</a
            >
            <a
              href="#"
              class="bg-transparent text-white border-2 border-white text-sm font-bold hover:bg-white hover:text-[#009857] transition-colors duration-200 flex items-center justify-center"
              style="width: 220px; height: 48px"
              >Plan a Purposeful Journey</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      @click="scrollDown"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer group"
    >
      <span
        class="text-white/50 group-hover:text-white/80 text-xs tracking-[0.2em] uppercase transition-colors duration-200"
        style="font-family: 'Lato', sans-serif"
        >Scroll</span
      >
      <div
        class="w-px h-8 bg-white/30 group-hover:bg-white/60 animate-pulse transition-colors duration-200"
      ></div>
    </div>
  </section>
</template>

<script setup>
import heroBg from '@/assets/images/group-friends-out-bicycling-together 1.png'

const scrollDown = () => {
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
}
</script>
