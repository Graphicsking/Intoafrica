<template>
  <section class="relative py-16 px-6 sm:px-10 lg:px-16 lg:py-20 overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-80">
      <img src="@/assets/images/bg.svg" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="font-bold text-charcoal-900 text-4xl sm:text-5xl lg:text-6xl mb-3"
          style="font-family: 'Playfair Display', serif"
        >
          What <span style="color: #c94e00">we</span> Do
        </h2>
        <p class="text-charcoal-900 text-base" style="font-family: 'Lato', sans-serif">
          We create guided programs that combine:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="bg-primary-900 rounded-0 flex flex-col overflow-hidden"
        >
          <div class="p-7 flex flex-col gap-5 flex-1">
            <div class="flex items-center justify-between">
              <div
                class="w-14 h-14 rounded-full bg-primary-800 border-primary-700 border-2 flex items-center justify-center shrink-0"
              >
                <component :is="card.icon" :size="28" color="#D4A96A" weight="regular" />
              </div>
              <span
                class="font-bold text-primary-700 leading-none text-5xl"
                style="font-family: 'Lato', sans-serif"
              >
                {{ card.number }}
              </span>
            </div>

            <h3
              class="text-white font-bold text-xl leading-snug"
              style="font-family: 'Lato', sans-serif"
            >
              {{ card.title }}
            </h3>

            <p
              class="text-white/80 text-sm leading-relaxed"
              style="font-family: 'Lato', sans-serif"
            >
              {{ card.description }}
            </p>
          </div>

          <div class="mx-6 rounded-t-lg overflow-hidden" style="height: 200px">
            <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
          </div>

          <div class="px-7 py-5">
            <a
              href="#"
              class="flex items-center gap-2 text-secondary-200 text-sm font-medium hover:gap-3 transition-all duration-200"
              style="font-family: 'Lato', sans-serif"
            >
              {{ card.linkText }}
              <span class="w-6 h-6 rounded-full bg-secondary-400 flex items-center justify-center">
                <PhArrowRight :size="12" color="#ffffff" weight="bold" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhVan, PhCompass, PhUsersThree, PhArrowRight } from '@phosphor-icons/vue'
import safari from '@/assets/images/youth-safaris.jpg'
import travel from '@/assets/images/purposeful-travel.jpg'
import village from '@/assets/images/village-circles.jpg'

const cards = [
  {
    number: '01',
    icon: PhVan,
    title: 'Youth Safaris',
    description:
      'Structured mentorship journeys for ages 12–21 that integrate adventure, practical life skills, leadership formation, and guided reflection — shaping confident, responsible, future readiness and self-aware young leaders.',
    image: safari,
    linkText: 'Explore Youth Safaris',
  },
  {
    number: '02',
    icon: PhCompass,
    title: 'Purposeful Travel',
    description:
      'Immersive, culturally grounded journeys across Africa designed for schools, families, and global partners seeking ethical engagement, environmental awareness, and meaningful learning beyond tourism.',
    image: travel,
    linkText: 'Plan a Journey',
  },
  {
    number: '03',
    icon: PhUsersThree,
    title: 'Village Circles',
    description:
      'A growing community of mentors, volunteers, educators, and cultural stewards committed to intergenerational guidance, shared responsibility, and long-term youth formation.',
    image: village,
    linkText: 'Learn More',
  },
]
</script>
