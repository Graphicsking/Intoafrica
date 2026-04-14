<template>
  <section class="relative overflow-hidden" style="min-height: 420px">
    <div class="absolute inset-0 z-0">
      <img :src="heroBg" alt="What We Do" class="w-full h-full object-cover object-center" />
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.5) 45%,
            rgba(0, 0, 0, 0.2) 70%,
            transparent 100%
          );
        "
      ></div>
    </div>
    <div class="relative z-10 w-full h-full flex items-center" style="padding: 120px 120px 60px">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">
        <h1
          class="font-bold text-white leading-tight"
          style="font-family: 'Playfair Display', serif; font-size: clamp(3rem, 6vw, 5rem)"
        >
          What We Do
        </h1>
        <p class="text-white/85 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          IntoAfrica Legacy Initiative designs and delivers experiential learning and purposeful
          travel programs that support young people, families, and global participants through
          meaningful journeys rooted in purpose, responsibility, culture, and nature.<br /><br />
          Our work brings together mentorship, life skills, ethical travel, and reflection, ensuring
          that learning happens through lived experience — not observation.<br /><br />
          We operate through three interconnected pathways.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroBg from '@/assets/images/whatwedo-hero-bg.jpg'
</script>
