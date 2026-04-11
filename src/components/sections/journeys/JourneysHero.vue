<template>
  <section class="relative overflow-hidden" style="min-height: 420px">
    <div class="absolute inset-0 z-0">
      <img
        :src="heroBg"
        alt="Experiences and Journeys"
        class="w-full h-full object-cover object-top"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>
    <div class="relative z-10 w-full h-full flex items-end" style="padding: 80px 120px 60px">
      <div class="max-w-2xl flex flex-col gap-4">
        <h1
          class="font-bold text-white leading-tight"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4rem)"
        >
          Experiences & Journeys
        </h1>
        <p class="text-white/85 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          Our experiences are designed as intentional journeys, not just trips. Each journey is
          thoughtfully curated to balance
          <strong>learning, reflection, culture, nature, and responsibility,</strong> while
          supporting the long-term sustainability of youth mentorship and life skills programs.
          Whether you are seeking deep personal transformation, meaningful travel, or a way to
          contribute responsibly, there is a journey designed for you.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroBg from '@/assets/images/journeys-hero-bg.jpg'
</script>
