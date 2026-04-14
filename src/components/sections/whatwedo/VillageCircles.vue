<template>
  <section class="bg-[#F5F5F5] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto flex flex-col gap-10">
      <div class="text-center">
        <h2
          class="font-bold mb-2"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          <span style="color: #c94e00">Village</span> Circles
        </h2>
        <p
          class="text-neutral-600 text-xs font-bold tracking-widest uppercase mb-3"
          style="font-family: 'Lato', sans-serif"
        >
          Community & Intergenerational Learning
        </p>
        <p
          class="text-neutral-600 text-sm leading-relaxed max-w-xl mx-auto"
          style="font-family: 'Lato', sans-serif"
        >
          Village Circles are inspired by the belief that it takes a village to raise a child.
          Through Village Circles, we:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(card, i) in cards"
          :key="i"
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
                >{{ card.number }}</span
              >
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
        class="text-center font-bold text-charcoal-900 leading-tight max-w-2xl mx-auto"
        style="font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 2.5vw, 1.6rem)"
      >
        Village Circles reinforce learning beyond camps and recognise the role of families and
        communities in shaping young lives.
      </p>
    </div>
  </section>
</template>

<script setup>
import { PhEar, PhBookOpen, PhPercent, PhArrowRight } from '@phosphor-icons/vue'
import vc1 from '@/assets/images/vc-1.jpg'
import vc2 from '@/assets/images/vc-2.jpg'
import vc3 from '@/assets/images/vc-3.jpg'

const cards = [
  { number: '01', icon: PhEar, title: 'Engage parents, mentors, and elders', image: vc1 },
  {
    number: '02',
    icon: PhBookOpen,
    title: 'Create spaces for intergenerational dialogue',
    image: vc2,
  },
  {
    number: '03',
    icon: PhPercent,
    title: 'Strengthen shared responsibility around youth wellbeing',
    image: vc3,
  },
]
</script>
