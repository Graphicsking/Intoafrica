<template>
  <footer style="background-color: #0d1b2a">
    <!-- Main footer content -->
    <div class="w-full px-6 py-16 sm:px-10 lg:px-24">
      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <!-- Brand Column -->
        <div class="lg:col-span-1 flex flex-col gap-4">
          <img :src="footerLogo" alt="IntoAfrica" class="h-14 w-auto" />
          <p
            class="text-white font-bold text-sm leading-snug"
            style="font-family: 'Lato', sans-serif"
          >
            Youth Safaris | IntoAfrica Legacy Initiative
          </p>
          <p class="text-white/60 text-sm" style="font-family: 'Lato', sans-serif">
            Nairobi & Thika, Kenya
          </p>
          <p class="text-white/60 text-sm leading-relaxed" style="font-family: 'Lato', sans-serif">
            Guided journeys that shape confident, self-aware, and responsible global citizens.
          </p>
          <div class="flex flex-col gap-1 mt-2">
            <a
              href="mailto:info@youthsafaris.org"
              class="text-sm hover:text-white/80 transition-colors"
              style="color: #d4a96a; font-family: 'Lato', sans-serif"
            >
              Email: info@youthsafaris.org
            </a>
            <a
              href="tel:+254000000000"
              class="text-sm hover:text-white/80 transition-colors"
              style="color: #d4a96a; font-family: 'Lato', sans-serif"
            >
              Phone: +254 XXX XXX XXX
            </a>
          </div>
        </div>

        <!-- About Column -->
        <div class="flex flex-col gap-4">
          <h4
            class="font-bold text-lg"
            style="color: #d4a96a; font-family: 'Playfair Display', serif"
          >
            About
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="link in aboutLinks" :key="link">
              <a
                href="#"
                class="text-white/70 text-sm hover:text-white transition-colors"
                style="font-family: 'Lato', sans-serif"
              >
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Programs Column -->
        <div class="flex flex-col gap-4">
          <h4
            class="font-bold text-lg"
            style="color: #d4a96a; font-family: 'Playfair Display', serif"
          >
            Programs
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="link in programLinks" :key="link">
              <a
                href="#"
                class="text-white/70 text-sm hover:text-white transition-colors"
                style="font-family: 'Lato', sans-serif"
              >
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- For Column -->
        <div class="flex flex-col gap-4">
          <h4
            class="font-bold text-lg"
            style="color: #d4a96a; font-family: 'Playfair Display', serif"
          >
            For
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="link in forLinks" :key="link">
              <a
                href="#"
                class="text-white/70 text-sm hover:text-white transition-colors"
                style="font-family: 'Lato', sans-serif"
              >
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources Column -->
        <div class="flex flex-col gap-4">
          <h4
            class="font-bold text-lg"
            style="color: #d4a96a; font-family: 'Playfair Display', serif"
          >
            Resources
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="link in resourceLinks" :key="link">
              <a
                href="#"
                class="text-white/70 text-sm hover:text-white transition-colors"
                style="font-family: 'Lato', sans-serif"
              >
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div style="border-top: 1px solid rgba(255, 255, 255, 0.1)">
      <div
        class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <!-- Policy links -->
        <div class="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            v-for="policy in policyLinks"
            :key="policy"
            href="#"
            class="text-white/50 text-xs hover:text-white/80 transition-colors"
            style="font-family: 'Lato', sans-serif"
          >
            {{ policy }}
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-white/50 text-xs" style="font-family: 'Lato', sans-serif">
          © 2026 Youth Safaris.. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import footerLogo from '@/assets/images/Logo.svg'

const aboutLinks = [
  'About Youth Safaris',
  "Founder's Note",
  'Our Model',
  'Safeguarding & Child Protection',
  'Sustainability Commitment',
  'Impact & Stories',
]

const programLinks = [
  'Youth Safaris (Mentorship & Camps)',
  'Purposeful Travel',
  'Village Circles',
  'School Clubs',
  'Mentors & Volunteer Training',
  'Regular Departures',
]

const forLinks = [
  'For Parents & Schools',
  'For Purposeful Travelers',
  'For Partners & Donors',
  'Scholarships',
  'Corporate & Group Retreats',
]

const resourceLinks = [
  'Apply Now',
  'Program Calendar',
  'FAQs',
  'Blog / Insights',
  'Media & Press',
  'Contact Us',
]

const policyLinks = ['Privacy policy', 'Terms & conditions', 'Refund Policy', 'Safeguarding Policy']
</script>
