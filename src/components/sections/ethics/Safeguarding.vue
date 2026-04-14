<template>
  <section class="bg-[#F5F5F5] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2
          class="font-bold text-charcoal-900 mb-4"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          <span style="color: #c94e00">Safeguarding</span> & Child Protection
        </h2>
        <p class="text-neutral-600 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
          The safety and wellbeing of children and young people is central to all Youth Safaris
          programs.<br />
          We are committed to:
        </p>
      </div>

      <!-- 4 image cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="relative rounded-lg overflow-hidden"
          style="height: 320px"
        >
          <img :src="item.image" :alt="item.label" class="w-full h-full object-cover" />
          <div
            class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%)"
          ></div>
          <p
            class="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold leading-snug"
            style="font-family: 'Lato', sans-serif"
          >
            {{ item.label }}
          </p>
        </div>
      </div>

      <!-- Quote -->
      <p
        class="text-center font-bold text-charcoal-900 leading-tight max-w-3xl mx-auto"
        style="font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 2.5vw, 1.6rem)"
      >
        All facilitators, Village Circle members, volunteers, and partners are expected to follow
        safeguarding guidelines and act in the best interest of participants at all times.
      </p>
    </div>
  </section>
</template>

<script setup>
import img1 from '@/assets/images/safeguard-1.jpg'
import img2 from '@/assets/images/safeguard-2.jpg'
import img3 from '@/assets/images/safeguard-3.jpg'
import img4 from '@/assets/images/safeguard-4.jpg'

const items = [
  { image: img1, label: 'Providing physically and emotionally safe environments' },
  { image: img2, label: 'Ensuring appropriate supervision at all times' },
  { image: img3, label: 'Maintaining clear boundaries between adults and participants' },
  { image: img4, label: 'Preventing exploitation, harm, or inappropriate influence' },
]
</script>
