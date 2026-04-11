<template>
  <section class="bg-[#F5F5F5] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="font-bold text-[#111827] mb-4"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          <span style="color: #c94e00">Accountability</span> & Learning
        </h2>
        <p class="text-[#525252] text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          We are committed to learning, reflection, and continuous improvement.<br />This includes:
        </p>
      </div>

      <!-- 3 green cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="bg-[#009857] rounded-xl flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
        >
          <div class="p-7 flex flex-col gap-4 flex-1">
            <div class="flex items-center justify-between">
              <div
                class="w-12 h-12 rounded-full bg-[#047748] flex items-center justify-center shrink-0"
              >
                <component :is="card.icon" :size="22" color="#D4A96A" weight="regular" />
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

      <p
        class="text-center font-bold text-[#111827]"
        style="font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 2.5vw, 1.6rem)"
      >
        Ethical practice is an ongoing commitment, not a one-time statement.
      </p>
    </div>
  </section>
</template>

<script setup>
import { PhEar, PhBookOpen, PhPercent, PhArrowRight } from '@phosphor-icons/vue'
import acc1 from '@/assets/images/accountability-1.jpg'
import acc2 from '@/assets/images/accountability-2.jpg'
import acc3 from '@/assets/images/accountability-3.jpg'

const cards = [
  {
    number: '01',
    icon: PhEar,
    title: 'Listening to feedback from participants, families, and partners',
    image: acc1,
  },
  { number: '02', icon: PhBookOpen, title: 'Reflecting on practice and outcomes', image: acc2 },
  {
    number: '03',
    icon: PhPercent,
    title: 'Making adjustments to strengthen safety, quality, and impact',
    image: acc3,
  },
]
</script>
