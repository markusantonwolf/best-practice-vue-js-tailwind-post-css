<template>
  <div class="absolute inset-0 w-screen h-screen bg-white bg-opacity-60 overflow-hidden">
    <div class="absolute right-0 top-0 px-8 bg-white rounded-full py-4" @click="popupToggle()">
      <BaseIcon name="times" class="text-primary w-8" />
    </div>
    <div class="flex flex-col h-full pt-32">
      <TheNavigationLanguages class="flex flex-col items-start p-12" type="popup" />
      <!-- <div class="flex flex-grow self-end">
        <a
          :href="getKebabCase($t('language_change', locale))"
          class="nav__lang"
          :class="{'is-active cursor-default': isActiveLanguage(locale)}"
          v-for="(locale, index) in languages"
          :key="index"
          @click.prevent="changeLanguage(locale)"
        >{{$t('language', locale)}}</a>
      </div>-->
      <div class="flex flex-col justify-end flex-grow p-12">
        <router-link
          v-for="(item, index) in items"
          :key="index"
          :to="item.route"
          class="nav__item"
        >{{$t(item.text)}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BaseIcon from '@/components/BaseIcon'
import TheNavigationLanguages from '@/components/TheNavigationLanguages'
export default {
  name: 'TheNavigationPopup',
  components: { TheNavigationLanguages, BaseIcon },
  computed: {
    ...mapState('navigation', ['items']),
  },
  methods: {
    ...mapActions('navigation', ['popupToggle']),
  },
  mounted: function() {},
}
</script>
<style lang="postcss" scoped>
.nav__item {
  @apply block text-primary text-glow text-4xl font-light m-4;
}
/* .nav__item:last-of-type {
  @apply border-r-2;
} */
.nav__item:hover,
.nav__item.is-active,
.nav__item.is-exact-active {
  @apply text-black font-normal;
}
</style>
