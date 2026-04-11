<template>
  <section class="bg-white px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-sm"
    >
      <!-- Left: cream card -->
      <div class="bg-[#F5F0E8] p-10 sm:p-12 flex flex-col gap-6">
        <h2
          class="font-bold leading-tight"
          style="
            font-family: 'Playfair Display', serif;
            font-size: clamp(1.8rem, 3vw, 2.5rem);
            color: #5c1a1a;
          "
        >
          Partner & Visitor Conduct
        </h2>
        <p class="text-[#404040] text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          Partners, donors, teachers, and visitors may engage with Youth Safaris programs only
          through structured and guided participation.
        </p>
        <p class="text-[#404040] text-sm" style="font-family: 'Lato', sans-serif">
          All visitors are required to:
        </p>
        <ul class="flex flex-col gap-3">
          <li v-for="(item, i) in requirements" :key="i" class="flex items-start gap-3">
            <PhSealCheck :size="18" color="#D97706" weight="fill" class="shrink-0 mt-0.5" />
            <span class="text-[#404040] text-sm" style="font-family: 'Lato', sans-serif">{{
              item
            }}</span>
          </li>
        </ul>
      </div>

      <!-- Right: green card with handshake illustration -->
      <div class="bg-[#009857] p-10 sm:p-12 flex flex-col items-center justify-center gap-6">
        <PhHandshake :size="120" color="white" weight="light" class="opacity-90" />
        <p
          class="text-white font-bold text-center leading-snug"
          style="font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 2vw, 1.6rem)"
        >
          Engagement is based on trust, presence, and mutual respect.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhSealCheck, PhHandshake } from '@phosphor-icons/vue'

const requirements = [
  'Respect program boundaries',
  'Observe without disruption',
  'Refrain from evaluation or judgement of participants',
  'Follow guidance from the facilitation team',
]
</script>
