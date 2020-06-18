<template>
  <div class="nav" ref="navigation">
    <div class="container">
      <TheNavigationFull class="hidden sm:flex" />
      <TheNavigationReduced class="flex sm:hidden" />
      <transition name="animation" mode="out-in">
        <TheNavigationPopup v-if="popup" />
      </transition>
    </div>
  </div>
</template>

<script>
import TheNavigationFull from '@/components/TheNavigationFull'
import TheNavigationReduced from '@/components/TheNavigationReduced'
import TheNavigationPopup from '@/components/TheNavigationPopup'
import { mapState } from 'vuex'
export default {
  name: 'TheNavigation',
  components: { TheNavigationFull, TheNavigationReduced, TheNavigationPopup },
  computed: {
    ...mapState('navigation', ['items', 'popup']),
  },
  methods: {
    setNavHeight: function() {
      let height = this.$refs.navigation.offsetHeight
      document.documentElement.style.setProperty('--navigation-height', `${height}px`)
    },
  },
  mounted: function() {
    this.setNavHeight()
    window.addEventListener('resize', () => {
      this.setNavHeight()
    })
  },
}
</script>

<style lang="postcss" scoped>
.nav {
  @apply fixed inset-x-0 top-0 w-screen border-b border-gray-400 border-opacity-80 shadow-lg;
  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), rgba(242, 245, 249, 0.9) 95%, hsla(0, 0%, 93.7%, 0.9));
  z-index: var(--navigation-zindex);
}
/* purgecss start ignore */
.animation-leave-active,
.animation-enter-active {
  border-bottom-left-radius: 0;
  transition: opacity 0.2s ease, transform 0.3s ease, border-bottom-left-radius 0.2s ease;
}
.animation-enter,
.animation-leave-to {
  border-bottom-left-radius: 50%;
  opacity: 0;
  transform: translateX(1rem) translateY(-1rem);
}
/* purgecss end ignore */
</style>
