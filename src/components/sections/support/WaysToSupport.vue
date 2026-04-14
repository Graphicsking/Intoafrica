<template>
  <section class="bg-[#F5F0E8] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
      <!-- Left image -->
      <div class="w-full lg:w-1/3 shrink-0 rounded-lg overflow-hidden" style="min-height: 400px">
        <img :src="waysImg" alt="Ways to support" class="w-full h-full object-cover" />
      </div>

      <!-- Right content -->
      <div class="w-full lg:w-2/3 flex flex-col gap-8">
        <div>
          <h2
            class="font-bold mb-2"
            style="
              font-family: 'Playfair Display', serif;
              font-size: clamp(2rem, 4vw, 3rem);
              color: #5c1a1a;
            "
          >
            Ways to Support
          </h2>
          <p class="text-[#525252] text-sm" style="font-family: 'Lato', sans-serif">
            There are several meaningful ways to walk alongside this work:
          </p>
        </div>

        <!-- Top 2 cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="(item, i) in topWays"
            :key="i"
            class="bg-white rounded-lg p-6 flex flex-col gap-4 shadow-sm"
          >
            <div
              class="w-12 h-12 rounded-full bg-[#009857] flex items-center justify-center shrink-0"
            >
              <component :is="item.icon" :size="22" color="#D4A96A" weight="regular" />
            </div>
            <h3 class="font-bold text-[#111827] text-base" style="font-family: 'Lato', sans-serif">
              {{ item.title }}
            </h3>
            <p
              class="text-[#525252] text-sm leading-relaxed"
              style="font-family: 'Lato', sans-serif"
            >
              {{ item.description }}
            </p>
          </div>
        </div>

        <!-- Bottom 3 cards -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            v-for="(item, i) in bottomWays"
            :key="i"
            class="bg-white rounded-lg p-6 flex flex-col gap-3 shadow-sm"
          >
            <div
              class="w-12 h-12 rounded-full bg-[#009857] flex items-center justify-center shrink-0"
            >
              <component :is="item.icon" :size="22" color="#D4A96A" weight="regular" />
            </div>
            <h3 class="font-bold text-[#111827] text-sm" style="font-family: 'Lato', sans-serif">
              {{ item.title }}
            </h3>
            <p
              class="text-[#525252] text-sm leading-relaxed"
              style="font-family: 'Lato', sans-serif"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhCurrencyDollar, PhAirplane, PhVan, PhWrench, PhMegaphone } from '@phosphor-icons/vue'
import waysImg from '@/assets/images/ways-to-support.jpg'

const topWays = [
  {
    icon: PhCurrencyDollar,
    title: 'Partner Financially',
    description:
      'Support a participant, a camp, or a specific program area. Contributions are used transparently and prioritise direct program delivery, safeguarding, and participant wellbeing.',
  },
  {
    icon: PhAirplane,
    title: 'Purposeful Participation',
    description:
      'Join our Purposeful Travel and Immersion Journeys — experiences designed for adults who want to understand the work through participation rather than explanation. These journeys help sustain Youth Safaris programs while building shared understanding and responsibility.',
  },
]

const bottomWays = [
  {
    icon: PhVan,
    title: 'Regular Departures',
    description:
      'Our Regular Departures (safaris, trekking, and retreats) operate as standard travel experiences. Proceeds from these journeys contribute to the sustainability of Youth Safaris and help support community-based programs.',
  },
  {
    icon: PhWrench,
    title: 'Volunteer or Share Skills',
    description:
      'We welcome volunteers, mentors, and partners who align with our values and safeguarding principles, and who are willing to contribute time, skills, or resources ethically.',
  },
  {
    icon: PhMegaphone,
    title: 'Spread the Word',
    description:
      'Share our work with schools, families, partners, and organisations that believe in purposeful youth development and community-led growth.',
  },
]
</script>
