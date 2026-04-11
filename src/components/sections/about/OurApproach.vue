<template>
  <section class="bg-[#ECEEE8] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto flex flex-col items-center gap-10">
      <!-- Heading -->
      <div class="flex flex-col items-center gap-3 text-center">
        <h2
          class="font-bold leading-tight"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          <span style="color: #c2622a">Our</span>
          <span style="color: #1a1a1a"> Approach</span>
        </h2>
        <p class="text-[#404040] text-sm" style="font-family: 'Lato', sans-serif">
          We work through a learning pathway that grows with the individual:
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <div
          v-for="tier in tiers"
          :key="tier.title"
          class="relative rounded-xl overflow-hidden"
          style="aspect-ratio: 3/4"
        >
          <img :src="tier.image" :alt="tier.title" class="w-full h-full object-cover" />
          <!-- Gradient overlay -->
          <div
            class="absolute inset-0"
            style="
              background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.75) 0%,
                rgba(0, 0, 0, 0.1) 55%,
                transparent 100%
              );
            "
          />
          <!-- Text -->
          <div class="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
            <p
              class="text-white font-bold text-sm leading-snug"
              style="font-family: 'Lato', sans-serif"
            >
              {{ tier.title }}
            </p>
            <p
              class="text-white/80 text-xs leading-relaxed"
              style="font-family: 'Lato', sans-serif"
            >
              {{ tier.subtitle }}
            </p>
          </div>
        </div>
      </div>

      <!-- Tagline -->
      <p
        class="font-bold text-center text-[#1a1a1a]"
        style="
          font-family: 'Playfair Display', serif;
          font-size: clamp(1rem, 2vw, 1.4rem);
          max-width: 780px;
          line-height: 1.6;
        "
      >
        Across all programs, we emphasise presence over performance, learning over instruction, and
        responsibility over control.
      </p>
    </div>
  </section>
</template>

<script setup>
import youngExplorers from '@/assets/images/tier-young-explorers.jpg'
import trailblazers from '@/assets/images/tier-trailblazers.jpg'
import wayfinders from '@/assets/images/tier-wayfinders.jpg'
import crossroads from '@/assets/images/tier-crossroads.jpg'

const tiers = [
  {
    title: 'Young Explorers (Ages 4–8)',
    subtitle: 'Curiosity, discovery, and confidence',
    image: youngExplorers,
  },
  {
    title: 'Trailblazers (Ages 9–13)',
    subtitle: 'Skills, teamwork, and responsibility',
    image: trailblazers,
  },
  {
    title: 'Wayfinders (Ages 14–21)',
    subtitle: 'Identity, purpose, and direction',
    image: wayfinders,
  },
  {
    title: 'Crossroads (School Leavers)',
    subtitle: 'Transition, readiness, and choice',
    image: crossroads,
  },
]
</script>
