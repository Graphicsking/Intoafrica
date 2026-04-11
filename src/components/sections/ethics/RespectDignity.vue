<template>
  <section class="bg-[#F5F0E8] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-12">
        <h2
          class="font-bold mb-4"
          style="
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            color: #5c1a1a;
          "
        >
          Respect, Dignity & Boundaries
        </h2>
        <p class="text-[#525252] text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          Youth Safaris programs are built on respect for each individual.<br />We do not permit:
        </p>
      </div>

      <!-- Main grid: image + 2x2 cards -->
      <div class="grid gap-4 mb-10 items-stretch" style="grid-template-columns: 2fr 3fr">
        <!-- Left image -->
        <div class="rounded-lg overflow-hidden">
          <img
            :src="respectImage"
            alt="Respect and dignity session"
            class="w-full h-full object-cover"
            style="display: block"
          />
        </div>

        <!-- Right 2x2 cards -->
        <div class="grid gap-4" style="grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr">
          <div
            v-for="(item, index) in notPermitted"
            :key="index"
            class="rounded-lg p-6 flex flex-col gap-5"
            style="background-color: #f2c9a0"
          >
            <div
              class="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style="background-color: #009857"
            >
              <component :is="item.icon" :size="22" color="#D4A96A" weight="regular" />
            </div>
            <p
              class="text-sm leading-relaxed"
              style="font-family: 'Lato', sans-serif; color: #404040"
            >
              {{ item.label }}
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom quote -->
      <p
        class="text-center font-bold text-[#111827] leading-tight max-w-3xl mx-auto"
        style="font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 2vw, 1.4rem)"
      >
        Adults engaging with our programs are expected to support learning with humility, care, and
        restraint.
      </p>
    </div>
  </section>
</template>

<script setup>
import { PhSmiley, PhQuestion, PhHandsPraying, PhCamera } from '@phosphor-icons/vue'
import respectImage from '@/assets/images/respect-dignity.jpg'

const notPermitted = [
  { icon: PhSmiley, label: 'Discrimination, intimidation, or harassment' },
  { icon: PhQuestion, label: 'Inappropriate questioning or personal intrusion' },
  { icon: PhHandsPraying, label: 'Proselytising or imposing beliefs' },
  { icon: PhCamera, label: 'Photographing or sharing participant images without consent' },
]
</script>
