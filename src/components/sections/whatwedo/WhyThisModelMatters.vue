<template>
  <section class="relative overflow-hidden" style="min-height: 320px">
    <div class="absolute inset-0 z-0">
      <img
        :src="modelBg"
        alt="Why this model matters"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <div class="relative z-10 w-full flex items-center" style="padding: 64px 120px">
      <div class="max-w-lg flex flex-col gap-5">
        <h2
          class="font-bold text-white leading-tight"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          Why This Model Matters
        </h2>
        <p class="text-white/80 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          By combining Youth Safaris, Purposeful Travel, and Village Circles, IntoAfrica Legacy
          Initiative creates a sustainable ecosystem where:
        </p>
        <ul class="flex flex-col gap-3">
          <li v-for="(item, i) in items" :key="i" class="flex items-start gap-3">
            <PhSealCheck :size="18" color="#D97706" weight="fill" class="shrink-0 mt-0.5" />
            <span class="text-white/85 text-sm" style="font-family: 'Lato', sans-serif">{{
              item
            }}</span>
          </li>
        </ul>
        <p class="text-white/85 text-sm" style="font-family: 'Lato', sans-serif">
          This is not charity. This is legacy work
        </p>
        <div>
          <a
            href="#"
            class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors inline-flex items-center justify-center px-7 py-3"
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
import { PhSealCheck } from '@phosphor-icons/vue'
import modelBg from '@/assets/images/model-matters-bg.jpg'

const items = [
  'Youth access meaningful mentorship',
  'Travel becomes a tool for learning and solidarity',
  'Communities remain respected and central',
  'Programs grow without compromising values',
]
</script>
