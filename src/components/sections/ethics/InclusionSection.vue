<template>
  <section class="relative py-16 px-6 sm:px-10 lg:px-24 lg:py-20 overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-15">
      <img src="@/assets/images/bg.svg" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="font-bold text-[#111827] mb-4"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          Inclusion & <span style="color: #c94e00">Non-Discrimination</span>
        </h2>
      </div>

      <div class="flex flex-col lg:flex-row gap-6 items-start">
        <!-- Column 1: 1 tall image -->
        <div class="w-full lg:w-1/4 shrink-0 rounded-lg overflow-hidden" style="height: 360px">
          <img :src="inclusionImg1" alt="Youth dancing" class="w-full h-full object-cover" />
        </div>

        <!-- Column 2: 2 stacked images -->
        <div class="w-full lg:w-1/4 shrink-0 flex flex-col gap-4">
          <div class="rounded-lg overflow-hidden" style="height: 172px">
            <img
              :src="inclusionImg2"
              alt="Youth painting mural"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="rounded-lg overflow-hidden" style="height: 172px">
            <img :src="inclusionImg3" alt="Youth walking" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Column 3: text + list + quote + CTA -->
        <div class="w-full lg:w-2/4 flex flex-col gap-5">
          <p class="text-[#404040] text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Youth Safaris welcomes participants and partners from diverse backgrounds. We are
            committed to:
          </p>

          <ul class="flex flex-col gap-3">
            <li v-for="(item, i) in commitments" :key="i" class="flex items-start gap-3">
              <PhSealCheck :size="20" color="#D97706" weight="fill" class="shrink-0 mt-0.5" />
              <span
                class="text-[#404040] text-sm leading-relaxed"
                style="font-family: 'Lato', sans-serif"
                >{{ item }}</span
              >
            </li>
          </ul>

          <p
            class="font-bold text-[#111827] leading-snug"
            style="font-family: 'Playfair Display', serif; font-size: clamp(1.3rem, 2.5vw, 1.6rem)"
          >
            Our programs focus on shared humanity, responsibility, and growth.
          </p>

          <div>
            <a
              href="#"
              class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors duration-200 inline-flex items-center justify-center px-7 py-3"
              style="font-family: 'Lato', sans-serif"
            >
              Explore Youth Safaris
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhSealCheck } from '@phosphor-icons/vue'
import inclusionImg1 from '@/assets/images/inclusion-1.jpg'
import inclusionImg2 from '@/assets/images/inclusion-2.jpg'
import inclusionImg3 from '@/assets/images/inclusion-3.jpg'

const commitments = [
  'Inclusion regardless of gender, ethnicity, religion, ability, or background',
  'Creating spaces where differences are respected',
  'Ensuring equitable participation and opportunity',
]
</script>
