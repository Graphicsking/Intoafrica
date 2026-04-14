<template>
  <section class="relative py-16 px-6 sm:px-10 lg:px-24 lg:py-20 overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-10">
      <img src="@/assets/images/bg.svg" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
      <div class="text-center">
        <h2
          class="font-bold text-[#111827] mb-3"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          How Your <span style="color: #c94e00">Support</span> Makes an Impact
        </h2>
        <p class="text-[#525252] text-sm" style="font-family: 'Lato', sans-serif">
          Contributions to Youth Safaris directly support:
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(card, i) in cards"
          :key="i"
          class="bg-[#009857] rounded-xl flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
        >
          <div class="p-7 flex flex-col gap-4 flex-1">
            <div
              class="w-12 h-12 rounded-full bg-[#047748] flex items-center justify-center shrink-0"
            >
              <component :is="card.icon" :size="22" color="#D4A96A" weight="regular" />
            </div>
            <h3
              class="text-white font-bold text-base leading-snug"
              style="font-family: 'Lato', sans-serif"
            >
              {{ card.title }}
            </h3>
            <p
              class="text-white/75 text-sm leading-relaxed"
              style="font-family: 'Lato', sans-serif"
            >
              {{ card.description }}
            </p>
          </div>
          <div class="mx-6 rounded-t-lg overflow-hidden" style="height: 160px">
            <img :src="card.image" :alt="card.title" class="w-full h-full object-cover" />
          </div>
          <div class="px-7 py-5">
            <a
              href="#"
              class="flex items-center gap-2 text-[#D4A96A] text-sm font-semibold hover:gap-3 transition-all duration-200"
              style="font-family: 'Lato', sans-serif"
            >
              Learn More
              <span class="w-5 h-5 rounded-full bg-[#D4A96A] flex items-center justify-center">
                <PhArrowRight :size="10" color="#009857" weight="bold" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  PhUsersThree,
  PhHeartbeat,
  PhShieldCheck,
  PhBookOpen,
  PhArrowRight,
} from '@phosphor-icons/vue'
import sup1 from '@/assets/images/support-1.jpg'
import sup2 from '@/assets/images/support-2.jpg'
import sup3 from '@/assets/images/support-3.jpg'
import sup4 from '@/assets/images/support-4.jpg'

const cards = [
  {
    icon: PhUsersThree,
    title: 'Mentorship & Life Skills Programs',
    description:
      'Residential camps and community-based programs focused on identity, emotional intelligence, responsibility, leadership, and practical life skills.',
    image: sup1,
  },
  {
    icon: PhHeartbeat,
    title: 'Access for Vulnerable Youth',
    description:
      'Community support, cross-subsidy, and donor contributions ensure that young people are not excluded due to financial or social barriers.',
    image: sup2,
  },
  {
    icon: PhShieldCheck,
    title: 'Safeguarding & Wellbeing',
    description:
      'Trained facilitators, safe environments, emotional support, and responsible supervision across all programs and journeys.',
    image: sup3,
  },
  {
    icon: PhBookOpen,
    title: 'Learning, Reflection & Follow-Up',
    description:
      'Monitoring, documentation, feedback, and follow-up that strengthen program quality and ensure learning continues beyond the camp experience.',
    image: sup4,
  },
]
</script>
