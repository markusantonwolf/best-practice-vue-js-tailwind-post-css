<template>
  <div id="app" class="font-light text-copy tracking-wide leading-snug w-full text-xl">
    <div v-if="loaded">
      <TheNavigation />
      <TheNotifications />
      <div
        class="container container--space"
        :class="{'h-screen filter-blur overflow-hidden': popup}"
      >
        <transition name="page" mode="out-in">
          <router-view :key="route_name_key" />
        </transition>
      </div>
    </div>
    <div class="loading" v-else>
      <BaseLoading />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BaseLoading from '@/components/BaseLoading'
import TheNotifications from '@/components/TheNotifications'
import TheNavigation from '@/components/TheNavigation'
export default {
  name: 'Home',
  components: { TheNavigation, TheNotifications, BaseLoading },
  data() {
    return {
      loaded: false,
    }
  },
  metaInfo() {
    return {
      title: this.data.title + ' | ' + this.data.site,
      htmlAttrs: {
        lang: this.language,
      },
      meta: [
        { property: 'og:site_name', content: this.data.site },
        { property: 'og:title', content: this.data.title },
        { property: 'og:description', content: this.data.description },
        { property: 'og:image', content: this.data.image.url },
        { property: 'og:image:width', content: this.data.image.width },
        { property: 'og:image:height', content: this.data.image.height },
        { name: 'description', content: this.data.description.substring(0, 160) },
      ],
      link: this.data.link,
    }
  },
  computed: {
    ...mapState('navigation', ['popup']),
    ...mapState('meta', ['data', 'language']),
    route_name_key: function() {
      return this.$route.name + '-' + this.language
    },
  },
  methods: {
    ...mapActions('meta', ['setMeta', 'setLanguage']),
    ...mapActions('navigation', ['popupHide']),
    setViewHeight: function() {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
  mounted: function() {
    this.setViewHeight()
    window.addEventListener('resize', () => {
      this.setViewHeight()
    })
    this.setMeta({ site: this.$t('site') })

    this.$store.subscribe(mutation => {
      if (mutation.type === 'meta/SET_LANGUAGE') {
        this.$i18n.locale = mutation.payload
        this.popupHide()
      }
    })

    this.loaded = true
  },
}
</script>

<style lang="postcss" scoped>
.container--space {
  padding-top: calc(4rem + var(--navigation-height));
}
.loading {
  @apply absolute inset-0 flex items-center justify-center text-secondary;
}

/* purgecss start ignore */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.1s ease, transform 0.1s ease;
}
.page-enter {
  opacity: 0;
  transform: translateX(2rem);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-2rem);
}
/* purgecss end ignore */
</style>
