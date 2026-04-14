<template>
  <section class="bg-[#F5F0E8] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto flex flex-col gap-10">
      <!-- Top -->
      <div class="flex flex-col lg:flex-row gap-10 items-start">
        <div class="w-full lg:w-2/5 flex flex-col gap-3">
          <h2
            class="font-bold leading-tight"
            style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
          >
            <span style="color: #c94e00">Purposeful</span> Departures
          </h2>
          <p
            class="text-neutral-700 text-xs font-bold tracking-widest uppercase"
            style="font-family: 'Lato', sans-serif"
          >
            Regular · Sustainable · Fundraising Arm
          </p>
        </div>
        <div class="w-full lg:w-3/5 flex flex-col gap-3">
          <p
            class="text-neutral-700 text-sm leading-relaxed"
            style="font-family: 'Lato', sans-serif"
          >
            Purposeful Departures are <strong>well-curated travel experiences</strong> that run
            independently of youth programs and help fund mentorship and life skills initiatives.
            These journeys focus on
            <strong>responsible travel, nature, and cultural appreciation,</strong> while quietly
            contributing to long-term impact.
          </p>
          <p
            class="text-neutral-700 text-xs font-bold tracking-widest uppercase"
            style="font-family: 'Lato', sans-serif"
          >
            Examples Include:
          </p>
        </div>
      </div>

      <!-- 4 image cards with overlay labels -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(item, i) in departures"
          :key="i"
          class="relative rounded-lg overflow-hidden"
          style="height: 320px"
        >
          <img :src="item.image" :alt="item.label" class="w-full h-full object-cover" />
          <div
            class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 55%)"
          ></div>
          <div class="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
            <p
              class="text-white text-sm font-semibold leading-snug"
              style="font-family: 'Lato', sans-serif"
            >
              {{ item.label }}
            </p>
            <a
              href="#"
              class="flex items-center gap-1.5 text-[#D4A96A] text-sm font-semibold"
              style="font-family: 'Lato', sans-serif"
            >
              Explore <PhArrowCircleRight :size="18" color="#D4A96A" weight="fill" />
            </a>
          </div>
        </div>
      </div>

      <!-- Quote + CTA -->
      <div class="flex flex-col items-center gap-4 text-center">
        <p
          class="font-bold text-charcoal-900 leading-tight max-w-2xl"
          style="font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 2.5vw, 1.6rem)"
        >
          A portion of proceeds from each departure supports Youth Safaris and Village Circles.
        </p>
        <a
          href="#"
          class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors inline-flex items-center justify-center px-8 py-3"
          style="font-family: 'Lato', sans-serif"
        >
          View Upcoming Purposeful Departures
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhArrowCircleRight } from '@phosphor-icons/vue'
import dep1 from '@/assets/images/dep-1.jpg'
import dep2 from '@/assets/images/dep-2.jpg'
import dep3 from '@/assets/images/dep-3.jpg'
import dep4 from '@/assets/images/dep-4.jpg'

const departures = [
  { image: dep1, label: 'Mount Kenya or Mount Kilimanjaro climbs' },
  { image: dep2, label: '7-day Kenya or Tanzania safaris' },
  { image: dep3, label: 'Coastal journeys (Diani, Zanzibar)' },
  { image: dep4, label: 'Nature and reflection retreats' },
]
</script>
