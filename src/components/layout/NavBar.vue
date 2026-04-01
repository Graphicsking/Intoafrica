<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-500',
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5',
    ]"
  >
    <div
      class="w-full flex items-center justify-between"
      style="padding-left: 120px; padding-right: 120px"
    >
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2">
        <img :src="scrolled ? darkLogo : lightLogo" alt="IntoAfrica" class="h-9 w-auto" />
      </RouterLink>

      <!-- Desktop Nav -->
      <ul class="hidden lg:flex items-center gap-7">
        <li v-for="link in navLinks" :key="link.label">
          <a
            :href="link.href"
            :class="[
              'text-sm font-medium transition-colors duration-300 hover:text-[#009857] cursor-pointer',
              scrolled ? 'text-neutral-900' : 'text-white',
            ]"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- CTA -->
      <div class="hidden lg:block">
        <a
          href="#"
          class="bg-[#009857] text-white text-sm font-bold hover:bg-[#047748] transition-colors duration-200 flex items-center justify-center"
          style="width: 220px; height: 48px"
        >
          Support Our Work
        </a>
      </div>

      <!-- Mobile toggle -->
      <button class="lg:hidden p-2 flex flex-col gap-1.5" @click="mobileOpen = !mobileOpen">
        <span
          :class="[
            'block w-6 h-0.5 transition-colors duration-300',
            scrolled ? 'bg-neutral-900' : 'bg-white',
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 transition-colors duration-300',
            scrolled ? 'bg-neutral-900' : 'bg-white',
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 transition-colors duration-300',
            scrolled ? 'bg-neutral-900' : 'bg-white',
          ]"
        ></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="slide">
      <div
        v-if="mobileOpen"
        class="lg:hidden bg-white border-t border-neutral-100 px-6 py-5 flex flex-col gap-4"
      >
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="text-sm font-medium text-neutral-900 hover:text-[#009857] transition-colors cursor-pointer"
          @click.prevent="handleMobileNav(link.href)"
        >
          {{ link.label }}
        </a>
        <a
          href="#"
          class="bg-[#009857] text-white text-sm font-bold text-center hover:bg-[#047748] transition-colors flex items-center justify-center"
          style="height: 48px"
        >
          Support Our Work
        </a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import lightLogo from '@/assets/images/Logo.svg'
import darkLogo from '@/assets/images/Darklogo.svg'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Ethics', href: '#ethics' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Purposeful Travel', href: '#travel' },
  { label: 'Journeys', href: '#journeys' },
]

const scrollToSection = (href) => {
  if (href === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const handleMobileNav = (href) => {
  mobileOpen.value = false
  scrollToSection(href)
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
