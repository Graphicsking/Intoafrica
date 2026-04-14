<template>
  <section class="relative overflow-hidden" style="min-height: 300px">
    <div class="absolute inset-0 z-0">
      <img :src="walkBg" alt="Walk with us" class="w-full h-full object-cover object-center" />
      <div class="absolute inset-0 bg-black/65"></div>
    </div>

    <div class="relative z-10 w-full flex items-center" style="padding: 64px 120px">
      <div class="max-w-lg flex flex-col gap-6">
        <h2
          class="font-bold text-white leading-tight"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          Walk With Us
        </h2>

        <p class="text-white/80 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          Supporting Youth Safaris is not about charity — it is about investing in people, shared
          responsibility, and long-term impact. If you would like to support, partner, or learn
          more, we invite you to connect with us.
        </p>

        <div class="flex flex-wrap gap-4">
          <a
            href="#"
            class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors inline-flex items-center justify-center px-7 py-3"
            style="font-family: 'Lato', sans-serif"
          >
            Get in Touch
          </a>
          <a
            href="#"
            class="bg-transparent text-white text-sm font-bold transition-colors inline-flex items-center justify-center px-7 py-3 hover:bg-white hover:text-[#009857]"
            style="font-family: 'Lato', sans-serif; border: 2px solid white"
          >
            Support a Program
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import walkBg from '@/assets/images/walk-with-us-bg.jpg'
</script>
