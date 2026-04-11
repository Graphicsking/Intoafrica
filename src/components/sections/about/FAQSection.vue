<template>
  <section class="bg-[#F5F5F5] px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-3xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-12">
        <h2
          class="font-bold text-[#111827] mb-4"
          style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 4vw, 3.5rem)"
        >
          Frequently <span style="color: #c94e00">Asked</span> Questions
        </h2>
        <p class="text-[#525252] text-sm" style="font-family: 'Lato', sans-serif">
          If there are any questions you want to ask. We will answer all your questions.
        </p>
      </div>

      <!-- Accordion -->
      <div class="flex flex-col gap-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="rounded-lg overflow-hidden transition-all duration-300"
          :style="activeIndex === index ? 'background-color: #F5F0E8;' : 'background-color: white;'"
        >
          <!-- Question row -->
          <button
            class="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
            @click="toggle(index)"
          >
            <span
              class="text-[#111827] font-bold text-base sm:text-lg leading-snug"
              style="font-family: 'Lato', sans-serif"
            >
              {{ faq.question }}
            </span>
            <PhArrowCircleDown
              :size="28"
              color="#111827"
              weight="regular"
              class="shrink-0 transition-transform duration-300"
              :style="activeIndex === index ? 'transform: rotate(180deg)' : ''"
            />
          </button>

          <!-- Answer -->
          <transition name="accordion">
            <div v-if="activeIndex === index" class="px-6 pb-6">
              <p
                class="text-[#525252] text-sm leading-relaxed"
                style="font-family: 'Lato', sans-serif"
              >
                {{ faq.answer }}
              </p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { PhArrowCircleDown } from '@phosphor-icons/vue'

const activeIndex = ref(1)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Who are IntoAfrica Legacy Initiative experiences designed for?',
    answer:
      'Our experiences are designed for young people between the ages of 12 and 21, as well as families, schools, and purposeful travelers who believe in values-based, reflective travel across Africa.',
  },
  {
    question: 'Are our trips safe?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Purus ut sed interdum quis non nunc tempor amet fringilla. Diam malesuada sed ullamcorper id habitant commodo sed. Sapien lectus et molestie morbi. Id dui molestie enim facilisi cras. Nunc lectus pulvinar suscipit quam.',
  },
  {
    question: 'Where do our programs take you?',
    answer:
      'Our programs take place across East Africa, including Kenya, Tanzania, Uganda, and Rwanda. Each location is selected for its cultural richness, natural landscapes, and community partnership opportunities.',
  },
  {
    question: 'What VISA do I need for East Africa?',
    answer:
      'Visa requirements vary by nationality and destination. We provide detailed guidance on the East Africa Tourist Visa, which covers Kenya, Uganda, and Rwanda in a single permit. Our team will assist you with all documentation.',
  },
  {
    question: 'What are the dangers of mountain climbing?',
    answer:
      'Mountain climbing carries risks including altitude sickness, weather changes, and physical exhaustion. All our treks are led by certified guides with safety protocols in place. Participants receive thorough briefings and are assessed for fitness before departing.',
  },
  {
    question: 'What kind of activities can I expect?',
    answer:
      'Activities include wildlife safaris, guided cultural immersions, community service projects, leadership workshops, journaling sessions, mountain trekking, and evening reflection circles. Every activity is intentional and tied to learning outcomes.',
  },
]
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 300px;
}
</style>
