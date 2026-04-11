<template>
  <section class="bg-[#F5F0E8] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto flex flex-col items-center gap-12">
      <h2
        class="font-bold text-center"
        style="
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          color: #5c1a1a;
        "
      >
        Our Programs are Delivered Through
      </h2>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        <div
          v-for="program in programs"
          :key="program.label"
          class="flex flex-col items-start gap-4"
        >
          <div class="h-40 flex items-end justify-center w-full">
            <img
              :src="program.icon"
              :alt="program.label"
              class="max-h-full w-auto object-contain"
            />
          </div>
          <p class="text-[#1a1a1a] text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            {{ program.label }}
          </p>
        </div>
      </div>

      <p
        class="font-bold text-center"
        style="
          font-family: 'Playfair Display', serif;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #5c1a1a;
          max-width: 600px;
        "
      >
        Each experience is designed to support growth appropriate to the participant's stage of
        life.
      </p>
    </div>
  </section>
</template>

<script setup>
import safariIcon from '@/assets/images/icon-safari-camp.svg'
import schoolIcon from '@/assets/images/icon-school-community.svg'
import leaversIcon from '@/assets/images/icon-school-leavers.svg'
import partnerIcon from '@/assets/images/icon-partner-immersion.svg'

const programs = [
  {
    label: 'Youth Safaris and Residential Camps',
    icon: safariIcon,
  },
  {
    label: 'School and Community-based Programs',
    icon: schoolIcon,
  },
  {
    label: 'Transition Programs for School Leavers',
    icon: leaversIcon,
  },
  {
    label: 'Carefully Structured Partner Immersion Experiences',
    icon: partnerIcon,
  },
]
</script>
