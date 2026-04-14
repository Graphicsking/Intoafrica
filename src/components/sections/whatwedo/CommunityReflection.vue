<template>
  <section class="relative py-16 px-6 sm:px-10 lg:px-24 lg:py-20 overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-15">
      <img src="@/assets/images/bg.svg" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
      <!-- Left: text -->
      <div class="w-full lg:w-1/2 flex flex-col gap-5">
        <div class="flex flex-col gap-2">
          <h2
            class="font-bold leading-tight"
            style="
              font-family: 'Playfair Display', serif;
              font-size: clamp(2rem, 4vw, 3rem);
              color: #111827;
            "
          >
            Community & Reflection <span style="color: #c94e00">Experiences</span>
          </h2>
          <p
            class="text-neutral-700 text-xs font-bold tracking-widest uppercase"
            style="font-family: 'Lato', sans-serif"
          >
            Optional · Light · Ethical Engagement
          </p>
        </div>
        <p class="text-neutral-700 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          Community & Reflection Experiences offer opportunities for
          <strong>grounding, reflection, and cultural learning,</strong> without intensive
          integration. These may include:
        </p>
        <ul class="flex flex-col gap-3">
          <li v-for="(item, i) in items" :key="i" class="flex items-start gap-3">
            <PhSealCheck :size="18" color="#D97706" weight="fill" class="shrink-0 mt-0.5" />
            <span class="text-neutral-700 text-sm" style="font-family: 'Lato', sans-serif">{{
              item
            }}</span>
          </li>
        </ul>
        <p
          class="font-bold text-charcoal-900 leading-snug"
          style="font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 2vw, 1.4rem)"
        >
          Community engagement occurs only when appropriate and is always guided, respectful, and
          consensual.
        </p>
        <div>
          <a
            href="#"
            class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors inline-flex items-center justify-center px-7 py-3"
            style="font-family: 'Lato', sans-serif"
          >
            Learn More About Community & Reflection Experiences
          </a>
        </div>
      </div>

      <!-- Right: 2 stacked images -->
      <div class="w-full lg:w-1/2 flex flex-col gap-4">
        <div class="rounded-lg overflow-hidden" style="height: 220px">
          <img :src="communityImg1" alt="Community experience" class="w-full h-full object-cover" />
        </div>
        <div class="rounded-lg overflow-hidden" style="height: 220px">
          <img
            :src="communityImg2"
            alt="Reflection experience"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhSealCheck } from '@phosphor-icons/vue'
import communityImg1 from '@/assets/images/community-1.jpg'
import communityImg2 from '@/assets/images/community-2.jpg'

const items = [
  'Short stays at Bantu Mountain Lodge',
  'Facilitated reflection sessions',
  'Cultural learning led by mentors or elders',
]
</script>
