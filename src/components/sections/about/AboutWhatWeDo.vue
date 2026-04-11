<template>
  <section class="relative py-16 px-6 sm:px-10 lg:px-16 lg:py-20 overflow-hidden">
    <!-- Background SVG pattern -->
    <div class="absolute inset-0 z-0 opacity-20">
      <img src="@/assets/images/bg-1.svg" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2
          class="font-bold text-[#171717] text-4xl sm:text-5xl mb-3"
          style="font-family: 'Playfair Display', serif"
        >
          What <span style="color: #c94e00">we</span> Do
        </h2>
        <p class="text-[#737373] text-base" style="font-family: 'Lato', sans-serif">
          We create guided programs that combine:
        </p>
      </div>

      <!-- Row 1: 3 cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div
          v-for="(card, index) in topCards"
          :key="index"
          class="bg-[#009857] rounded-xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div class="p-7 flex flex-col gap-4 flex-1">
            <div class="flex items-center justify-between">
              <div
                class="w-12 h-12 rounded-full bg-[#047748] flex items-center justify-center shrink-0"
              >
                <component :is="card.icon" :size="24" color="#D4A96A" weight="regular" />
              </div>
              <span
                class="font-bold text-[#047748] leading-none"
                style="font-family: 'Playfair Display', serif; font-size: 3rem; line-height: 1"
              >
                {{ card.number }}
              </span>
            </div>
            <h3
              class="text-white font-bold text-lg leading-snug"
              style="font-family: 'Lato', sans-serif"
            >
              {{ card.title }}
            </h3>
          </div>

          <div class="mx-6 rounded-t-lg overflow-hidden" style="height: 180px">
            <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
          </div>

          <div class="px-7 py-5">
            <a
              href="#"
              class="flex items-center gap-2 text-[#D4A96A] text-sm font-semibold hover:gap-3 transition-all duration-200"
              style="font-family: 'Lato', sans-serif"
            >
              Learn More
              <span class="w-5 h-5 rounded-full bg-[#D4A96A] flex items-center justify-center">
                <PhArrowRight :size="10" color="#009857" weight="bold" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Row 2: 2 cards centered -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl lg:max-w-3xl mx-auto">
        <div
          v-for="(card, index) in bottomCards"
          :key="index"
          class="bg-[#009857] rounded-xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div class="p-7 flex flex-col gap-4 flex-1">
            <div class="flex items-center justify-between">
              <div
                class="w-12 h-12 rounded-full bg-[#047748] flex items-center justify-center shrink-0"
              >
                <component :is="card.icon" :size="24" color="#D4A96A" weight="regular" />
              </div>
              <span
                class="font-bold text-[#047748] leading-none"
                style="font-family: 'Playfair Display', serif; font-size: 3rem; line-height: 1"
              >
                {{ card.number }}
              </span>
            </div>
            <h3
              class="text-white font-bold text-lg leading-snug"
              style="font-family: 'Lato', sans-serif"
            >
              {{ card.title }}
            </h3>
          </div>

          <div class="mx-6 rounded-t-lg overflow-hidden" style="height: 180px">
            <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
          </div>

          <div class="px-7 py-5">
            <a
              href="#"
              class="flex items-center gap-2 text-[#D4A96A] text-sm font-semibold hover:gap-3 transition-all duration-200"
              style="font-family: 'Lato', sans-serif"
            >
              Learn More
              <span class="w-5 h-5 rounded-full bg-[#D4A96A] flex items-center justify-center">
                <PhArrowRight :size="10" color="#009857" weight="bold" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  PhCar,
  PhBooks,
  PhCertificate,
  PhHandshake,
  PhUsersThree,
  PhArrowRight,
} from '@phosphor-icons/vue'
import img1 from '@/assets/images/purposeful-travel.jpg'
import img2 from '@/assets/images/mentorship.jpg'
import img3 from '@/assets/images/practical-skills.jpg'
import img4 from '@/assets/images/emotional-awareness.jpg'
import img5 from '@/assets/images/community-culture.jpg'

const topCards = [
  {
    number: '01',
    icon: PhCar,
    title: 'Purposeful Travel and Exploration',
    image: img1,
  },
  {
    number: '02',
    icon: PhBooks,
    title: 'Mentorship and Guided Reflection',
    image: img2,
  },
  {
    number: '03',
    icon: PhCertificate,
    title: 'Practical Life Skills',
    image: img3,
  },
]

const bottomCards = [
  {
    number: '04',
    icon: PhHandshake,
    title: 'Emotional Awareness and Responsibility',
    image: img4,
  },
  {
    number: '05',
    icon: PhUsersThree,
    title: 'Connection to Culture, Community, and Environment',
    image: img5,
  },
]
</script>
