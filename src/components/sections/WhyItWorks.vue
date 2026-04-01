<template>
  <section class="bg-secondary-50 px-6 py-16 sm:px-10 lg:px-24 lg:py-24">
    <div class="max-w-6xl mx-auto">
      <!-- Section Title -->
      <h2
        class="font-bold text-charcoal-900 mb-10 leading-tight"
        style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3.5rem)"
      >
        Why This <span style="color: #c94e00">Model</span> Works
      </h2>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left: Intro text + Image -->
        <div class="flex flex-col gap-6">
          <p
            class="text-charcoal-900 text-base leading-relaxed"
            style="font-family: 'Lato', sans-serif"
          >
            Young people don't just need exposure. They need structure, mentorship, and space to
            process experience. Travel alone does not shape character. Experience alone does not
            guarantee growth. What transforms experience into formation is guidance.
          </p>
          <div class="rounded-0 overflow-hidden">
            <img
              :src="whyImage"
              alt="Young people hiking in Africa"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>

        <!-- Right: Checklist + Quote + CTA -->
        <div class="flex flex-col gap-6">
          <p class="text-charcoal-900 font-bold text-base" style="font-family: 'Lato', sans-serif">
            Our model integrates:
          </p>

          <!-- Checklist -->
          <ul class="flex flex-col gap-4">
            <li v-for="(item, index) in checklistItems" :key="index" class="flex items-start gap-3">
              <PhSealCheck :size="22" color="#D97706" weight="fill" class="shrink-0 mt-0.5" />
              <span
                class="text-charcoal-900 text-sm leading-relaxed"
                style="font-family: 'Lato', sans-serif"
              >
                {{ item }}
              </span>
            </li>
          </ul>

          <!-- Body text -->
          <p
            class="text-charcoal-900 text-sm leading-relaxed"
            style="font-family: 'Lato', sans-serif"
          >
            Each element is deliberate. Nothing is accidental. We do not rely on inspiration alone.
            We build developmental continuity.
          </p>

          <!-- Quote -->
          <h3
            class="font-bold text-charcoal-900 leading-tight"
            style="font-family: 'Playfair Display', serif; font-size: clamp(1.5rem, 2.5vw, 2rem)"
          >
            This work is not charity, it is legacy-building.
          </h3>

          <!-- CTA Button -->
          <div>
            <a
              href="#"
              class="inline-flex items-center justify-center bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors duration-200 px-8 py-3.5"
              style="font-family: 'Lato', sans-serif"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhSealCheck } from '@phosphor-icons/vue'
import whyImage from '@/assets/images/why-it-works.jpg'

const checklistItems = [
  'Guided reflection and structured journaling',
  'Leadership conversations rooted in real-life context',
  'Cultural grounding and environmental awareness',
  'Safe, intentional facilitation environments',
  'Consistent mentor presence at every stage of the journey',
]
</script>
