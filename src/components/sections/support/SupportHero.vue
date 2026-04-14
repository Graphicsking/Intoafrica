<template>
  <section class="relative overflow-hidden" style="min-height: 420px">
    <div class="absolute inset-0 z-0">
      <img :src="heroBg" alt="Support Our Work" class="w-full h-full object-cover object-center" />
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.55) 45%,
            rgba(0, 0, 0, 0.2) 70%,
            transparent 100%
          );
        "
      ></div>
    </div>

    <div class="relative z-10 w-full h-full flex items-center" style="padding: 120px 120px 60px">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">
        <!-- Left -->
        <div class="flex flex-col gap-4">
          <h1
            class="font-bold text-white leading-tight"
            style="font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4rem)"
          >
            Why Your Support Matters
          </h1>
          <p class="text-white/80 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            At Youth Safaris Mentorship & Life Skills, we believe every young person deserves the
            opportunity to grow with confidence, responsibility, and purpose — regardless of their
            background.
          </p>
        </div>

        <!-- Right -->
        <div class="flex flex-col gap-4">
          <p class="text-white/85 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Our work creates guided spaces where young people develop life skills, emotional
            awareness, and a deeper understanding of themselves and the world around them. Much of
            this work is experiential, relational, and in some cases residential — requiring
            thoughtful planning, safeguarding, and sustained support.
          </p>
          <p class="text-white/85 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Your support helps make this possible in a way that is inclusive, ethical, and grounded
            in care.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroBg from '@/assets/images/support-hero-bg.jpg'
</script>
