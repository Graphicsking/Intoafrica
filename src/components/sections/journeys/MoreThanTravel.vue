<template>
  <section class="bg-[#F5F5F5] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto flex flex-col gap-10">
      <div class="text-center">
        <h2
          class="font-bold text-[#111827] mb-2"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          <span style="color: #c94e00">More</span> Than Travel
        </h2>
        <p class="text-[#525252] text-sm" style="font-family: 'Lato', sans-serif">
          Every journey supports:
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="bg-[#009857] rounded-xl flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
        >
          <div class="p-6 flex flex-col gap-4 flex-1">
            <div class="w-12 h-12 rounded-full bg-[#047748] flex items-center justify-center">
              <component :is="card.icon" :size="22" color="#D4A96A" weight="regular" />
            </div>
            <h3
              class="text-white font-bold text-base leading-snug"
              style="font-family: 'Lato', sans-serif"
            >
              {{ card.title }}
            </h3>
          </div>
          <div class="mx-5 rounded-t-lg overflow-hidden" style="height: 160px">
            <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
          </div>
          <div class="h-4"></div>
        </div>
      </div>

      <p
        class="text-center font-bold text-[#111827]"
        style="font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 2.5vw, 1.6rem)"
      >
        Travel becomes a way to learn, reflect, and contribute meaningfully.
      </p>
    </div>
  </section>
</template>

<script setup>
import { PhGlobe, PhHandshake, PhChatCircle, PhFootprints } from '@phosphor-icons/vue'
import more1 from '@/assets/images/more-1.jpg'
import more2 from '@/assets/images/more-2.jpg'
import more3 from '@/assets/images/more-3.jpg'
import more4 from '@/assets/images/more-4.jpg'

const cards = [
  { icon: PhGlobe, title: 'Youth mentorship and life skills development', image: more1 },
  { icon: PhHandshake, title: 'Ethical engagement with communities', image: more2 },
  { icon: PhChatCircle, title: 'Responsible storytelling and safeguarding', image: more3 },
  { icon: PhFootprints, title: 'Long-term sustainability of the Initiative', image: more4 },
]
</script>
