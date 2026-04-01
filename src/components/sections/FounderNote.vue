<template>
  <section class="bg-white px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 rounded-0 overflow-hidden shadow-lg">
        <!-- Left: Green card -->
        <div class="bg-primary-900 p-10 sm:p-12 flex flex-col justify-center gap-6">
          <h2
            class="font-bold leading-tight"
            style="font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3.5vw, 2.8rem)"
          >
            <span class="text-white">Founder's </span>
            <span style="color: #d4a96a">Note</span>
          </h2>

          <div class="flex flex-col gap-4">
            <p
              class="text-white/85 text-sm leading-relaxed"
              style="font-family: 'Lato', sans-serif"
            >
              After years of leading travel experiences across Africa, I began to see the deeper
              potential of the land — not only to inspire, but to form.
            </p>
            <p
              class="text-white/85 text-sm leading-relaxed"
              style="font-family: 'Lato', sans-serif"
            >
              As both a mentor and a mother, I recognised how critical structured guidance is during
              life's transitional stages. Travel without reflection remains external; with
              mentorship, it becomes transformational.
            </p>
            <p
              class="text-white/85 text-sm leading-relaxed"
              style="font-family: 'Lato', sans-serif"
            >
              Youth Safaris was founded on that conviction — to design journeys where experience
              becomes formation and movement becomes maturity.
            </p>
          </div>
        </div>

        <!-- Right: Founder photo -->
        <div class="relative min-h-[420px]">
          <img
            :src="founderPhoto"
            alt="Emmy Moshi"
            class="w-full h-full object-cover object-top absolute inset-0"
          />

          <!-- Name overlay -->
          <div
            class="absolute bottom-0 left-0 right-0 px-8 py-6"
            style="background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 100%)"
          >
            <p class="text-white/80 text-sm mb-1" style="font-family: 'Lato', sans-serif">
              Emmy Moshi
            </p>
            <p class="text-white font-bold text-lg" style="font-family: 'Lato', sans-serif">
              Founder, IntoAfrica Legacy
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import founderPhoto from '@/assets/images/founder.jpg'
</script>
