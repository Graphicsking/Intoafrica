<template>
  <section class="bg-[#F5F0E8] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <!-- Left Column -->
      <div class="flex flex-col gap-10">
        <!-- Purposeful Travel heading -->
        <h2
          class="font-bold leading-tight"
          style="
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            color: #5c1a1a;
          "
        >
          Purposeful Travel
        </h2>

        <!-- Our Values -->
        <div class="flex flex-col gap-6">
          <h3
            class="font-bold leading-tight"
            style="
              font-family: 'Playfair Display', serif;
              font-size: clamp(1.6rem, 3vw, 2.2rem);
              color: #5c1a1a;
            "
          >
            Our Values
          </h3>

          <ul class="flex flex-col gap-5">
            <li v-for="(value, index) in values" :key="index" class="flex items-center gap-4">
              <component
                :is="value.icon"
                :size="28"
                color="#5C1A1A"
                weight="regular"
                class="shrink-0"
              />
              <span class="text-[#404040] text-base" style="font-family: 'Lato', sans-serif">
                {{ value.label }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Bold quote -->
        <p
          class="font-bold leading-snug"
          style="
            font-family: 'Playfair Display', serif;
            font-size: clamp(1.2rem, 2.5vw, 1.5rem);
            color: #5c1a1a;
          "
        >
          These values shape how we design programs, engage partners, and hold space for young
          people.
        </p>
      </div>

      <!-- Right Column -->
      <div class="flex flex-col gap-6">
        <!-- Description text -->
        <div class="flex flex-col gap-4">
          <p class="text-[#404040] text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Our travel experiences are not tourism for entertainment alone. They are guided journeys
            designed to deepen understanding — of self, others, and the environment.
          </p>
          <p class="text-[#404040] text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Through wildlife safaris, mountain trekking, and cultural engagement, participants are
            invited to slow down, observe, and reflect. Learning emerges naturally from experience,
            not from lectures.
          </p>
        </div>

        <!-- Image -->
        <div class="rounded-lg overflow-hidden">
          <img
            :src="travelImage"
            alt="Purposeful travel experience"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  PhCalendarCheck,
  PhTree,
  PhFlowerLotus,
  PhHeart,
  PhGraduationCap,
} from '@phosphor-icons/vue'
import travelImage from '@/assets/images/purposeful-travel-values.jpg'

const values = [
  { icon: PhCalendarCheck, label: 'Purpose and responsibility' },
  { icon: PhTree, label: 'Care for people and environment' },
  { icon: PhFlowerLotus, label: 'Respect for culture and community' },
  { icon: PhHeart, label: 'Emotional awareness and integrity' },
  { icon: PhGraduationCap, label: 'Learning through experience' },
]
</script>
