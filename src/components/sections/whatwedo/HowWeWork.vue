<template>
  <section class="bg-[#F5F0E8] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto flex flex-col gap-10">
      <div class="text-center">
        <h2
          class="font-bold mb-2"
          style="
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 4vw, 3rem);
            color: #5c1a1a;
          "
        >
          How We Work
        </h2>
        <p class="text-neutral-600 text-sm" style="font-family: 'Lato', sans-serif">
          Across all programs, we prioritise:
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="bg-[#FBE4D0] rounded-lg p-6 flex flex-col gap-5"
        >
          <div
            class="w-12 h-12 rounded-full bg-[#009857] flex items-center justify-center shrink-0"
          >
            <component :is="item.icon" :size="22" color="#D4A96A" weight="regular" />
          </div>
          <p
            class="text-neutral-700 text-sm leading-relaxed"
            style="font-family: 'Lato', sans-serif"
          >
            {{ item.label }}
          </p>
        </div>
      </div>

      <p
        class="text-center font-bold text-charcoal-900 leading-tight max-w-2xl mx-auto"
        style="font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 2.5vw, 1.6rem)"
      >
        All our work is grounded in safeguarding, ethical engagement, and responsible storytelling.
      </p>
    </div>
  </section>
</template>

<script setup>
import { PhLockKey, PhMagicWand, PhHandWaving, PhHandshake } from '@phosphor-icons/vue'

const items = [
  { icon: PhLockKey, label: 'Experiential learning over theory' },
  { icon: PhMagicWand, label: 'Guided reflection over instruction' },
  { icon: PhHandWaving, label: 'Dignity over deficit-based narratives' },
  { icon: PhHandshake, label: 'Community partnership over extraction' },
]
</script>
