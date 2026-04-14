<template>
  <section class="bg-white px-6 py-16 sm:px-10 lg:px-24 lg:py-20">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden">
        <!-- Left: Cream card with text -->
        <div class="bg-[#F5F0E8] p-10 sm:p-12 flex flex-col justify-center gap-6">
          <h2
            class="font-bold leading-tight"
            style="
              font-family: 'Playfair Display', serif;
              font-size: clamp(2rem, 3.5vw, 2.8rem);
              color: #5c1a1a;
            "
          >
            Our Story
          </h2>
          <div class="flex flex-col gap-4">
            <p
              class="text-neutral-700 text-sm leading-relaxed"
              style="font-family: 'Lato', sans-serif"
            >
              Youth Safaris emerged from years of working closely with young people and families and
              observing a growing need for spaces that support inner growth alongside practical life
              readiness.
            </p>
            <p
              class="text-neutral-700 text-sm leading-relaxed"
              style="font-family: 'Lato', sans-serif"
            >
              We saw that many young people move through education without time to pause, reflect,
              or understand who they are becoming. At the same time, Africa offers powerful
              landscapes, cultures, and stories that naturally invite reflection and learning.
            </p>
            <p
              class="text-neutral-700 text-sm leading-relaxed"
              style="font-family: 'Lato', sans-serif"
            >
              Youth Safaris was created to bridge this gap, combining travel, mentorship, and
              experiential learning in ways that are grounded, intentional, and respectful.
            </p>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="min-h-[400px] lg:min-h-0">
          <img
            :src="storyImage"
            alt="African cultural performance"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import storyImage from '@/assets/images/our-story.jpg'
</script>
