<template>
  <section class="bg-white px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
      <!-- Left: 2 stacked images -->
      <div class="w-full lg:w-2/5 shrink-0 flex flex-col gap-4">
        <div class="rounded-lg overflow-hidden" style="height: 200px">
          <img :src="commitImg1" alt="Our commitment" class="w-full h-full object-cover" />
        </div>
        <div class="rounded-lg overflow-hidden" style="height: 200px">
          <img :src="commitImg2" alt="Our commitment" class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Right: text -->
      <div class="w-full lg:w-3/5 flex flex-col gap-6">
        <h2
          class="font-bold leading-tight"
          style="
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            color: #5c1a1a;
          "
        >
          <span style="color: #c94e00">Our</span> Commitment to You
        </h2>
        <p class="text-[#404040] text-sm" style="font-family: 'Lato', sans-serif">
          We are committed to:
        </p>

        <ul class="flex flex-col gap-3">
          <li v-for="(item, i) in commitments" :key="i" class="flex items-start gap-3">
            <PhSealCheck :size="18" color="#D97706" weight="fill" class="shrink-0 mt-0.5" />
            <span class="text-[#404040] text-sm" style="font-family: 'Lato', sans-serif">{{
              item
            }}</span>
          </li>
        </ul>

        <p class="text-[#404040] text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          Programs are hosted primarily at <strong>Bantu Mountain Lodge,</strong> with occasional
          location-based experiences depending on the learning focus.
        </p>

        <p
          class="font-bold text-[#111827] leading-snug"
          style="font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 2vw, 1.5rem)"
        >
          We believe meaningful change happens through trust, consistency, and shared
          responsibility.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhSealCheck } from '@phosphor-icons/vue'
import commitImg1 from '@/assets/images/commitment-1.jpg'
import commitImg2 from '@/assets/images/commitment-2.jpg'

const commitments = [
  'Ethical practice and safeguarding',
  'Transparency and accountability',
  'Responsible use of resources',
  'Dignity and respect for all participants',
]
</script>
