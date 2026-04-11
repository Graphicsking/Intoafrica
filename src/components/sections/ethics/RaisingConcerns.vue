<template>
  <section class="relative overflow-hidden" style="min-height: 280px">
    <div class="absolute inset-0 z-0">
      <img
        :src="concernsBg"
        alt="Raising concerns"
        class="w-full h-full object-cover object-center"
      />
      <div
        class="absolute inset-0"
        style="
          background: linear-gradient(
            to right,
            rgba(30, 30, 30, 0.88) 0%,
            rgba(30, 30, 30, 0.7) 50%,
            rgba(30, 30, 30, 0.2) 80%,
            transparent 100%
          );
        "
      ></div>
    </div>

    <div class="relative z-10 w-full flex items-center" style="padding: 64px 120px">
      <div class="max-w-lg flex flex-col gap-5">
        <h2
          class="font-bold text-white leading-tight"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          Raising Concerns
        </h2>

        <p class="text-white/80 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          Any concerns related to safety, conduct, or ethics can be raised confidentially through
          our official contact channels. All concerns are taken seriously and handled with care,
          discretion, and responsibility.
        </p>

        <a
          href="mailto:corncernces@intoafricalegacyinitiative.ke.co"
          class="flex items-center gap-2 text-sm"
          style="color: #d4a96a; font-family: 'Lato', sans-serif"
        >
          <PhEnvelope :size="16" color="#D4A96A" weight="regular" />
          corncernces@intoafricalegacyinitiative.ke.co
        </a>

        <div>
          <a
            href="#"
            class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors duration-200 inline-flex items-center justify-center px-7 py-3"
            style="font-family: 'Lato', sans-serif"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhEnvelope } from '@phosphor-icons/vue'
import concernsBg from '@/assets/images/raising-concerns-bg.jpg'
</script>
