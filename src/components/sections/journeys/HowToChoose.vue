<template>
  <section class="bg-[#F5F0E8] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto flex flex-col gap-10">
      <div class="text-center">
        <h2
          class="font-bold mb-2"
          style="
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            color: #5c1a1a;
          "
        >
          How to Choose Your Journey
        </h2>
        <p class="text-[#525252] text-sm" style="font-family: 'Lato', sans-serif">
          You may choose a journey based on:
        </p>
      </div>

      <!-- 3-col layout: 2 cards | image | 2 cards -->
      <div class="flex flex-col lg:flex-row gap-4 items-stretch">
        <!-- Left 2 cards -->
        <div class="flex flex-col gap-4 w-full lg:w-1/4">
          <div
            v-for="(item, i) in leftItems"
            :key="i"
            class="bg-[#FBE4D0] rounded-lg p-6 flex flex-col gap-4 flex-1"
          >
            <div class="w-12 h-12 rounded-full bg-[#009857] flex items-center justify-center">
              <component :is="item.icon" :size="22" color="#D4A96A" weight="regular" />
            </div>
            <p class="text-[#404040] text-sm leading-snug" style="font-family: 'Lato', sans-serif">
              {{ item.label }}
            </p>
          </div>
        </div>

        <!-- Center image -->
        <div class="w-full lg:w-2/4 rounded-lg overflow-hidden" style="min-height: 300px">
          <img :src="chooseImage" alt="Choose your journey" class="w-full h-full object-cover" />
        </div>

        <!-- Right 2 cards -->
        <div class="flex flex-col gap-4 w-full lg:w-1/4">
          <div
            v-for="(item, i) in rightItems"
            :key="i"
            class="bg-[#FBE4D0] rounded-lg p-6 flex flex-col gap-4 flex-1"
          >
            <div class="w-12 h-12 rounded-full bg-[#009857] flex items-center justify-center">
              <component :is="item.icon" :size="22" color="#D4A96A" weight="regular" />
            </div>
            <p class="text-[#404040] text-sm leading-snug" style="font-family: 'Lato', sans-serif">
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>

      <!-- Quote -->
      <p
        class="text-center font-bold text-[#111827] leading-tight max-w-2xl mx-auto"
        style="font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 2vw, 1.4rem)"
      >
        Each experience is clearly labelled to help you make an informed and comfortable choice.
      </p>
    </div>
  </section>
</template>

<script setup>
import { PhGraduationCap, PhClock, PhBasketball, PhArrowBendDownRight } from '@phosphor-icons/vue'
import chooseImage from '@/assets/images/how-to-choose.jpg'

const leftItems = [
  { icon: PhGraduationCap, label: 'Depth of learning you are seeking' },
  { icon: PhClock, label: 'Time available' },
]
const rightItems = [
  { icon: PhBasketball, label: 'Level of physical challenge' },
  { icon: PhArrowBendDownRight, label: 'Desire to contribute to youth programs' },
]
</script>
