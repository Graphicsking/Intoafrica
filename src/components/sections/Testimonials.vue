<template>
  <section class="bg-[#F5F5F5] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-12">
        <h2
          class="font-bold text-[#111827] mb-4"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3rem)"
        >
          Testimonials
        </h2>
        <p
          class="text-[#525252] text-sm leading-relaxed max-w-2xl mx-auto"
          style="font-family: 'Lato', sans-serif"
        >
          We're deeply encouraged by the reflections shared by families, mentors, and young people
          who've journeyed with IntoAfrica Legacy Initiative. Their stories affirm our commitment to
          creating meaningful, culturally rooted experiences that nurture purpose, and identity.
        </p>
      </div>

      <!-- Cards wrapper with transition -->
      <transition name="fade" mode="out-in">
        <div :key="currentPage" class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            v-for="(testimonial, index) in visibleTestimonials"
            :key="index"
            class="flex flex-col gap-5 p-8 rounded-lg"
            style="
              background-color: #f8fafb;
              border: 1.5px solid #ffffff;
              box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
            "
          >
            <!-- Stars + Category -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-0.5">
                <PhStar v-for="i in 5" :key="i" :size="18" color="#D97706" weight="fill" />
              </div>
              <span
                class="text-[#009857] text-sm font-semibold"
                style="font-family: 'Lato', sans-serif"
              >
                {{ testimonial.category }}
              </span>
            </div>

            <!-- Quote text -->
            <p
              class="text-[#404040] text-sm leading-relaxed flex-1"
              style="font-family: 'Lato', sans-serif"
            >
              {{ testimonial.quote }}
            </p>

            <!-- Attribution + Quote marks -->
            <div class="flex items-end justify-between mt-2">
              <span
                class="text-[#171717] font-bold text-sm"
                style="font-family: 'Lato', sans-serif"
              >
                {{ testimonial.author }}
              </span>
              <span
                class="text-[#171717] font-serif leading-none select-none"
                style="
                  font-size: 3rem;
                  line-height: 1;
                  opacity: 0.15;
                  font-family: 'Playfair Display', serif;
                "
              >
                ,,
              </span>
            </div>
          </div>
        </div>
      </transition>

      <!-- Navigation arrows -->
      <div class="flex items-center justify-end gap-3">
        <button
          @click="prev"
          :disabled="currentPage === 0"
          class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
          :class="
            currentPage === 0
              ? 'bg-[#E5E5E5] opacity-50 cursor-not-allowed'
              : 'bg-[#E5E5E5] hover:bg-[#D4D4D4] cursor-pointer'
          "
        >
          <PhArrowLeft
            :size="20"
            :color="currentPage === 0 ? '#A3A3A3' : '#404040'"
            weight="bold"
          />
        </button>

        <button
          @click="next"
          :disabled="currentPage >= maxPage"
          class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
          :class="
            currentPage >= maxPage
              ? 'bg-[#009857] opacity-50 cursor-not-allowed'
              : 'bg-[#009857] hover:bg-[#047748] cursor-pointer'
          "
        >
          <PhArrowRight :size="20" color="white" weight="bold" />
        </button>
      </div>

      <!-- Page indicator dots -->
      <div class="flex items-center justify-end gap-2 mt-4">
        <span
          v-for="i in maxPage + 1"
          :key="i"
          class="block rounded-full transition-all duration-300 cursor-pointer"
          :class="currentPage === i - 1 ? 'bg-[#009857] w-6 h-2' : 'bg-[#D4D4D4] w-2 h-2'"
          @click="currentPage = i - 1"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PhStar, PhArrowLeft, PhArrowRight } from '@phosphor-icons/vue'

const currentPage = ref(0)
const perPage = 2

const testimonials = [
  {
    category: 'Parent & Caregiver',
    quote:
      '"I observed noticeable changes in my child over the course of the program — emotionally, socially, and in confidence. She communicates better at home, peers, takes responsibility, and seems more settled. The progress is clear, even though growth continues."',
    author: 'Parent, Tanzania',
  },
  {
    category: 'Facilitator Observations',
    quote:
      '"Participants showed increased engagement and confidence as the program progressed. Reflection sessions became deeper, and young people demonstrated improved emotional awareness and cooperation."',
    author: 'Facilitator',
  },
  {
    category: 'Youth Participant',
    quote:
      '"This journey changed how I see myself. I came back knowing what I stand for and how I want to live. The mentors didn\'t just teach us — they walked with us every step of the way."',
    author: 'Youth Participant, Kenya',
  },
  {
    category: 'School Partner',
    quote:
      '"The structured reflection built into every day of the program was what set it apart. Our students returned with a maturity and groundedness that we hadn\'t seen from any other travel program."',
    author: 'School Principal, Uganda',
  },
]

const maxPage = computed(() => Math.ceil(testimonials.length / perPage) - 1)

const visibleTestimonials = computed(() => {
  const start = currentPage.value * perPage
  return testimonials.slice(start, start + perPage)
})

const prev = () => {
  if (currentPage.value > 0) currentPage.value--
}
const next = () => {
  if (currentPage.value < maxPage.value) currentPage.value++
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
