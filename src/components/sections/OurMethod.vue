<template>
  <section class="relative py-20 px-6 overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img
        :src="methodBg"
        alt="Our Method background"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Title -->
      <h2
        class="text-center font-bold mb-12"
        style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
      >
        <span class="text-white">Our </span>
        <span style="color: #d4a96a">Method</span>
      </h2>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(card, index) in methods"
          :key="index"
          class="flex flex-col items-center text-center gap-5 p-8 rounded-0"
          style="
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(6px);
            border: 1px solid rgba(255, 255, 255, 0.15);
          "
        >
          <!-- Icon -->
          <component :is="card.icon" :size="48" color="#D4A96A" weight="light" />

          <!-- Title -->
          <h3
            class="text-white font-bold text-lg leading-snug"
            style="font-family: 'Lato', sans-serif"
          >
            {{ card.title }}
          </h3>

          <!-- Description -->
          <p class="text-white/75 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhTreeStructure, PhBookOpenText, PhBriefcase, PhUsersThree } from '@phosphor-icons/vue'
import methodBg from '@/assets/images/our-method-bg.jpg'

const methods = [
  {
    icon: PhTreeStructure,
    title: 'Intentional Design',
    description:
      'Every journey is curriculum-based, developmentally aligned, and purposefully structured.',
  },
  {
    icon: PhBookOpenText,
    title: 'Mentorship First',
    description:
      'Facilitators lead with presence — guiding reflection, responsibility, and growth at every stage.',
  },
  {
    icon: PhBriefcase,
    title: 'Cultural Rootedness',
    description: 'Africa-centered wisdom shaping globally relevant leadership and life readiness.',
  },
  {
    icon: PhUsersThree,
    title: 'Safe Structure',
    description:
      'Clear safeguarding protocols, active supervision, and developmental clarity throughout.',
  },
]
</script>
