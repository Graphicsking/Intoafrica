<template>
  <section class="bg-[#F5F5F5] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto flex flex-col gap-10">
      <!-- Top: heading left + text right -->
      <div class="flex flex-col lg:flex-row gap-10 items-start">
        <div class="w-full lg:w-2/5 flex flex-col gap-3">
          <h2
            class="font-bold leading-tight"
            style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
          >
            <span style="color: #c94e00">Signature</span> Learning Journeys
          </h2>
          <p
            class="text-[#404040] text-xs font-bold tracking-widest uppercase"
            style="font-family: 'Lato', sans-serif"
          >
            Flagship · Integrated · Limited
          </p>
        </div>
        <div class="w-full lg:w-3/5 flex flex-col gap-4">
          <p class="text-[#404040] text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Signature Learning Journeys are our most immersive and intentional experiences. They
            combine
            <strong
              >guided reflection, nature-based learning, and selected youth integration
              moments,</strong
            >
            designed within strong ethical and safeguarding frameworks. These journeys are offered
            only <strong>a few times each year</strong> and participation is limited.
          </p>
          <p
            class="text-[#404040] text-sm font-bold tracking-widest uppercase"
            style="font-family: 'Lato', sans-serif"
          >
            May Include:
          </p>
        </div>
      </div>

      <!-- 4 image cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="flex flex-col gap-3 bg-white rounded-lg overflow-hidden shadow-sm"
        >
          <div style="height: 160px" class="overflow-hidden">
            <img :src="item.image" :alt="item.label" class="w-full h-full object-cover" />
          </div>
          <div class="px-4 pb-4 flex flex-col gap-2">
            <p class="text-[#404040] text-sm leading-snug" style="font-family: 'Lato', sans-serif">
              {{ item.label }}
            </p>
            <a
              href="#"
              class="flex items-center gap-1.5 text-[#C94E00] text-sm font-semibold"
              style="font-family: 'Lato', sans-serif"
            >
              Explore <PhArrowCircleRight :size="18" color="#C94E00" weight="fill" />
            </a>
          </div>
        </div>
      </div>

      <!-- Ideal for + CTA -->
      <div class="flex flex-col items-center gap-4 text-center">
        <p
          class="text-[#525252] text-xs font-bold tracking-widest uppercase"
          style="font-family: 'Lato', sans-serif"
        >
          Ideal For:
        </p>
        <p
          class="font-bold text-[#111827] leading-tight max-w-3xl"
          style="font-family: 'Playfair Display', serif; font-size: clamp(1.3rem, 2.5vw, 1.8rem)"
        >
          Purpose-driven travellers, educators, donors, climbers, and individuals seeking meaningful
          life reflection
        </p>
        <a
          href="#"
          class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors inline-flex items-center justify-center px-8 py-3 mt-2"
          style="font-family: 'Lato', sans-serif"
        >
          Explore Signature Learning Journeys
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhArrowCircleRight } from '@phosphor-icons/vue'
import sig1 from '@/assets/images/sig-1.jpg'
import sig2 from '@/assets/images/sig-2.jpg'
import sig3 from '@/assets/images/sig-3.jpg'
import sig4 from '@/assets/images/sig-4.jpg'

const items = [
  { image: sig1, label: 'Guided orientation and reflection sessions' },
  { image: sig2, label: 'Selected, facilitated engagement with Youth Safaris' },
  { image: sig3, label: 'Mountain journeys such as Mount Kilimanjaro (Rongai Route)' },
  { image: sig4, label: 'Nature-based closure and integration rituals' },
]
</script>
