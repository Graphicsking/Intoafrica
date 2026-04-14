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
          <span style="color: #c94e00">Youth</span> Safaris
        </h2>
        <p
          class="text-[#525252] text-xs font-bold tracking-widest uppercase"
          style="font-family: 'Lato', sans-serif"
        >
          Mentorship & Life Skills Programs
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-10 items-start">
        <!-- Left: images -->
        <div class="w-full lg:w-2/5 flex flex-col gap-3 shrink-0">
          <div class="rounded-lg overflow-hidden" style="height: 240px">
            <img :src="safariImg1" alt="Youth safaris" class="w-full h-full object-cover" />
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-lg overflow-hidden" style="height: 160px">
              <img :src="safariImg2" alt="Youth safaris" class="w-full h-full object-cover" />
            </div>
            <div class="rounded-lg overflow-hidden" style="height: 160px">
              <img :src="safariImg3" alt="Youth safaris" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Right: text -->
        <div class="w-full lg:w-3/5 flex flex-col gap-5">
          <p class="text-[#404040] text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Youth Safaris are residential, nature-based mentorship camps designed to support young
            people beyond academic achievement.
          </p>
          <p class="text-[#404040] text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Through guided activities, reflection, and shared responsibility, participants are
            supported to:
          </p>
          <ul class="flex flex-col gap-3">
            <li v-for="(item, i) in items" :key="i" class="flex items-start gap-3">
              <PhSealCheck :size="18" color="#D97706" weight="fill" class="shrink-0 mt-0.5" />
              <span class="text-[#404040] text-sm" style="font-family: 'Lato', sans-serif">{{
                item
              }}</span>
            </li>
          </ul>
          <p
            class="font-bold text-[#111827] leading-snug"
            style="font-family: 'Playfair Display', serif; font-size: clamp(1.1rem, 2vw, 1.4rem)"
          >
            Youth Safaris are carefully structured, supervised, and guided by safeguarding, dignity,
            and ethical practice. These programs form the core mission of the Initiative.
          </p>
          <div>
            <a
              href="#"
              class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors inline-flex items-center justify-center px-7 py-3"
              style="font-family: 'Lato', sans-serif"
            >
              Explore Youth Safaris
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhSealCheck } from '@phosphor-icons/vue'
import safariImg1 from '@/assets/images/safari-1.jpg'
import safariImg2 from '@/assets/images/safari-2.jpg'
import safariImg3 from '@/assets/images/safari-3.jpg'

const items = [
  'Understand purpose and direction',
  'Develop emotional intelligence and self-awareness',
  'Build practical life skills for everyday living',
  'Explore identity, culture, and life stages',
  'Engage with nature as a space for calm and learning',
]
</script>
