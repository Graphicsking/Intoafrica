<template>
  <section class="bg-secondary-50 px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
    <!-- Title -->
    <h2
      class="font-heading text-center font-bold uppercase text-secondary-800 text-3xl sm:text-4xl lg:text-5xl mb-10 sm:mb-12 lg:mb-14"
    >
      Who This Is For
    </h2>

    <!-- Cards Grid -->
    <div class="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="bg-secondary-100 rounded-0 p-7 sm:p-8 flex flex-col gap-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(107,26,26,0.1)] opacity-0 translate-y-5 animate-fade-up"
        :style="{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }"
      >
        <!-- Icon -->
        <div
          class="w-12 h-12 rounded-full bg-primary-800 flex items-center justify-center shrink-0"
        >
          <component
            :is="card.icon"
            :size="24"
            color="currentColor"
            class="text-primary-100"
            weight="regular"
          />
        </div>

        <!-- Title -->
        <h3 class="font-body font-bold text-neutral-900 text-base sm:text-lg leading-snug">
          {{ card.title }}
        </h3>

        <!-- Description -->
        <p class="font-body text-sm sm:text-md leading-relaxed text-neutral-700">
          {{ card.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhGraduationCap, PhAirplaneTilt, PhHandshake } from '@phosphor-icons/vue'

const cards = [
  {
    icon: PhGraduationCap,
    title: 'Parents & Schools',
    description:
      'For families and educators seeking structured, values-based experiences that support young people in developing confidence, responsibility, and real-world life skills beyond the classroom. learning over theory',
  },
  {
    icon: PhAirplaneTilt,
    title: 'Purposeful Travelers',
    description:
      'For individuals who believe travel should deepen awareness — not just itineraries — and who value culturally grounded, ethically guided experiences across Africa.',
  },
  {
    icon: PhHandshake,
    title: 'Partners & Supporters',
    description:
      'For institutions, mentors, and mission-aligned supporters who believe in thoughtful youth development and wish to invest in generational growth and community impact.',
  },
]
</script>
